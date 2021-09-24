import React from "react";

const Imperator = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Imperátor</h4>
                    <p className="ui segment">Imperátorská sekce (nebo sekce Vojevůdce či Diplomat)
                        slouží pro správu aliance. Vedení aliance zde spravuje alianční pokladnu,
                        má přehled nad všemi útoky a také vidí detaily gubernátů všech členů aliance.</p>

                    <p><strong className="green">Pokladna</strong> - Při každém úspešném vojenském útoku se
                        alianční pokladna naplní surovinami a pozemky. Pozemky je třeba každý den ihned rozdělit
                        mezi členy aliance, protože jinak další den zmizí. Pozemky z pokladny nelze přidělovat
                        dvěma největším gubernátům v alianci a maximální počet pozemků, přidělených jednomu gubernátu,
                        může být 40% původního počtu. Suroviny v alianční pokladně nepropadají,
                        ale mají určité maximum, které když je překročeno, tak další suroviny už do pokladny nepřibývají,
                        protože se tam už nevejdou.</p>

                    <p><strong className="green">Budovy</strong> - Alianční budovy se liší od těch budov klasických,
                        které si staví sám gubernát. Nestaví se, ale jen aktivují.
                        Každý den může vedení aliance aktivovat nebo zrušit jednu alianční budovu.
                        Aktivovaná budova začíná platit až po přepočtu, zrušená budova platí do konce dne, i při přepočtu,
                        a po něm platit přestává. Každá aliance může mít aktivní maximálně 4 budovy.
                        Budovy nelze nijak zbořit či deaktivovat žádným magický, vojenským ani špionážním útokem.
                        Alianční budovy přidávají různě bonusy, které platí pro všechny členy aliance a to bez rozdílu.
                        Jediná podmínka je, že gubernát musí být v alianci minimálně 5 dní, nebo musí mít věk nižší než 10.
                        V době kdy tuto podmínku nesplňuje, žádné bonusy nezískává.</p>

                    <p>Zde jsou jednotlivé bonusy:</p>

                    <ul className="green">
                        <li>+10% k vojenské obraně</li>
                        <li>+10% k vojenskému útoku</li>
                        <li>+10% k magické obraně</li>
                        <li>+10% k magickému útoku</li>
                        <li>+20% k výdělkům v profesích (nevztahuje se na stavbu portálu)</li>
                        <li>+4 špionážní body, +50% odolnost na špionáž, která se může spořit až 3 dny a stojí o 50% méně zlata</li>
                        <li>+1 vojenský útok, +5 pozitivní energie, +10 negativní energie</li>
                        <li>+3 tahy navíc</li>
                        <li>-15% cena vojenských jednotek, -25% cena základních budov, -35% spotřeba jídla</li>
                        <li>+4% na obranný val a magický štít (obě kouzla zároveň nic nestojí), +10% na maximální zlepšení profesních budov, +15% na maximální zlepšení obranných věží</li>
                    </ul>

                    <p><strong className="green">Útoky</strong> - Zde může vedení aliance sledovat všechny druhy útoků celé aliance. Odeslané útoky může také zrušit.</p>

                    <p><strong className="green">Pakty</strong> - Vedení aliance má i přehled o všech paktech.
                        Aktuální pakty lze i ukládat a poté, někdy v budoucnu, zase znovu aktivovat. To vše jedním kliknutím,
                        takže není třeba říkat všem členům jaký pakt mají komu nabídnout. Ušetří to hlavně čas. Uložit lze
                        až 5 různých kombinací paktů. Tyto uložené verze paktů mají i jednu</p>

                    <p><strong className="green">Vývěska</strong> - Alianční vývěska slouží k zobrazování informací pro ostatní členy aliance.</p>

                    <p><strong className="green">Žádosti</strong> - Zobrazují se zde všechny žádosti o vstup do aliance. Vedení aliance zde může přijímat nové členy.
                        Maximální počet členů je 12 a nové členy nelze přijímat v době od 21:00 do 01:00.</p>

                    <p><strong className="green">Sledování</strong> - Slouží pro lepší přehled o alianci. Zobrazují se zde informace o všech základních i speciálních budovách členů v alianci, informace o rozložení obyvatelstva v profesích a o počtu surovin na tržišti od jednotlivých členů.
                        Vedení aliance se zde také dozví zda a které gubernáty mají zakouzlený Obranný val a Magický štít.</p>

                    <p><strong className="green">Alianční materiál</strong> -  Slouží k veřejné prezentaci každé aliance.
                        Tento materiál se vždy zobrazuje v detailu každé aliance, například při vyhledávání.</p>

                    <ul>

                        <li> <span className="green">Propagační text</span> - Každá aliance si může zvolit krátký text, ve kterém něco sdělí ostatním. Maximální délka textu je 255 znaků.</li>


                        <li> <span className="green">Znak Aliance</span> - Kromě aliančního textu lze nahrát i znak aliance. 
                        Znak aliance by měl mít rozměry 120x120px s koncovkou gif. Jako znak je zakázáno používat pohyblivé 
                        obrázky. Znak se poté objevuje vedle aliančního textu.</li>
                    </ul>
                </div>
    )
}

export default Imperator;