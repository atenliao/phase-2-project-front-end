import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return (
        <div>
            <ul>
                <NavLink to='/' exact>
                    Home
                </NavLink>
            </ul>
            <ul>
                <NavLink to ='Form' >
                    Form
                </NavLink>
            </ul>
            <ul>
                <NavLink to='/pizzalist' >Pizzas</NavLink>
            </ul>
        </div>
    )
}

export default NavBar;