import React from "react";

const Nemrtví = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Nemrtví</h4>
                    <p className="ui segment">Nemrtví jsou v mnoha směrech výjimečná rasa. Mají dobrý vojenský útok, dobrou magii na útočení i do paktů, nadprůměrnou ekonomiku. Na druhou stranu mají také velice slabou obranu a hlavně nemůžou stavět speciální budovy.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+10% všechny profese kromě kouzelníků</li>
                                    <li>vysoké zalidnéní, dobrá ekonomika</li>
                                    <li>slušný vojenský útok</li>
                                    <li>díky zalidnění dobrá magie na útok i do paktů</li>
                                    <li>hodně negativní energie a špionáže</li>
                                    <li>nepotřebují žádné jídlo (ani ho nemohou skladovat)</li>
                                    <li>+1 tah na den</li>
                                    <li>+40% obranné věže</li>
                                    <li>+200% ke špionážním budovám</li>
                                    <li>kouzlo Sešli suroviny sesílá 2x více surovin než obvykle</li>
                                    <li>skladiště má stejnou kapacitu jako se speciální budovou</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>nemůžou stavět speciální budovy</li>
                                    <li>-10% kouzelníci</li>
                                    <li>cena budov v kamenech je 4x vyšší než obvykle</li>
                                    <li>slabá obrana</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Nemrtví;