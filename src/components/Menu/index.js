import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

// import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="TuioFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo video</Button>
    </nav>
  );
}

export default Menu;
