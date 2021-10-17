import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <NavLink exact to="/" className="item">
            Fantasy text game
        </NavLink>
        <NavLink exact to="/inGame" className="item">
            Přímo do hry (pracovní)
        </NavLink>       
        <div className="right menu">
          <NavLink exact to="/informace" className="item">
              Návod
          </NavLink>
          <NavLink exact exact to="/registrace" className="item">
              Registrace
          </NavLink>
          <NavLink to="/prihlaseni" className="item">
              Přihlášení
          </NavLink>
        </div>
       </div>
  
    )
}

export default Header;