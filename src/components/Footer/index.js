import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Link to="https://github.com/ziguirifow">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Logo Github" />
      </Link>
      <Link to="https://www.linkedin.com/in/thulio-alves-gomes/">
        <img src="https://oficinadainteligencia.com.br/wp-content/uploads/2019/04/simple-icon-linkedin-white.png" alt="Logo Linkedin" />
      </Link>

      {/* <Link to="/">
        <img className="Logo" src={Logo} alt="TuioFlix logo" />
      </Link> */}

      <p>
        Página desenvolvida por
        {' '}
        <Link to="/">Thulio</Link>
        {' '}
        durante a #ImersãoReact da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
