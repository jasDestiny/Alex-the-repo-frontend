import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";

function Header({userSigned,handleSignOut}) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-link" to ="/">Project Repository</Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link className="nav-link" to="/">Services</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/">Providers</Link>
              </li> */}
              <li class="nav-item">
                {
                  userSigned?(<Link className="nav-link" onClick={()=>{
                      handleSignOut()
                  }} to="/">
                    Sign Out
                  </Link>):(<Link className="nav-link" to ="/signin">Sign In</Link>)
                }
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
