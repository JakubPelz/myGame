import React from 'react';


const Footer = () => {
    return (
        <div const>
            <div className="ui inverted vertical footer segment">
                <div className="ui center aligned container">
                    <div className="ui stackable inverted divided grid">
                        <div className="three wide column">
                            <h4>Důležité upozornění</h4>
                            <p>Appka je ve vývoji</p>
                        </div>
                        <div className="three wide column">
                            <h4>Použité nástroje</h4>
                            <p>Tato stránka byla nakodována pomocí MERN.</p>
                        </div>
                        <div className="three wide column">
                            <h4>Hledáme moderátory</h4>
                            <p>Máš zájem s námi vyvyjet tuto hru? <a href="/" className="">Kontaktuj nás!</a></p>
                        </div>
                        <div className="seven wide column">
                            <h5>Autoři</h5>
                            <p>Tento web po herní stránce navrhnul <a href="https://www.onlinehra.cz/" className=""> Axiss</a>.</p>
                            <p>naprogramoval a zprovoznil<a href="https://www.linkedin.com/in/jakub-pelz-69429621a/" className=""> Jakub Pelz.</a></p>
                        </div>
                    </div>
                    <div className="ui inverted section divider"></div>
                    <div className="ui horizontal inverted small divided link list">
                        <a href="/" className="item">
                            Mapa stránky
                        </a>
                        <a href="/" className="item">
                            Kontaktujte nás
                        </a>
                        <a href="/" className="item">
                            Podmínky použití
                        </a>
                        <a href="/" className="item">
                            Ochrana osobních údajů
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;