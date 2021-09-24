import React from "react";

const Trpaslici = () => {
    return (
           <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Trpaslíci</h4>
                    <p className="ui segment">Trpaslíci mají podobné vlastnosti jako lidé s tím rozdílem, že mají lepší armádu a slabší magii a ekonomiku.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+75% zedníci, +10% kameníci</li>
                                    <li>silná armáda</li>
                                    <li>2x rychlejší zaučování nováčků v profesích i armádě</li>
                                    <li>základní spotřeba jdla je nižší než u ostatních ras</li>
                                    <li>+2 tahy na den</li>
                                    <li>+20% vyšší ztráty pozemků u soupeře při úspěšném vojenském útoku</li>
                                    <li>+20% šance při úspěšném vojenském útoku na dvojnásobný zisk pozemků</li>
                                    <li>zemětřesení jim nemůže zbořit speciální budovu</li>
                                    <li>slabší jednotky v armádě jsou o jeden bod silnější než je průměr</li>
                                    <li>slabší jednotky v armádě vydělávají o 1/2 více zlata a surovin</li>
                                    <li>imunní na kouzla Destrukce, Lenivost a Mor</li>
                                    <li><i>Chrám</i> sníží spotřebu jídla o 95%</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>-10% farmáři</li>
                                    <li>malé zalidnění</li>
                                    <li>slabá magie</li>
                                    <li>Tornádo a Zemětřesení jim způsobuje větší škody</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default Trpaslici;