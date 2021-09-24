import React from "react";

const Diskuse = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Horní menu - Diskuse</h4>
                    <p className="ui segment">Diskuse slouží ke komunikaci hráčů s okolím.
                        Některé jsou jenom pro čtení, na další může psát zase jenom vedení aliance.
                        Na všech diskusích se udržuje čas poslední návštěvy všech gubernátů, takže je zde i signalizace nových příspěvků.
                        Používat lze tyto tagy pro formátování zpráv: strong, u, i nebo odkazy začínající na http://</p>

                    <p><strong className="green">Rozdělení diskusí</strong> - Diskuse jsou rozdělené do několika kategorií,
                        příspevky mimo téma jsou mazány a hříšníci odměňováni zákazem zápisu, nejčastěji na několik dní.</p>
                    <ul>
                        <li> <span className="green">Bezalianční</span> - Tato diskuse je aktivní pouze gubernátů, které nejsou v žádné alianci. 
                        Nikdo jiný do nich nemůže psát a ani z nich číst.</li>
                        <li> <span className="green">Alianční</span> - Slouží ke komunikaci gubernátů, hrajících ve stejné alianci. 
                        Nikdo jiný než daná aliance nevidí příspěvky a ani do takové diskuse nemůže přispívat. 
                        Příspěvky imperátora aliance mají vždy jinou barvu.</li>
                        <li> <span className="green">Novinky v systému</span> - Administrátoři zde informují hráče o důležitých změnách či událostech ve hře. 
                        Diskuse je pouze pro čtení.</li>
                        <li> <span className="green">Náměty a připomínky</span> - Přispívat může každý kdo má nějakou připomínku ke hře nebo námět například na zlepšení.</li>
                        <li> <span className="green">Chat</span> - Téma vlné. </li>
                        <li> <span className="green">Dotazy</span>  - Není vám něco jasné ohledně pravidel? Pročetli jste již celý návod ke hře a stále jste nenašli odpověď na svojí otázku? Potom jste zde správně.</li>
                        <li> <span className="green">Nábory</span> - Slouží k inzerátům aliancí, které shánějí nové členy. A také gubernátům, hledajícím novou alianci.</li>
                        <li> <span className="green">Imperátorské</span> - Slouží k důležitým oznámením. Například vyhlášení nebo ukončení války.</li>
                        <li> <span className="green">Automat</span> - Zde se zobrazují automatické zprávy o válkách a o artefaktech.</li>
                    </ul>
                </div>
    )
}

export default Diskuse;