import React from "react";
import "./nav.css";
import Logo from '../../assets/Bella Olonje logo 111 1 (1).png'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://localhost:3000/">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-li ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="http://localhost:3000/#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="http://localhost:3000/#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="http://localhost:3000/#">
                Faq
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="http://localhost:3000/#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
