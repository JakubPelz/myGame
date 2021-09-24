import React from "react";

const Magistři = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Magistři</h4>
                    <p className="ui segment">Magistři mají nejvíce negativní energie ve hře a k tomu i dobrou vojenskou 
                    obranu. Mají i silný vojenský útok, ale bez alianční budovy, pro zvýšení počtu útoků, tuto sílu 
                    nemůžou nijak využít. Jako jediná rasa ve hře mohou používat kouzlo Objev nová území. 
                    Společně s Vílou je to ideální magická rasa do aliance.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+20% kouzelníci, +5% obchodníci</li>
                                    <li>nejvíce negativní energie</li>
                                    <li>kouzla Zemětřesení a Destrukce jsou levnější</li>
                                    <li>dobrá vojenská obrana</li>
                                    <li>jako jediná rasa mohou používat kouzlo Objev nová území</li>
                                    <li>každý kouzelník přidává do vojenské obrany silou 4.5</li>
                                    <li><i>Chrám</i> zvýší magickou sílu o 5%</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>-25% zbrojaři, -10% kameníci, zedníci, -5% farmáři</li>
                                    <li>platí 10 zlata každý tah za každého nezaučeného kouzelníka</li>
                                    <li>vojenský útok jen se speciální budovou</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Magistři;