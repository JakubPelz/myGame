import React from "react";

const Hobiti = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Hobiti</h4>
                    <p className="ui segment">Hobiti mají nejvyšší zalidnění a proto i nejlepší ekonomiku. Jako jediní mohou zakládat skupinové útoky. Mají také nejvyšší počet špionáže.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+25% farmáři</li>
                                    <li>velké zalidnění, dobrá ekonomika</li>
                                    <li>špionáž, +300% ke špionážním budovám</li>
                                    <li>dobrá vojenská obrana</li>
                                    <li>jako jediná rasa mohou zakládat skupinové útoky</li>
                                    <li>síla založeného skupinového útoku +25%</li>
                                    <li>kouzlo Znič zásoby stojí jen 1 negativní energie (ostatní rasy 2)</li>
                                    <li><i>Chrám</i> zvýší zalidnění o 5%</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>-10% zednici, -5% zbrojaři</li>
                                    <li>slabý vojenský útok</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Hobiti;