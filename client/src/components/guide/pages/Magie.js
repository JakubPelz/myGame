import React from "react";

const Magie = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Magie</h4>
                    <p className="ui segment">Magie je důležitá součást hry, hlavně ve válkách. 
                    Aliance, které mají magicky nad soupeřem převahu, velice často vítězí. 
                    Ve válce je také důležitá kombinace a také pořadí sesílaných kouzel. 
                    Mor nebo Destrukce může soupeře poškodit hlavně tehdy, když nemá vlastní magickou obranu na odkouzlování. 
                    Je proto dobré vždy soupeři odvát nějaké obyvatele, nebo útočit na rasy, které mají malé zalidnění a 
                    nemají pravděpodobně tak silnou vlastní magii.</p>

                    <p><strong className="green">Pozitivní energie</strong> - Je potřeba k sesílání pozitivních (podpůrných) 
                    kouzel. Každá rasa má jiný počet této energie a tato energie se každý přepočet doplňuje až do maxima 3 dnů. 
                    Pozitivní kouzla lze sesílat pouze na vlastní gubernát.</p>

                    <ul>
                        <li> <span className="green">Pracovitost</span> -  Trvanlivé kouzlo. Zvyšuje produktivitu ve všech profesích kromě kouzelníků. 
                        Účinek (zlepšení) je 5-25%. Doba trvání kouzla závisí na síle, jakou bylo kouzlo sesláno. 
                        Tato síla se odvíjí od pozemků gubernátu.</li>

                        <li> <span className="green">Sešli suroviny</span> - Sešle náhodný počet od každé suroviny 
                        (jídlo, kameny, zlato a zbraně). Počet surovin závisí kromě náhody jen na velikosti území, 
                        takže narozdíl od pracovitosti, není závislé na celkové síle gubernátu.</li>

                        <li> <span className="green">Obranný val</span> - Zvýší celkovou vojenskou obranu při nočním přepočtu.
                        Všechny rasy, kromě Magistrů, získají zlepšení celkové vojenské obrany i s paktama o 10%, 
                        Magistři získají k celkové vojenské obraně 10% a to z vlastní magické síly, 
                        kterou mají v době sesílání kouzla. Obranný val může soupeř odkouzlit pomocí kouzla Odstraň obranný val.</li>

                        <li> <span className="green">Magický štít</span> - Zvýší celkovou magickou obranu při nočním přepočtu.
                         Všechny rasy, kromě Magistrů, získají zlepšení celkové magické obrany i s paktama o 10%, 
                         Magistři získají k celkové magické obraně 10% a to z vlastní magické síly, kterou mají v době sesílání kouzla. 
                         Magický štít může soupeř odkouzlit pomocí kouzla Odstraň magický štít.</li>

                         <li> <span className="green">Objev nvá uzemí</span>  - Jediná rasa, která může toto kouzlo používat, jsou Magistři.
                        Kouzlo objeví náhodný počet pozemků, které se ihned přičtou k aktuálním pozemkům gubernátu. 
                        Maximální možný počet objevených pozemků je 400 a tento počet závisí na velikosti území.</li>
                    </ul>

                    <p><strong className="green">Negativní enerige</strong> - Je potřeba k sesílání negativních kouzel. 
                    Každá rasa má jiný počet této energie a tato energie se každý přepočet doplňuje až do maxima 3 dnů.</p>

                    <ul>
                        <li> <span className="green">Lenivost</span> - Trvanlivé kouzlo. Opak pracovitosti. 
                        Maximální postih je 75% a má vliv na všechny profese (postih na kouzelníky se projeví jen při 
                        odehrávání tahů, nemá vliv při přepočtu). Při lenivosti slabší jednotky v armádě 
                        nevydělávají žádné zlato ani suroviny, armáda i profese potřebují více jídla a profese 
                        i armáda se zaučují pomaleji.</li>

                        <li> <span className="green">Tornádo</span> - Odvaje 8% všech obyvatel gubernátu.</li>

                        <li> <span className="green">Zemětřesení</span> - Zničí 9% všech budov gubernátu. 
                        Zároveň zničí 9% všech zásob gubernátu doma i na tržišti. Je zde i 15% šance na zboření speciální 
                        budovy. Při zemětřesení odchází pouze obyvatelstvo, 
                        které se už nevejde na území gubernátu díky zničení obytných domů.</li>

                        <li> <span className="green">Mor</span> - Trvanlivé kouzlo. Gubernátu, který má na sobě mor, 
                        odchází lidé z profesí a armády. Z profesí odchází 2x rychleji. Účinek kouzla může být 4-8%.</li>

                        <li> <span className="green">Odstraň obranný val</span> - Zruší účinek kouzla Obranný val.</li>
                        <li> <span className="green">Odstraň obranný šítí</span> - Zruší účinek kouzla Obranný štít.</li>

                        <li> <span className="green">Destrukce</span> - Trvanlivé kouzlo. Toto kouzlo ničí každý tah 2% 
                        všech budov a je zde i 7% šance na zboření speciální budovy každým tahem. Každý tah se také zničí 
                        3% zásob doma i na tržišti, armáda se vůbec nezaučuje a nelze stavět speciální budovy.</li>

                        <li> <span className="green">Znič obranné věže</span> - Zničí 8% obranných věží gubernátu.</li>
                        <li> <span className="green">Znič zásoby</span> - Zničí 12% všech zásob doma i na tržišti.</li>
                    </ul>

                    <p><strong className="green">Cíl útoku</strong> - Zadává se název gubernátu. Negativní magii nelze 
                    sesílat na vlastní alianci ani na spojence.</p>

                    <p><strong className="green">Vlna</strong> - O přepočtu se kouzla vyhodnocují podle vln. 
                    Nejdříve se počítají kouzla od všech gubernátu ve světě Evolution, co byla seslána v první vlně, 
                    poté kouzla v druhé vlně atd.</p>

                    <p><strong className="green">Extra</strong> - Extra kouzlo má o 15% větší sílu a stojí 2x víc negativní energie.</p>

                    <p><strong className="green">Trvanlivé kouzlo</strong>- Takové kouzlo má účinek až do té doby, 
                    dokud není odkouzleno, nebo jeho síla neklesla pod počet pozemků gubernátu. 
                    až potom kouzlo zmizí a přestane působit. Pokud tedy odkouzlujete například mor, 
                    odehrajte nejdříve několik tahů, aby se síla kouzla snížila, a až potom začněte odkouzlovat. 
                    Samozřejmě je třeba mít nějakou vlastní magickou sílu, aby jste s odkouzlováním mohli začít. 
                    Odkouzlujte až ve chvíli, kdy jistě víte, že máte dostatek magické síly a magie na úplné odkouzlení.</p>
                </div>
    )
}

export default Magie;