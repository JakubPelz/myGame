import React from 'react'

export const PocetMagie = () => {
    return (
        <div>
            <ul>
                <table className="ui center aligned celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th colSpan="3">Profese</th>
                        </tr>
                        <tr><th>Rasa</th>
                            <th>Pozitivní energie</th>
                            <th>Negativní energie</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td data-label="Rasy">Lidé</td>
                            <td data-label="PozitivniEnergie">12</td>
                            <td data-label="NegativniEnergie">25</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Elfové</td>
                            <td data-label="PozitivniEnergie">15</td>
                            <td data-label="NegativniEnergie">25</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Trpaslíci</td>
                            <td data-label="PozitivniEnergie">14</td>
                            <td data-label="NegativniEnergie">0</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Hobiti</td>
                            <td data-label="PozitivniEnergie">10</td>
                            <td data-label="NegativniEnergie">5</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Skřeti</td>
                            <td data-label="PozitivniEnergie">25</td>
                            <td data-label="NegativniEnergie">0</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Magistři</td>
                            <td data-label="PozitivniEnergie">12</td>
                            <td data-label="NegativniEnergie">40</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Víly</td>
                            <td data-label="PozitivniEnergie">12</td>
                            <td data-label="NegativniEnergie">35</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Demoni</td>
                            <td data-label="PozitivniEnergie">16</td>
                            <td data-label="NegativniEnergie">0</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Nemrtví</td>
                            <td data-label="PozitivniEnergie">20</td>
                            <td data-label="NegativniEnergie">35</td>
                        </tr>
                        <tr>
                            <td data-label="Rasy">Obři</td>
                            <td data-label="PozitivniEnergie">30</td>
                            <td data-label="NegativniEnergie">30</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
    )
}

export default PocetMagie;
