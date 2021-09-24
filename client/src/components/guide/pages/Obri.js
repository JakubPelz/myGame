import React from "react";

const Obri = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy - Obři</h4>
                    <p className="ui segment">Obři mají nejlepší magický útok ve hře. Mají i dobrý vojenský útok. K tomu ale slabé zalidnění a slabou magickou obranu.</p>

                    <div className="ui center aligned grid">
                        <div className="row">
                            <div className="six wide column">
                                <h4 className="green"><strong>Výhody</strong></h4>
                                <ul>
                                    <li>nejsilnější magický útok</li>
                                    <li>Lenivost, Odstraň obranný val a Odstraň magický štít stojí -1 negativní energie</li>
                                    <li>silný vojenský útok</li>
                                    <li>90% získaných pozemků do pokladny (může být i nevýhoda)</li>
                                    <li>vysoký počet denních tahů</li>
                                    <li>dobrá ekonomika</li>
                                    <li>kapacita skladiště o 200% větší než u ostatních ras</li>kapacita skladiště o 200% větší než u ostatních ras
                                    <li><i>Chrám</i> přidá 50% k magickému útoku</li>
                                </ul>
                            </div>
                            <div className="six wide column">
                                <h4 className="red"><strong>Nevýhody</strong></h4>
                                <ul>
                                    <li>velmi slabá vojenská obrana</li>
                                    <li>negativní energie se nespoří</li>
                                    <li>vojensky a magicky může útočit až po odehraném 7. tahu</li>
                                    <li>nemá trh</li>
                                    <li>-25% zbrojaři</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Obri;