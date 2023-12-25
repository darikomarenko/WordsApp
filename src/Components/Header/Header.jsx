import React from "react";
import logo from "./logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Логотип приложения" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="game">Играть</Link>
          </li>
          <li>
            <Link to="*">Профиль</Link>
          </li>
        </ul>
      </nav>
      <button className="logout-button">Выйти</button>
    </header>
  );
}
