import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';



const handleFacebookResponse = (response) => {
  console.log(response);
  // handle Facebook login response
};
const responseGoogle = (response) => {
  console.log(response);
}


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", {
        password,
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={handleSubmit } className="box">
                {isError && <p className="has-text-centered">{message}</p>}
                <h1 className="title is-2">login </h1>
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
                    className="btn"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <div className="social-btn">
                <div>
                <FacebookLogin
                appId="votre_app_id_facebook"
                  autoLoad={false}
                fields="name,email,picture"
                 callback={handleFacebookResponse}
                cssClass="my-facebook-button-class"
                 icon="fa-facebook"
          /></div>
          <div>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
             render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} >Login with Google</button>
                )}
              
             buttonText="Login"
              onSuccess={responseGoogle}
            onFailure={responseGoogle}
             cookiePolicy={'single_host_origin'}
             /></div>
             </div>
  

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
