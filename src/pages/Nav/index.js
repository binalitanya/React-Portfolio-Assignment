import React from "react";
import "../../index.css";

function Nav() {
    return(
        <section>

            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <a className="navbar-item ml-3">

                        <h5 className="has-text-weight-bold">Binali Ukwatte</h5>

                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item px-5">
                            Home
                        </a>

                        <a className="navbar-item px-5">
                            About
                        </a>

                        <a className="navbar-item px-5">
                            Portfolio
                        </a>

                        <a className="navbar-item px-5">
                            My Skills
                        </a>

                        <a className="navbar-item px-5">
                            Contact Me
                        </a>

                    </div>

                </div>
                
            </nav>
        </section>
    );
}

export default Nav;