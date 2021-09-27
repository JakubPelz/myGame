import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            Fantasy text game
        </Link>      
        <div className="right menu">
          <Link to="/informace" className="item">
              Návod
          </Link>
          <Link to="/informace" className="item">
              Registrace
          </Link>
          <Link to="/" className="item">
              Přihlášení
          </Link>
        </div>
       </div>
  
    )
}

export default Header;