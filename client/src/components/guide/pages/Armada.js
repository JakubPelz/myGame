import React from "react";

const Armada = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Armáda</h4>
                    <p className="ui segment">Armáda je důležitá součást hry. Je potřeba k vojenské obraně gubernátu,
                        ale hlavně k dobývání pozemků. Armáda u každé rasy má dva druhy jednotek - slabší a silnější.
                        Většinou budete vyrábět pouze ty silnější jednotky, ale občas se stane, například ve válce,
                        že budete bez zásob a budete se muset spokojit jen s těmi slabšími jednotkami.</p>

                    <p><strong className="green">Slabší jednotky v armádě</strong>   - Slabší jednotky stojí sice více
                        zlata než ty silnější, ale stojí také mnohem méně zbraní, takže celkově jsou v přepočtu na svojí
                        sílu levnější. Slabší jednotky umí, narozdíl od těch silnějších, ještě dvě zajímavé věci.
                        Každá zaučená jednotka má totiž <strong>magickou sílu rovnu číslu 5</strong>.
                        Pokud tedy máte 100.000 těchto jednotek, tak kromě výsledné vojenské síly ještě zvýší magickou
                        sílu o 500.000 (100.000 x 5) a tato magická síla se počítá jak do magické obrany, tak i do
                        magického útoku a také samozřejmě do magických paktů. A zde potom nezáleží na počtu paktů,
                        jako v případě kouzelníků. Tato síla, v tomto případě 700k, se paktářovi přičte celá,
                        bez jakýchkoliv postihů. Další, říkejme tomu schopnost, těchto slabších jednotek, je, že <strong>produkují
                            suroviny</strong> a také <strong>zlato</strong>. Každá zaučená jednotka vyprodukuje 0.5 od každé suroviny a také 4 zlata a
                        to každý tah. Elfové, trpaslíci a démoni potom vyprodukují o 1/2 více, takže 0.75 od každé suroviny
                        a 6 zlata za tah. Každá jednotka zde potom pobírá žold a to přesně 7 zlata každý tah. </p>

                    <p><strong className="green">Silnější jednotky v armádě</strong> - Tyto jednotky budete asi mít
                        nejčastěji. Stejně jako u těch slabších i zde platí, že síla je závislá na na zaučenosti.
                        Takže pokud máte 100% nováčků, nebudou mít žádnou sílu a naopak. Zaučení u většiny ras trvá
                        15 tahů, stejně jako v profesích. Trpaslíci mají zaučování obyvatelstva rychlejší.
                        Každá jednotka zde potom pobírá žold a to přesně 10 zlata každý tah.</p>

                    <p><strong className="green">Automaticky zaučovat slabší jednotky na silnější</strong> - Každá rasa má možnost zaučovat
                        slabší jednotky v armádě na silnější a to zcela zdarma. Každý tah se převede 4% slabších
                        jednotek na silnější a tyto jednotky jsou hned zaučené. Víly potom mají rychlejší zaučovaní a
                        to 6% každým tahem. Tato možnost je defaultně zapnuta a lze ji vypnout. Pokud je již odeslaný
                        nějaký vojenský útok, jednotky se nezaučují.</p>

                    <p><strong className="green">Další informace</strong>  - Jednotky v armádě stojí zlato a zbraně
                        a to v závislosti na své síle. Každá jednotka v armádě také potřebuje jídlo, ale méně než
                        obyvatelstvo v profesích. Pokud je již odeslaný nějaký vojenský útok, jednotky z armády
                        nelze odebírat. Kouzlo Mor má také menší účinek na armádu než na profese.</p>
                </div>
    )
}

export default Armada;
