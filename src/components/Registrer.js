import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Alert , Snackbar } from "@mui/material";

const handleFacebookResponse = (response) => {
  console.log(response);
  // handle Facebook login response
};
const responseGoogle = (response) => {
  console.log(response);
}

const Registrer = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err , setErr] = useState("");
  const [success , setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const Auth = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json();

    console.log(data);

    switch(data.msg){
      case "user created successfully":
        setSuccess("user created successfully");
        break;
      case "user already exists":
        setErr("user with the given email already exists");
        break;
      default:
        // setErr(data.msg);
        // navigate("/dashboard");
    }

    // dispatch(LoginUser({ email, password }));
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                {isError && <p className="has-text-centered">{message}</p>}
                <h1 className="title is-2">Bienvenu</h1>
                <div className="field">
                  <label className="label">Nom Complet</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Saisir votre nom "
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Register"}
                  </button>
                </div>
                <FacebookLogin
                  appId="votre_app_id_facebook"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={handleFacebookResponse}
                  cssClass="my-facebook-button-class"
                  icon="fa-facebook"
                  />

              <div>
                <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} >Login with Google</button>
                 )}
              
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}/>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Snackbar autoHideDuration={4000} open={ err === "" ? false : true } onClose={()=>{ setErr("") }}  >
        <Alert variant="filled" severity="error" onClose={()=>{ setErr("") }} >
          {
            err
          }
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={4000} open={ success === "" ? false : true } onClose={()=>{ setSuccess("") }}  >
        <Alert variant="filled" severity="success" onClose={()=>{ setSuccess("") }} >
          {
            success
          }
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Registrer;
