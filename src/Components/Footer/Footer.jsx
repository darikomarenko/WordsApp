import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <nav>
        <ul>
          <li>
            <Link to="instruction">Как пользоваться?</Link>
          </li>
          <li>
            <Link to="*">Обратная связь</Link>
          </li>
          <li>
            <Link to="https://github.com/darikomarenko">Связаться с нами</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
