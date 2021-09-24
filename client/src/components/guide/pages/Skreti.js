import React from "react";

const Skreti = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Skřeti</h4>
                    <p className="ui segment">Skřeti převyšují ostatní rasy svým útokem. Mají také o jeden tah více než je průměr. Jejich kouzelníci jsou však nejslabší ze všech ras.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+75% zbrojaři</li>
                                    <li>silný vojenský útok, který způsobuje vždy o 50% vyšší ztráty jednotek u soupeře</li>
                                    <li>5 základních vojenských útoků na den</li>
                                    <li>+3 tahy na den</li>
                                    <li>-50% cena armády</li>
                                    <li>+50% síla ve skupinovém útoku</li>
                                    <li><i>Chrám</i> dává 5x vyšší šanci na zboření speciální budovy při úspěšném vojenském útoku a o 200% vyšší ztráty u obránce při vojenském útoku (úspěšném i neúspěšném)</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>-10% kouzelníci, obchodníci -5% kameníci, zedníci</li>
                                    <li>slabá vojenská obrana</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default Skreti;