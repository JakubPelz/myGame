import React from "react";
import HlavniAtributy from "./RasyTable/HlavniAtributy";
import ProfeseAtributy from "./RasyTable/ProfeseAtributy";
import PocetMagie from "./RasyTable/PocetMagie";
import StatistikyRas from "./RasyTable/StatistikyRas";

const Rasy = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Rasy ve hře</h4>
                    <p className="ui segment">Každá aliance by měla mít nejméně 5 magických ras, což zRasyná Víly,
                        Magistry nebo Obry. Dále nějakou rasu, která se může při trojtahu změnit na magickou a odkouzlit
                        magii, to může být Člověk, Elf nebo také Hobit, který má po Obrech a Vílách nejsilnější magii do
                        útoku, má ale také poměrně málo negativní energie na kouzlení.
                        Další složení už závisí na stylu hry aliance. Některé jsou útočně laděné, další si zakládají na obraně,
                        jiné mají třeba více Trpaslíků nebo Lidí, tj. ras, které můžou dobře útočit i bránit.</p>
                    <HlavniAtributy />
                    <ProfeseAtributy />
                    <PocetMagie />
                    <StatistikyRas />

                    <p><strong className="green">Poznámka</strong> - U poslední tabulky je také třeba přihlédnout k bonusům 
                    nebo postihům ras, které jednotlivé části detailů ovlivňují, i když zároveň nejdou tak lehce zahrnout do 
                    vzorce. Při výpočtu ekonomiky například nebyla do výpočtu zahrnuta snížená spotřeba jídla nebo rychlejší 
                    zaučování či nižší cena armády u Trpaslíků, vyšší zisky u Démonů z radnice nebo vojenských útoků. 
                    Nemrtví zase například nemůžou stavět speciální budovy. U útoku zase silnější skupinové útoky od Lidí, 
                    u obrany je to zase vojenská obrana od kouzelníků u Magistrů a u magie počet pozitivní nebo negativní 
                    energie a další. U ekonomiky je také těžké určit, která profese je jak důležitá, protože důležitost se 
                    liší podle situace ve hře. Víly mají velký postih na farmáře, ale pokud mají postavené tržiště a je k 
                    prodeji levné jídlo, nemusí jejich ekonomiku tento postih vůbec ovlivnit. Proto nikdy nevybírejte rasu 
                    jen podle tohoto přehledu.</p>

                    <p>Pokud již víte jak fungují magické pakty, můžete lehce zjistit, že 2 magické pakty s 
                        Hobitem <span className="red">(2*65=130)</span> jsou skoro to samé jako 3 magické pakty s Magistrem <span className="red">(3*45=135)</span>. 
                        Hobiti ale nemají tolik negativní magie na kouzlení, takže silnou magii většinou nevyužijí. 
                        Podobných příkladů by se dalo najít samozřejmě více.</p>
                </div>
    )
}

export default Rasy;