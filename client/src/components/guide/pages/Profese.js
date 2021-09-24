import React from "react";

const Profese = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Profese</h4>
                    <p className="ui segment">Základna je místo, s kterým se budeš setkávat nejčastěji. 
                    Je to takový přehled základních informací o tvém gubernátu. Zvláště pozorně sleduj stav zlata a jídla, 
                    jejichž nedostatek může způsobit velké problémy tvému gubernátu.</p>
  
                    <p><strong className="green">Farmáři</strong> - Produkují jídlo, které potřebuje každý tvůj obyvatel 
                    ke svému přežití. Obyvatelé, kteří jsou zaměstnaní v některé z profesí, mají vyšší spotřebu jídla, 
                    než armáda, která si většinu obživy obstará sama. Při nedostatku jídla dochází k úbytku obyvatel.</p>
  
                    <p><strong className="green">Kameníci</strong> - Obstarávají kameny, které jsou potřeba pro stavbu 
                    základních i speciálních budov. Při stavbě speciálních budov je spotřeba kamenů 1/2 z počtu zedníků. 
                    Takže každý zedník spotřebuje každý tah 0.5 kamene, nebo dva zedníci spotřebují 1 kámen za tah.</p>

                    <p><strong className="green">Zedníci</strong> - Staví speciální budovy (Radnice, Hradby atd). 
                    Čím více zedníků máš, tím rychleji stavíš. Pokud žádnou speciální budovu nestavíš, 
                    žádné zedníky nepotřebuješ.</p>
  
                    <p><strong className="green">Obchodníci</strong> - Společně s alchymisty jsou zdrojem zlata pro tvoji zem.
                    Výdělky obchodníků jsou závislé na jejich počtu v poměru k velikosti území. 
                    Pokud budeš mít obchodníků příliš, budou mít v průměru nižší výdělky. Pro maximální zisky je potřeba 
                    najít správný poměr mezi obchodníky a alchymisty. Zisky obchodníků můžeš zvýšit pomocí obchodních paktů.</p>

                    <p><strong className="green">Alchimisti</strong> - Vyrábějí zlato. Jejich produktivita, 
                    narozdíl od obchodníků, není závislá na jejich počtu.</p>
  
                    <p><strong className="green">Zbrojaři</strong>  - Vyrábějí zbraně, které jsou potřeba pro budování armády.</p>

                    <p><strong className="green">Kouzelníci</strong> - Zvyšují tvojí magickou sílu. Čím větší magická síla, tím větší šance, 
                    že kouzla, odeslaná například na nepřátelský gubernát, budou úspěšná a budou mít delší trvání.</p>
                </div>
    )
}

export default Profese;