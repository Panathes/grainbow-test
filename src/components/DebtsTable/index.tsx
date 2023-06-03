import React from "react";
import { Wrapper } from "./style";

const DebtsTable = () => {
    return (
    <Wrapper>
        <div className="table-container">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Créditeur</th>
                        <th>Montant</th>
                        <th>Date</th>
                        <th>Moyen de paiement</th>
                        <th>Rembourser</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Hey</td>
                    <td>Ho</td>
                    <td>Hi</td>
                    <td>Hey</td>
                    <td>Ho</td>
                    <td>Hi</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </Wrapper>
    )
}

export default DebtsTable;