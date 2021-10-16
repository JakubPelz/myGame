import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            Fantasy text game
        </Link>      
        <div className="right menu">
        <Link to="/" className="item">
              Deník
          </Link>
          <Link to="/" className="item">
              Pošta
          </Link>
          <Link to="/" className="item">
              Diskuse
          </Link>
          <Link to="/" className="item">
              Statistiky
          </Link>
          <Link to="/" className="item">
              Hledat
          </Link>
          <Link to="/" className="item">
              Odhlásit
          </Link>
          <div className="item">
              Tady budou hodiny
          </div>
        </div>
       </div>
  
    )
}

export default Header;

