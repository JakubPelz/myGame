import React from "react";

const Lide = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Lidé</h4>
                    <p className="ui segment">Lidé jsou vyrovnaná rasa, která není v ničem nejlepší, ale ani nejhorší.
                        Mají od všeho něco. Ideální rasa nejen pro méně zkušené hráče.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>obchodníci +25%, +5% ostatní profese</li>
                                    <li>velké zalidnění, dobrá ekonomika</li>
                                    <li>+1 tah na den</li>
                                    <li>cena armády -60%</li>
                                    <li>15 bodů špionáže</li>
                                    <li>vysoký počet negativní energie</li>
                                    <li>+50% síla ve skupinovém útoku</li>
                                    <li><i>Chrám</i> přidává +1 tah navíc</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>v ničem nevynikají</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Lide;