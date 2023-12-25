import React from 'react';
import logo from './logo.png';
import './header.css';

export default function Header() {
    return (
    <header className="header-container">
        <img className="header-logo" src={logo} alt="Логотип приложения"/>
        <nav className="header-nav">
        <ul>
            <li>Главная</li>
            <li>Игра</li>
            <li>Профиль</li>
        </ul>
        </nav>
        <button className="logout-button">Выйти</button>
    </header>
    );
};