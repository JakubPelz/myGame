import React from "react";

const Posta = () => {
    return (
                <div className="twelve wide column">
                <h4 className="ui center aligned segment">Horní menu - Pošta</h4>
                <h4 className="ui center aligned segment">Ovládání hry - Aliance</h4>
                    <p className="ui segment">Osobní pošta slouží ke komunikaci s ostatními gubernáty. 
                    Pokud sháníš novou alianci nebo si chceš v soukromí promluvit s nějakým dalším gubernátem, máš možnost. 
                    Stačí pouze zadat název gubernátu, kterému budeš poštu odesílat, napsat zprávu a odeslat. 
                    Používat lze tyto tagy pro formátování zpráv: strong, u, i nebo odkazy začínající na http://</p>

                    <p><strong className="green">Automatické odkazy v poště</strong>   - Kromě odkazu na detail gubernátu 
                    nebo aliance odesilatele, naleznete ještě v každém příspěvku tyto dva odkazy.</p>
                    <ul>
                        <li><span className="green">@</span> - Po kliknutí se v místě, kam se zadává příjemce pošty, objeví název daného gubernátu.</li>
                    </ul>
                    <h4 className="green">Tlačítka v poště</h4>
                </div>
    )
}

export default Posta;