import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import 'bulma/css/bulma.min.css';
import { Dropdown } from 'react-bulma-components';


//const LanguageSelector = () => {
  //const [selectedLanguage, setSelectedLanguage] = useState('fr');}

  //const handleLanguageChange = (event) => {
    //setSelectedLanguage(event.target.value);
 // };

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="UVCT " className="navbar-item">
            <img src={logo} width="112" height="28" alt="logo" />
          </NavLink>
          

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Actions</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Action 1
          </a>
          <a href="#" className="dropdown-item">
            Action 2
          </a>
          <a href="#" className="dropdown-item">
            Action 3
          </a>
        </div>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-right">
        <input className="input is-rounded" type="search" placeholder="Rechercher..." />
        <span className="icon is-small is-right">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
    <NavLink to="/formateur">
      <button className="button is-primary">Devenir instructeur</button>
    </NavLink>
    <NavLink to="/">
      <button className="button is-primary">Se Connecter</button>
    </NavLink>
    <NavLink to="/formateur">
      <button className="button is-primary">s'inscrire</button>
    </NavLink>



       
      </nav>
    </div>
  );
};

export default Navbar;
