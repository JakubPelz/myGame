import React from "react";

const Aliance = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Aliance</h4>
                    <p className="ui segment">Tato sekce je přístupná všem gubernátům, ale liší se podle toho, zda je gubernát v nějaké alianci či není.
                        Pokud je gubernát bezalianční, může zde zažádat o vstup do nějaké aliance.
                        Pokud gubernát již v nějaké alianci je, může zde volit imperátora,
                        přijímat pakty či hlasovat v alianční anketě.</p>

                    <p><strong className="green">Založit novou alianci</strong>   - Bezalianční gubernáty, pokud nechtějí vstoupit do nějaké cizí aliance,
                        můžou založit svoji vlastní. Název aliance musí mít maximálně 20 znaků a smí obsahovat pouze
                        znaky A-Z bez háčků a čárek, číslice a nebo mezery. Při zakládání aliance je také potřeba zvolit
                        přesvědčení, které je spíše symbolické a nemá ve hře na nic vliv. Snad jen na to, že některé zlé aliance
                        nemají rády ty dobré a naopak. </p>

                    <p><strong className="green">Aliance</strong>   - Zde vidíš všechny členy své aliance, jejich sílu,
                        pozemky a nebo poslední aktivitu. Narozdíl od statistik je počet pozemků i síla gubernátu aktuální.
                        Vedení aliance vidí i detaily všech členů, tj. kolik má kdo zásob, tahů nebo magie na kouzlení.
                        Imperátor zde volí vojevůdce a diplomata a také zde může vyloučit nějakého člena z aliance.</p>

                    <p><strong className="green">Pakty</strong>   - Gubernáty v alianci mezi sebou uzavírají pakty.
                        Maximální počet paktů je 5 a gubernát může mít i více paktů stejného druhu s jedním gubernátem.
                        První den mají pakty účinnost 90%, další dny již 100%. Noví členové v alianci mají postihy na pakty,
                        takže první den v alianci je účinnost paktů u těchto gubernátů 0%, druhý den 50% a až třetí den 100%.</p>
                    <ul>
                        <li> <span className="green">Obchodní pakty</span> - Zlepšují výdělek obchodníků. Čím více pozemků má gubernát s
                            kterým máš obchodní pakt, tím větší bude zlepšení produktivity obchodníků.</li>
                        <li> <span className="green">Vojenské pakty</span> - Brání gubernát proti vojenským útokům.
                            Do paktů se započítává pouze síla jednotek, které jsou právě doma. Obrana, kterou dávají
                            kouzelníci u magistrů se do paktů nepočítá. Stejně tak obranné věže, ty mají vliv pouze na vlastní armádu.</li>
                        <li> <span className="green">Magické pakty</span> - Brání gubernát před magickými útoky. Na rozdíl od
                            vojenských paktů se do obrany nepřidává magická síla paktáře, ale jen počet kouzelníků, které má paktář
                            v danou chvíli k dispozici. Proto je například Víla lepší obránce v paktech než Magistr, protože má
                            větší počet obyvatel. Zase ale nemá vlastní vojenskou obranu od kouzelníků jako Magistři.
                            Většina aliancí hraje ve válce na 3 magické pakty u nemagických ras.</li>
                    </ul>
                    <p><strong className="green">Volby</strong>   -  Každý gubernát v alianci může volit imperátora. Pokud získá
                        některý člen více hlasů než stávající imperátor, převezme po přepočtu tento post a stane se sám imperátorem.</p>
                    <p><strong className="green">Vývěska</strong>   - Zde se zobrazují různé informace,
                        které dává vedení aliance k dispozici ostatním členům.</p>
                    <p><strong className="green">Anketa</strong>   - Zde mohou jednotliví členové hlasovat v anketě, kterou
                        vyhlašuje vedení aliance. Informace o každé nové anketě chodí automaticky všem členům aliance do pošty.</p>
                    <p><strong className="green">Změna aliance</strong>   - Pokud jsi bezalianční nebo nejsi spokojen se
                        současnou aliancí, můžeš se přihlásit do nějaké jiné. Při žádosti se pouze zadá jmeno aliance, do které
                        chce gubernát vstoupit. Je často dobré informovat předem někoho z vedení dané aliance a domluvit se s
                        ním na přijetí osobně. Šance na přijetí je v takovém případě samozrejmě větší.</p>
                    <p><strong className="green">Propagační texty</strong>   - Každá aliance si může napsat vlastní propagační text.
                        Zde vidíš všechny pohromadě, vždy v náhodném pořadí.</p>
                </div>
    )
}

export default Aliance;

