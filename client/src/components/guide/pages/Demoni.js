import React from "react";

const Demoni = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Demoni</h4>
                    <p className="ui segment">Démoni mají nejlepší vojenský útok ve hře. Mají i dobrou magickou obranu. K tomu ale nejnižší zalidnění a nejslabší ekonomiku.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+20% zedníci, +10% kouzelníci</li>
                                    <li>nejsilnější vojenský útok ve hře</li>
                                    <li>+4 tahy na den</li>
                                    <li>Radnice dává 5x více zlata</li>
                                    <li>-50% cena armády</li>
                                    <li>z úspěšného vojenského útoku získávají 3x více surovin a o 20% více pozemků do alianční pokladny</li>
                                    <li>+75% ke špionážním budovám</li>
                                    <li>slabší jednotky v armádě vydělávají o 1/2 více zlata a surovin</li>
                                    <li>dělají 2x vyšší ztráty u obránce a jeho kouzelníků a budov pro kouzelníky</li>
                                    <li><i>Chrám</i> řidá +7% k rychlejšímu snižování trvanlivých kouzel (mor, destrukce, lenivost, pracovitost)</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>malé zalidnění, nejhorší ekonomika</li>
                                    <li>slabá vojenský obrana</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Demoni;