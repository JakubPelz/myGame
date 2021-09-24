import React from "react";

const Spionaz = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Špionáž</h4>
                    <p className="ui segment">Špionáž je třetím druhem útoku, který probíhá, na rozdíl od vojenských 
                    či magických útoků, v reálném čase. Špionáž je tajná, cizí gubernát se o provedené akci dozví, 
                    neuvidí ale kdo na něj útočil. Avšak občas dojde k situaci, kdy se gubernát prozradí a potom je zle. 
                    Nepřátelé nemají rádi cizí špióny na vlastním území.</p>

                    <p><strong className="green">Druhy útoků</strong> - Existuje několik špionážních útoků, 
                    kdy na každý potřebujete takzvané špionážní body a také trochu zlata. Špionážních bodů, 
                    ve hře označené po vzoru magie jako Energie, má každá rasa různý počet a některé dokonce nemají nic. 
                    Bez alianční budovy na špionáž ji nemohou normálně používat.</p>

                    <ul>
                        <li> <span className="green">Zboř speciální budovu</span> - Šance na zboření budovy je maximálně 10%. 
                        Pokud má ale nepřítel již nějakou budovu zbořenou, potom se šance snižuje. 
                        Protoze při špionážním útoku může dojít k situaci, kdy se špióni rozhodou zbořit nějakou budovu, 
                        a když dojdou na místo činu, tak zjistí, že budova není postavena. Zní to neuvěřitelně, ale je to tak. 
                        Špióni ve světě Evolution se mají ještě co učit.</li>
                        <li> <span className="green">Znič zboží na trhu</span> - Tato akce, v případě úspěchu, ničí vždy 15% veškerého zboží na tržisti. 
                        Šance na úspěch může být maximálně 30%.</li>
                        <li> <span className="green">Znič suroviny</span> - Tato akce, v případě úspěchu, ničí vždy 15% veškerého zboží, 
                        které má gubernát doma v zásobách. Šance na úspěch může být maximálně 30%.</li>
                        <li> <span className="green">Hledej artefakt</span> - V případě úspěchu informuje o tom, zda a jaký artefakt má nepřátelský gubernát. 
                        Šance na úspěch může být maximálně 10%.</li>
                    </ul>
                    <p><strong className="green">Další informace</strong> - Úspěch špionážních akcí je závislý na síle gubernátu, 
                    takže pokud zrovna farmaříš a nemáš moc obyvatel v armádě či magii, potom špionáž radši nepoužívej. 
                    Proti špionáži se dá ale i bránit. Alianční budova na špionáž dává 50% imunitu a také lze stavět budovy, 
                    které mohou šanci na úspěch nepřítele v určitých případech snížit až o polovinu.</p>
                </div>
    )
}

export default Spionaz;