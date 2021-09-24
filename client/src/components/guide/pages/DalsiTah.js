import React from "react";

const DalsiTah = () => {
    return (
                <div className="twelve wide column">
                    <h4 className="ui center aligned segment">Ovládání hry - Imperátor</h4>
                    <p className="ui segment">Každá rasa má jiný počet tahů a tento počet se dá ještě v průběhu hraní zvýšit. 
                    Při každém tahu se projeví změny v guberntátu, zaškolí se část nezaučených dělníků v profesích, zaškolí 
                    se i část armády, gubernát získá nebo ztratí suroviny podle situace, mohou přijít i noví obyvatelé.</p>

                    <p><strong className="green">Pokladna</strong> Kromě již zmiňovaných věcí se odehráváním tahů i snižuje 
                    síla trvanlivých kouzel. Pokud má gubernát zakouzlenu pracovitost a její síla je například 1.000.000, 
                    další tah se kouzlo sníží na 690.000 a po dalším tahu bude mít kouzlo sílu 476.100. 
                    Základní vzorec na snižování kouzel po každém tahu je <span className="red">síla_kouzla * 0.69</span>. Po každém 
                    tahu musí mít gubernát kladný počet jídla a zlata, jinak obyvatelstvo odchází. Stejně tak při moru.</p>
                </div>    )
}

export default DalsiTah;
