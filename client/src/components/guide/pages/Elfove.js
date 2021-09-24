import React from "react";

const Elfove = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Elfové</h4>
                    <p className="ui segment">Elfové mají nejlepší vojenskou obranu ve hře a k tomu ještě dobrou magii. Vojenský útok je podprůměrný.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+20% kouzelníci</li>
                                    <li>nejlepší vojenská obrana</li>
                                    <li>+15% vojenská obrana paktařům</li>
                                    <li>slabší jednotky v armádě vydělávají o 1/2 více zlata a surovin</li>
                                    <li>každý tah +1 bod k negativní energii</li>
                                    <li>Při vojenském útoku ztrácí o 25% méně pozemků</li>
                                    <li><i>Chrám</i> přidává +15 negativní energie</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>-5% farmáři, kameníci, zedníci</li>
                                    <li>negativní energie se jim nespoří</li>
                                    <li>slabí vojenský útok</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default Elfove;