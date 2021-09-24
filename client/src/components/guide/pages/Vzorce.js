import React from 'react';

const Vzorce = () => {
    return  (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Vzorce</h4>
                    <p className="ui segment">Nechci z Evolutionu dělat hru, kterou budete hrát s kalkulačkou v ruce, 
                    ale i přes to zde zveřejním nějaké vzorce a to hlavně ty, které jsou důležité alespoň pro představu hráčů. 
                    Je to spíš takové povídání hlavně o paktech.</p>

                    <p><strong className="green">Vojenské pakty</strong> - Do vojenských paktů se započítává síla paktáře, 
                    takže zde je to jednoduché. Jediné s čím je třeba počítat je, že paktář může vyrazit do útoku a potom 
                    vojensky nebrání nebo brání méně pokud nechá část armády doma (magicky vám ale můžou prokouzlit paktáře, 
                    takže i oslabit vojenské pakty). Vzoreček na výpočet síly, kterou přidávají paktáři, vypadá následovně.</p>
                    <p className="red">(síla_všech_paktářů) * (0.5 - 0.05 * počet_paktů)</p>

                    <p>Síla všech paktářů je v tomto případě pouze síla jejich jednotek bez bonusů gubernátu, 
                        který do paktu přispívá. Takto se sečte síla paktařů, připočítá se k ní síla gubernátu 
                        a k tomu všemu se přidají vlastní bonusy ze specialnich budov gubernátu nebo aliance, 
                        zkušenosti nebo také Obranný val. Celková obranná síla potom může vypadat třeba takto.</p>
                    <p className="red">(celková_vlastní_obrana + síla_z_paktů) * (1 + 0.1_hradby + 0.1_alianční_budova + 0.1_zkušenosti + 0.1_obranný_val ...)</p>
                    <p>Obranné věže se počítají pouze k celkové vlastní obraně.</p>

                    <p><strong className="green">Magické pakty</strong> - Výpočet magických paktů je velice podobný s tím předchozím vojenským, 
                    jen má vyšší základ.</p>
                    <p className="red">(počet_kouzelníků_všech_paktářů) * (0.55 - 0.05 * počet_paktů)</p>

                    <p>Ale s jednou důležitou změnou. Do magických paktů se nezapočítává magická síla paktáře. Zde záleží na 
                        počtu kouzelníků paktáře. Tito kouzelníci se potom stanou na chvíli jakoby vašimi a také převezmou 
                        váš bonus. Takže například Skřet bude mít se stejnými pakty nižší příspěvek z techto paktů, než 
                        například Elf. Skřet má -5% na kouzelníky, Elf naopak +15%, pokud přepočítáme počet kouzelníků které 
                        paktář dostane a jejich základní síla s bonusem na magii 0% bude třeba 5M, potom Skřet dostane 
                        magickou obranu z paktů jako výpočet <span className="red">5M * 0.95 = 4.75M</span> a Elf zase <span className="red">5M * 1.15 = 5.75M</span>. Aby to nebylo 
                        tak jednoduché, máme zde ještě slabší vojenské jednotky, takzvané jedničky. Každá taková jednotka, 
                        bez ohledu na rasu, má magickou sílu rovnu číslu 7. Tato magie se také počítá do paktů a navíc na ní 
                        není žádný postih na počet paktů. Takže pokud má paktář například 100k jedniček a všechny jsou během 
                        přepočtu doma, potom přispívá silou <span className="red">100k * 7 = 700k</span> do paktů a to bez postihu na počet paktů. Celková 
                        magická síla potom může vypadat třeba takto.</p>
                    <p className="red">celková_vlastní_obrana + kouzelníci_v_paktech + jedničky_v_paktech) * (1 + 0.1_hradby + 0.1_alianční_budova + 0.1_zkušenosti + 0.1_obranný_val ...)</p>
                    
                    <p><strong className="green">Cena základních budov ve zlatě</strong></p>
                    <p className="red">počet_pozemků / 20</p>

                    <p><strong className="green">Cena základních budov ve kamenech</strong></p>
                    <p className="red">počet_pozemků / 90</p>

                    <p><strong className="green">Kolik procent k vojenské obraně přidávají obranné věže</strong></p>
                    <p>Maximální zlepšení je 25% nebo 40% se speciální budovou pro alianci, rasový bonus na věže 
                        vlastně pouze snižuje počet budov potřebných na toto zlepšení.</p>
                    <p className="red">((počet_věží / počet_pozemků) * 400) * rasový_bonus</p>

                    <p><strong className="green">Kolik procent ke špionážní obraně přidávají budovy pro špionáž</strong></p>
                    <p>Maximální zlepšení je 95% a vzoreček je stejný jako u obranných věží, pouze je potřeba méně budov na stejný efekt. 
                        Pokud bereme, že šance na úspěšnou spionáž je třeba 10%, potom se losuje z čísel od 1-100 a pokud padne 1-10, 
                        špionážní útok je úspěšný. Pokud má gubernát +50% na špionáž v těchto budovách, neznamená to nic jiného, než že 
                        se losuje z čísel 1-150 a opět je potřeba se trefit do čísel 1-10. Pokud má aliance speciální budovu na špionáž, 
                        která dává 50% odolnost, potom je potřeba se trefit do čísel 1-5.</p>
                        <p className="red">(počet_budov / počet_pozemků) * 750</p>   

                        <p><strong className="green">Snižování síly kouzla každým tahem</strong></p>
                        <p>Trvanlivá kouzla se každým tahem snižují a pokud klesnou pod počet pozemků gubernátu, zmizí úplně.</p>
                        <p><span className="red">síla_kouzla * 0.69</span>, u démonů s chrámem <span className="red">síla_kouzla * 0.62</span></p>         

                </div>
      )
}

export default Vzorce;
