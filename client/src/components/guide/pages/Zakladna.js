import React from "react";

const Zakladna = () => {
    return (
              <div className="twelve wide column">
                  <h4 className="ui center aligned segment">Ovládání hry - Základna</h4>
                  <p className="ui segment">Základna je místo, s kterým se budeš setkávat nejčastěji. 
                  Je to takový přehled základních informací o tvém gubernátu. Zvláště pozorně sleduj stav zlata a jídla, 
                  jejichž nedostatek může způsobit velké problémy tvému gubernátu.</p>

                  <p><strong className="green">Základka</strong>   - Zobrazuje se zde počet obyvatel, počet nezaměstaných, 
                  počet pozemků gubernátu, síla gubernátu a také stav jednotlivých surovin a zlata. Zobrazují se zde také 
                  změny, takže přírůstek či úbytek obyvatelstva, síly nebo surovin. Zobrazuje se zde také aliance, 
                  která je právě na pomyslném prvním místě. Pokud má na sobě gubernát nějaké trvanlivé kouzlo tak zde 
                  vidí jeho sílu a účinek. Stejně tak artefakty a jejich vliv se zobrazují v základně.</p>

                  <p><strong className="green">Zásoby</strong>   - Každý gubernát může držet určitý počet zásob a to v 
                  závislosti na velikosti území. Víly mají potom tento limit o 25% vyšší. 
                  Pokud gubernát přesáhne 100% hranici, další tah se mu část zásob ztratí a to vzdy podle toho o kolik tento 
                  limit přesáhl.</p>
              </div>
  )
};

export default Zakladna;