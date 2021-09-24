import React from 'react'

const HlavniAtributy = () => {
    return (
        <div>
            <ul>
                <table className="ui center aligned celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th colSpan="2">Slabší armáda</th>
                            <th colSpan="2">Silnější armáda</th>
                            <th colSpan="2">Zalidnění</th>
                            <th colSpan="2">Počet útoku</th>
                            <th colSpan="2"></th>
                        </tr>
                        <tr><th>Rasa</th>
                            <th>O</th>
                            <th>Ú</th>
                            <th>O</th>
                            <th>Ú</th>
                            <th>Dům</th>
                            <th>Zbrojari</th>
                            <th>Vojenské</th>
                            <th>Špionáž</th>
                            <th>Věžě</th>
                            <th>Tahů</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td data-label="Rasy">Lidé</td>
                            <td data-label="Farmari">6</td>
                            <td data-label="Kamenici">7</td>
                            <td data-label="Zednici">11</td>
                            <td data-label="Obchodnici">11</td>
                            <td data-label="Alchymisti">2</td>
                            <td data-label="Zbrojari">3.3</td>
                            <td data-label="Kouzelnici">3</td>
                            <td data-label="Spionaz">15</td>
                            <td data-label="Veze">+5%</td>
                            <td data-label="Tahu">15</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Elfové</td>
                            <td data-label="Farmari">6</td>
                            <td data-label="Kamenici">4</td>
                            <td data-label="Zednici">13</td>
                            <td data-label="Obchodnici">7</td>
                            <td data-label="Alchymisti">2</td>
                            <td data-label="Zbrojari">2.8</td>
                            <td data-label="Kouzelnici">2</td>
                            <td data-label="Spionaz">0</td>
                            <td data-label="Veze">0</td>
                            <td data-label="Tahu">14</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Trpaslíci</td>
                            <td data-label="Farmari">6</td>
                            <td data-label="Kamenici">9</td>
                            <td data-label="Zednici">12</td>
                            <td data-label="Obchodnici">14</td>
                            <td data-label="Alchymisti">1</td>
                            <td data-label="Zbrojari">3.2</td>
                            <td data-label="Kouzelnici">4</td>
                            <td data-label="Spionaz">0</td>
                            <td data-label="Veze">+20%</td>
                            <td data-label="Tahu">16</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Hobiti</td>
                            <td data-label="Farmari">4</td>
                            <td data-label="Zednici">6</td>
                            <td data-label="Zednici">8</td>
                            <td data-label="Obchodnici">7</td>
                            <td data-label="Alchymisti">3</td>
                            <td data-label="Zbrojari">3.2</td>
                            <td data-label="Kouzelnici">2</td>
                            <td data-label="Spionaz">20</td>
                            <td data-label="Věže">+15%</td>
                            <td data-label="Tahu">14</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Skřeti</td>
                            <td data-label="Farmari">1</td>
                            <td data-label="Zednici">13</td>
                            <td data-label="Zednici">4</td>
                            <td data-label="Obchodnici">18</td>
                            <td data-label="Alchymisti">2</td>
                            <td data-label="Zbrojari">3.1</td>
                            <td data-label="Kouzelnici">5</td>
                            <td data-label="Spionaz">5</td>
                            <td data-label="Věže"></td>
                            <td data-label="Tahu">18</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Magistři</td>
                            <td data-label="Farmari">6</td>
                            <td data-label="Zednici">7</td>
                            <td data-label="Zednici">11</td>
                            <td data-label="Obchodnici">12</td>
                            <td data-label="Alchymisti">2</td>
                            <td data-label="Zbrojari">2.5</td>
                            <td data-label="Kouzelnici">0</td>
                            <td data-label="Spionaz">0</td>
                            <td data-label="Věže">10</td>
                            <td data-label="Tahu">14</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Víly</td>
                            <td data-label="Farmari">3</td>
                            <td data-label="Zednici">5</td>
                            <td data-label="Zednici">6</td>
                            <td data-label="Obchodnici">10</td>
                            <td data-label="Alchymisti">5</td>
                            <td data-label="Zbrojari">1.9</td>
                            <td data-label="Kouzelnici">5</td>
                            <td data-label="Spionaz">5</td>
                            <td data-label="Věže">+25%</td>
                            <td data-label="Tahu">16</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Demoni</td>
                            <td data-label="Farmari">7</td>
                            <td data-label="Zednici">18</td>
                            <td data-label="Zednici">11</td>
                            <td data-label="Obchodnici">28</td>
                            <td data-label="Alchymisti">1</td>
                            <td data-label="Zbrojari">2.1</td>
                            <td data-label="Kouzelnici">3</td>
                            <td data-label="Spionaz">0</td>
                            <td data-label="Věže"></td>
                            <td data-label="Tahu">19</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Nemrtví</td>
                            <td data-label="Farmari">4</td>
                            <td data-label="Zednici">5</td>
                            <td data-label="Zednici">7</td>
                            <td data-label="Obchodnici">9</td>
                            <td data-label="Alchymisti">1</td>
                            <td data-label="Zbrojari">5.9</td>
                            <td data-label="Kouzelnici">3</td>
                            <td data-label="Spionaz">25</td>
                            <td data-label="Věže">+40%</td>
                            <td data-label="Tahu">16</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Obři</td>
                            <td data-label="Farmari">2</td>
                            <td data-label="Zednici">9</td>
                            <td data-label="Zednici">5</td>
                            <td data-label="Obchodnici">16</td>
                            <td data-label="Alchymisti">2</td>
                            <td data-label="Zbrojari">2.5</td>
                            <td data-label="Kouzelnici">2</td>
                            <td data-label="Spionaz">5</td>
                            <td data-label="Věže"></td>
                            <td data-label="Tahu">21</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
    )
}

export default HlavniAtributy;
