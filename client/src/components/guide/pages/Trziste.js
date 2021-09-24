import React from "react";

const Trziste = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Tržiště</h4>
                    <p className="ui segment">Slouží k prodeji nebo nákupu surovin.
                        Pokud zboží posíláš na trh, budeš čekat 2-4 hodiny, než se tvé zboží objeví v nabídce.
                        Ztratíš také 10% svého zboží hned při odeslání, pokud nejsi členem žádné Trziste tak ztrácíš 50%.
                        Minimální cena, za kterou můžeš zboží na trh poslat je za 5 zlata, maximální 25.
                        Pokud snižuješ cenu zboží, potom platíš daň ze slevy a ztrácíš část svého zboží.
                        Na trhu se zboží řadí od nejlevnějšího až po nejdražší. Pokud je tvé zboží na trhu déle než 5 dní,
                        ztratíš každý přepočet 1% z celkového počtu.</p>

                    <p><strong className="green">Zobrazit vlastní zboží na trhu</strong> - Zde vidíš své vlastní zboží na trhu, 
                    cenu, za kterou se na trhu prodává a také jak dlouho je již v nabídce. U každého zboží můžeš snížit nebo 
                    zvýšit jeho cenu.</p>

                    <p><strong className="green">Přidat zboží na trh</strong> - Pokud máš přebytek zásob, můžeš je odeslat na trh a získat za ně zlato. 
                    Minimální počet surovin, které můžeš odeslat na trh, je 100.000 a navíc to ještě musí být minimálně 20% z tvých zásob. 
                    Takže pokud máš například 50.000 jídla, nemůžeš ho odeslat na trh. Pokud máš třeba 2.500.000 kamenů, nemůžeš odeslat na 
                    trh počet 100.000, ale minimálně 250.000, což je přesně 10% z daných zásob..</p>

                    <p><strong className="green">Nákup</strong> - Zde můžeš sledovat cenu zboží na trhu, případně nakupovat
                    podle potřeby. Při nakupování zadáš počet kusů, které chceš nakoupit, nebo počet zlata, za které chceš 
                    zboží koupit. Pokud zadáš větší počet, nez opravdu nakoupit můžeš, koupí se jen tolik zboží, na kolik v 
                    danou chvíli opravdu máš.</p>

                </div>
    )
}

export default Trziste;