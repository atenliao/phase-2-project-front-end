import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <NavLink className="navbar-brand fs-3" to="/" exact>Supper Pizza</NavLink>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink className = "nav-item nav-link fs-4" to='/' exact>
                    Home
                </NavLink>
                <NavLink className = "nav-item nav-link fs-4" to='/pizzalist' >Pizzas</NavLink>
                <NavLink className = "nav-item nav-link fs-4" to ='/Form' >
                    Form
                </NavLink>
                </div>
                </div>
            </nav>  
    )
}

export default NavBar;