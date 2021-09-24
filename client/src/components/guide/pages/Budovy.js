import React from "react";

const Budovy = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Budovy</h4>
                    <p className="ui segment">Existují dva základní typy budovy. Základní a speciální.
                        Pokud nebudeš mít plné zastavění základních budov, tj. pokud budeš mít nějaké volné
                        pozemky, na kterých žádná budova nestojí, bude to znamenat ztrátu pro tvůj gubernát.
                        Stejně tak pokud nebudeš mít postavené všechny speciální budovy, budeš oslaben a to
                        hlavně ve válkách.</p>

                    <p><strong className="green">Základní budovy</strong> - Slouží pro zlepšení výdělků v
                        profesích, zvyšují zalidnění nebo vojenskou či špionážní obranu. K jejich stavbě
                        potřebuješ zlato a kameny, jejichž počet závisí na velikosti území. Jedna budova zabírá
                        jeden pozemek. </p>

                    <ul>
                        <li> <span className="green">Profesní budovy</span> - Zlepšují výdělky v profesích.
                            Zlepšení závisí na počtu obyvatel v dané profesi, takže čím více obyvatel v profesi máš,
                            tím více budov také potřebuješ. Maximální zlepšení je 40%, s alianční budovou až 50%.</li>
                        <li> <span className="green">Obytné domy</span> - Slouží pro zvýšení populace v gubernátu.
                            Jednotlivé rasy mají různou kapacitu domů
                            kouzelníci u magistrů se do paktů nepočítá. Stejně tak obranné věže, ty mají vliv pouze na vlastní armádu.</li>
                        <li> <span className="green">Obranné věže</span> - Zvyšují vlastní vojenskou obranu. Efekt je počítán v procentech.
                            Obranné věže mají vliv pouze na vlastní armádu. Maximální zlepšení je 25%, s alianční budovou až 40%.</li>
                        <li> <span className="green">Špionáž</span> - Zvyšují vlastní obranu proti špionážním útokům.
                            Maximální zlepšení je 95%, což neznamená 95% odolnost proti špionáži, ale spíš přibližně 2x větší odolnost.</li>
                    </ul>

                    <p><strong className="green">Speciální budovy</strong> - Tyto budovy staví zedníci, kteří ke stavbě
                        potřebují pouze kameny. Budovy lze stavět v libovolném pořadí. </p>

                    <ul>
                        <li> <span className="green">Radnice</span> - Každý z tvých obyvatel ti bude odvádět 5 zlata každý tah.</li>
                        <li> <span className="green">Rozcestí</span> - Zvýší produktivitu tvých obchodníků o 10%</li>
                        <li> <span className="green">Tržiště</span> - Umožní ti obchodovat na trhu.</li>
                        <li> <span className="green">Hradby</span> - Zvýší obranu tvých vojenských jednotek a vojenskou obranu z paktů o 10%.</li>
                        <li> <span className="green">Cvičiště</span> - Zvýší útočnou sílu tvých vojenských jednotek o 10%.</li>
                        <li> <span className="green">Skladiště</span> - Zvýší o 75% maximum surovin, které tvůj gubernát může mít u sebe.</li>
                        <li> <span className="green">Magické oko</span> - Zvýší tvou magickou sílu a magickou obranu z paktů o 10%.</li>
                        <li> <span className="green">Pivnice U starého dubu</span> - Zvýší celkové zalidnění o 10%.</li>
                        <li> <span className="green">Chrám</span> - Aktivuje rasový bonus</li>
                        <ul>
                        <li> <span className="green">Lidé</span>: +1 tah na den</li>
                        <li> <span className="green">Elfové</span>: +10 negativní magie na den</li>
                        <li> <span className="green">Trpaslíci</span>: spotřeba jídla o 75% nižší</li>
                        <li> <span className="green">Hobiti</span>: +5% zalidnění</li>
                        <li> <span className="green">Skřeti</span>: 5x vyšší šance na zboření speciální budovy při úspešném vojenském útoku, o 75% vyšší ztráty u obránce při vojenském útoku (úspěšném i neúspěšném)</li>
                        <li> <span className="green">Magistři</span>: +5% magická síla</li>
                        <li> <span className="green">Víly</span>: +5 špionážních bodů na den</li>
                        <li> <span className="green">Démoni</span>: +7% rychlejší snižování trvanlivých kouzel (Mor, Destrukce, Lenivost, Pracovitost)</li>
                        </ul>
                        <li> <span className="green">Palác času</span> - Každý den budeš mít o 2 tahy navíc.</li>
                        <li> <span className="green">Nefritový portál</span> - Postavením portálu končí věk, na stavbě se podílí celá aliance.</li>
                    </ul>
                </div>
    )
}

export default Budovy;

