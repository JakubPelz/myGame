import React from "react";

const VojenskeUtoky = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Vojenské útoky</h4>
                    <p className="ui segment">Vojenské útoky slouží k dobývání pozemků. Ale nejen k tomu.
                        Vojenským útokem lze poničit nepřátelský gubernát, zničit mu zásoby,
                        nakazit ho morem nebo lenivostí a také lze získat důležité informace o soupeři jako je počet zásob,
                        počet tahů nebo síla obrany. Vojensky útočit lze az po 5. dni ve světě Evolution. Poté lze odesílat útoky až po
                        5. odehraném tahu, Víly po 3. odehraném tahu. Každá rasa může také odesílat různý počet vojenských útoků a
                        tento počet může zvýšit jedna z aliančních budov. Minimální počet jednotek v každém útoku musí být 10% z celkového počtu.
                        Vojensky nelze útočit na gubernáty z vlastní aliance ani na spojence.</p>

                    <p><strong className="green">Cíl útoku</strong>  - Pokud chcete odeslat vojenský útok,
                        musíte nejdříve zadat cíl, tj. jméno gubernátu, na který bude útok směřovat.
                        Při zadávání názvu gubernátu nezáleží na velikosti písmen.</p>

                    <p><strong className="green">Druh útoku</strong> - Existuje několik druhů vojenských útoků,
                        kdy každý má jiný účinek i základní šanci na úspěch.
                        Bezalianční gubernáty nebo aliance, která nevyhlásila žádný druh války,
                        mohou posílat pouze dobyvačné útoky. Všechny útoky kromě dobyvačného lze použít pouze v přijaté válce.</p>

                    <ul>
                        <li> <span className="green">Dobyvačný</span> - Jedná se o zakladní útok, cílený na získaní pozemků.
                            Zisk/ztráta pozemků je maximálně 5.5% z pozemků obránce. Při úspěšném útoku na gubernát o rozloze 30.000
                            pozemků je tedy maximální zisk 1.650, při skupinovém útoku maximálně 2.060 pozemků. Aby měl útok šanci na úspěch,
                            musí mít sílu minimálně 75% celkové síly obránce (takže na obranu o celkové síle 1M nikdy neprojde menší útok než 750k).
                            Čím větší převaha útoku, tím větší šance že útok uspěje a naopak.</li>

                        <li> <span className="green">Destruktivní</span> - Zisk pozemků je zde pouze 70% z maxima.
                            Při neúspěšném útoku jsou ztráty obránce o 25% vyšší. Pokud bude útok úspěšný, obránce ztratí o 75%
                            více jednotek, počet zbořených budov bude 4x vyšší (pokud se zboří obytné domy tak lidé neodcházejí
                            ihned jako při zemětřesení, ale až po přepočtu) a šance na zboření speciální budovy je také 4x vyšší
                            než při normálním útoku. Při útoku se zničí 40% všech zásob doma i na tržišti. S
                            ám útočník potom ztrácí o 25% více jednotek a to vždy.
                            Při úspěšném útoku je na obránce sesláno kouzlo Destrukce o síle 3-6x síla útočníka.
                            Minimální síla útočníka musí být 75% celkové síly obránce. Informace o ztrátach soupeře se nezobrazují.
                            Pouze ztráta a zisk pozemků nebo zboření speciální budovy.</li>

                        <li> <span className="green">Magický</span> - Pokud se nemůžete magicky prosadit,
                            budete nejspíš potřebovat tento typ útoku. Aby měl útok šanci na úspěch,
                            musí mít sílu minimálně 65% celkové síly obránce. Počet získaných pozemků je 70% ze základního útoku.
                            Při úspěšném útoku jsou na obránce seslána kouzla Lenovist, Mor a Destrukce o síle 3-6x síla útočníka.
                            Vliv lenivosti je vždy 50%, vliv moru 5%.</li>

                        <li> <span className="green">Výzvědný</span> - Zisk z útoku bude 90% možných pozemků.
                            Získáte však cenné informace o nepřátelském gubernátu
                            (síla obrany, počet tahů, počet magie, artefakt, suroviny atd).
                            Tyto informace se odesílají do pošty vedení aliance a nezobrazují se v přehledech.
                            Minimální síla útočníka musí být 70% celkové síly obránce.</li>

                        <table className="ui center aligned celled table">
                            <thead>
                                <tr>
                                    <th colSpan="3">Porovnání jednotlivách útoků</th>
                                </tr>
                                <tr><th>Druh útoku</th>
                                    <th>Zisk pozemků</th>
                                    <th>Minimální poměr útok/obrana</th>
                                </tr></thead>
                            <tbody>
                                <tr>
                                    <td data-label="Name">Dobyvačný</td>
                                    <td data-label="Age">100%</td>
                                    <td data-label="Job">75%</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Destruktivní</td>
                                    <td data-label="Age">70%</td>
                                    <td data-label="Job">70%</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Magický</td>
                                    <td data-label="Age">80%</td>
                                    <td data-label="Job">65%</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Výzvědný</td>
                                    <td data-label="Age">90%</td>
                                    <td data-label="Job">70%</td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                    <p><strong className="green">Vlna</strong>  - O přepočtu se vojenské útoky vyhodnocují podle vln.
                        Nejdříve se počítají útoky od všech gubernátu ve světě Evolution, které byly odeslány v první vlně,
                        poté útoky v druhé vlně atd.</p>

                    <p><strong className="green">Skupinový útok</strong> - Tento útok můžou zakládat pouze Hobiti a to 1
                        útok denně. Takový útok se potom zobrazuje u ostatních členů aliance, kteří k němu mohou přidávat
                        vlastní jednotky. Přidávat můžou všechny rasy kromě právě Hobitů. Aliance tak může útočit vyšší silou,
                        než by mohl odeslat například její nejsilnější gubernát. Maximální počet jednotek, které můžou
                        dohromady ostatní členové aliance do takového útoku přidat, je roven počtu jednotek, které do útoku
                        při zakládání vložil Hobit. Při skupinovém útoku je navíc zvýhodněna rasa Lidé, která má bonus 50%
                        vyšší síly na vlastní armádu přidanou do útoku. Skupinové útoky se při přepočtu počítají jako první a
                        případný zisk z takového útoku je o 40% vyšší než obvykle. Při útoku ztrácí jednotky pouze zakládající
                        Hobit. Všichni ostatní co do tohoto útoku přidali vlastní armádu neztrácí nic.
                        Skupinový útok se v přehledech útoků zobrazuje zelenou barvou.</p>

                    <p><strong className="green">Zisky pozemků z vojenských útoků</strong> - V každé jiné válce se zisky
                        liší podle druhu války a také podle velikostí gubernátů a aliancí, které na sebe útočí a to vždy
                        poměrem obránce/útočník. Při počítání aliančního postihu při útoku větší aliance (v mocnostech) na
                        menší je to potom (1 - bránící_se_aliance_pozemků_po_přepočtu / útočnící_aliance_pozemků_po_přepočtu)
                        / 2, pokud útočí menší aliance na větší, je postih 2x menší. V obou případech je potom maximální možný
                        postih 90%. Při útoku na bezalianční gubernát (počítá se v době odesílání útoku) je potom postih vždy
                        80%. Při útoku bezaliančního gubernátu na kohokoliv je alianční postih 95%. K tomuto aliančnímu postihu
                        se poté ještě přidá postih na velikost gubernátu, ten se počítá až o přepočtu a to opět poměrem obránce/
                        útočník, kdy při útoku většího gubernátu na menší je tento postih ještě o 20% vyšší než při útoku
                        menšího gubernátu na větší. V přijaté válce potom žádný postih neplatí.</p>
                    <ul>
                        <table className="ui center aligned celled table">
                            <thead>
                                <tr>
                                    <th colSpan="3">Maximální zisky z vojenských útoků - různé stavy válek</th>
                                </tr>
                                <tr><th>Stav války</th>
                                    <th>Zisk</th>
                                    <th>Postih na velikost gubernátu a aliance</th>
                                </tr></thead>
                            <tbody>
                                <tr>
                                    <td data-label="Name">Válka - vyhlášená - před přepočtem</td>
                                    <td data-label="Age">45%</td>
                                    <td data-label="Job">Ano</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Válka - nepřijatá - po přepočtu</td>
                                    <td data-label="Age">80%</td>
                                    <td data-label="Job">Ano</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Válka - přijatá</td>
                                    <td data-label="Age">100%</td>
                                    <td data-label="Job">Ne</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Válka - zrušená</td>
                                    <td data-label="Age">50%</td>
                                    <td data-label="Job">Ano</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Přepad</td>
                                    <td data-label="Age">45%</td>
                                    <td data-label="Job">Ano</td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Nic není vyhlášeno</td>
                                    <td data-label="Age">15%</td>
                                    <td data-label="Job">Ano</td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                    <p><strong className="green">Další informace</strong> - Při úspěšném útoku ztrácí obránce pozemky a ty 
                    potom získává útočící gubernát. 60% z dobytých pozemků získá pro sebe, 40% jde do alianční pokladny. 
                    Skřeti a Démoni získávají pro sebe 45% z dobytého území a 55% dávají do pokladny. 
                    Útočník také získává nějaké suroviny v závislosti na velikosti dobytého území, obránce potom ztrácí 5% 
                    všech zásob doma i na tržišti. Při úspěšném útoku je také 7% šance na zboření speciální budovy. 
                    Ztráta jednotek je závislá na poměru síly obránce a útočníka. Každá rasa navíc při každém úspěšném, na 
                    ni vedeném útoku, ztrácí 6% všech kouzelníků. Pokud je gubernát v nějaké alianci a je v jeden den 5x 
                    dobyt, další útoky poté nezískají žádné pozemky a navíc poslední možný 5. utok získává pouze 50% pozemků. 
                    Ztráty a vše ostatní ale v takovém případě probíhají bez omezení. Stejně tak pokud je obránce 2x menší než 
                    útočník. Pokud aliance, jejíž gubernát byl dobyt, staví portál, přijde o 3% z aktuální rozestavěnosti.</p>
                </div>
    )
}

export default VojenskeUtoky;