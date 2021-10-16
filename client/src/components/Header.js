import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <NavLink to="/" className="item">
            Fantasy text game
        </NavLink>
        <NavLink to="/inGame" className="item">
            Přímo do hry (pracovní)
        </NavLink>       
        <div className="right menu">
          <NavLink to="/informace" className="item">
              Návod
          </NavLink>
          <NavLink to="/registrace" className="item">
              Registrace
          </NavLink>
          <NavLink to="/" className="item">
              Přihlášení
          </NavLink>
        </div>
       </div>
  
    )
}

export default Header;