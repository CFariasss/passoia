import React from 'react';
import "./Header.scss";
import logo from "../../assets/logo.png"; 

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* LOGO */}
        <img className="./assets/logo.png" src={logo} alt="Passoia Logo" />

        {/* MENU DESKTOP */}
        <nav className="header-menu">
          <a href="#">LOOKS</a>
          <a href="#">LANÇAMENTOS</a>
          <a href="#">NOVIDADES</a>
        </nav>

        {/* MENU MOBILE (icone hamburguer) */}
        <button className="header-hamburguer">
          ☰
        </button>
      </div>
    </header>
  );
}
