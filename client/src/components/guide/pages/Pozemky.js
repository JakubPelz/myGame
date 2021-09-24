import React from "react";

const Pozemky = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Pozemky</h4>
                    <p className="ui segment">Pozemky jsou hlavním měřítkem úspěchu ve hře. 
                    O pozemky se vedou války a kdo má hodně pozemků, má i moc a větší možnosti než ten, kdo jich má méně. 
                    Pozemky se dají tedy dobývat, ale také je lze nakupovat. 
                    Cena pozemků při nákupu je závislá na velikosti území. 
                    Čím více pozemků gubernát má, tím jsou pozemky dražší.
                    Od určité velikosti se pozemky už ani nevyplatí nakupovat - jsou příliš drahé. 
                    Je to proto, aby se v pozdější fázi hry více válčilo.</p>
  
                    <p><strong className="green">Nakupovat každý tah</strong> - Aby gubernát nemusel každý tah nakupovat pozemky 
                    ručně, je zde automatické nakupování. Lze nastavit, aby se 0-100% z celkového nebo pouze aktuálního zisku 
                    zlata každý tah použilo na nákup pozemků. 0 zde znamená ze se nakupovat nebude nic, 100% naopak že se 
                    použije všechno zlato. Automatické nakupování se nejčastěji používá na začátku hry, kdy jsou ještě pozemky 
                    poměrně levné.</p>
                </div>
    )
}

export default Pozemky;