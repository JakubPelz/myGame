import React from "react";

const Hledat = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Horní menu - Hledat</h4>
                    <p className="ui segment">Vyhledávání slouží k hledání gubernátů, aliancí a také k hledání bývalých členů 
                    nějaké aliance. Bývalí jsou ti, kterí z dané aliance odešli či byli vyloučeni. 
                    Pokud se nic nevyplní, potom se po kliknutí na tlačítko hledá vždy vlastí gubernát či aliance.</p>
                    
                    <p><strong>Hledej gubernát</strong> - Zobrazí detail gubernátu. Žluté kolečko před názvem gubernátu je aktivní 
                    odkaz pro odeslání rychlé pošty gubernátu. 
                    Pokud je hledaný gubernát online, kolečko je zelené. Pokud je gubernát zmrazený, kolečko je modré.</p>

                     <p><strong className="green">Hledej alianci</strong> - Zobrazí detail aliance s přímými odkazy na aktuální útoky aliance, zkušenosti či historii aliance.</p>

                     <p><strong className="green">Hledej bývalé členy</strong> - Zobrazí všechny gubernáty ve světě Evolution, které v minulé době byly členy dané aliance.</p>      

                </div>
    )
}

export default Hledat;