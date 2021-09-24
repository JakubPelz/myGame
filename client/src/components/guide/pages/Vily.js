import React from "react";

const Vily = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Víly</h4>
                    <p className="ui segment">Víly mají nejsilnější magii ve hře a slušný vojenský útok. Mají ale také o dva tahy méně než je průměr a velký postih na farmáře. Základem je vždy mít postavené tržišti a jídlo jen nakupovat třeba i za nejvyšší cenu. 
                    Společně s Magistrem je to ideální magická rasa do aliance.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>+15% kouzelníci, nejsilnější magie ve hře</li>
                                    <li>kouzlo Tornádo stojí -1 negativní energie</li>
                                    <li>vysoké zalidnění, dobří obránci pro magické pakty</li>
                                    <li>silný vojenský útok</li>
                                    <li>+25% limit na zásoby</li>
                                    <li>3x rychlejší zaučování slabších jednotek v armádě na silnější</li>
                                    <li>mohou útočit již od 3. tahu</li>
                                    <li>získávají o 20% více pozemků z vojenského útoku (obránce ztrácí pořád stejně)</li>
                                    <li>každý tah +1 bod k negativní energii</li>
                                    <li><i>Chrám</i> přidá +5 špionážních bodů na den</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>-50% farmáři -5% obchodníci, zbrojaři</li>
                                    <li>malý počet vojenských útoků</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Vily;