import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FormAddFormateur= () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [cv, setCV] = useState("");

  const navigate = useNavigate();
const handleFileChange=()=>{

};

  const saveFormateur= async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/formateur", {
        name: name,
        adress: adress,
      });
      navigate("/formateur");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Devenir instructeur </h1>
   
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveFormateur} className="box" >
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nom Complet</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Saisir votre non et votre prénom "
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Adress E-mail</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    placeholder="nom@email.com"
                  />
                </div>
              </div>
              <div className="field"></div>
                <label className="label">Numéro Téléphone</label>
                  <div className="control">
                   <input
                    type="text"
                    className="input"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder="Saisir votre numéro de téléphone"
                  />
              </div>
             
                <div className="field">
                <label className="label">Votre cv </label>
                <div className="control">
                  <input
                     type="file"
                      name="cv"
                      onChange={handleFileChange} accept=".pdf" 
                     
                  />
                </div>

              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                   type="text"
                   value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Saisir votre message"
                  />
                </div>
              </div>
 
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Envoyer 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddFormateur;