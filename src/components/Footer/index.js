import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>

      <a href="https://github.com/ziguirifow" rel="noopener noreferrer" target="_blank">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Logo Github" />
      </a>
      <a href="https://www.linkedin.com/in/thulio-alves-gomes/" rel="noopener noreferrer" target="_blank">
        <img src="https://oficinadainteligencia.com.br/wp-content/uploads/2019/04/simple-icon-linkedin-white.png" alt="Logo Linkedin" />
      </a>

      <p>
        Página desenvolvida por
        {' '}
        <Link to="/" onClick={window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>Thulio</Link>
        {' '}
        durante a #ImersãoReact da Alura
      </p>

    </FooterBase>
  );
}

export default Footer;
