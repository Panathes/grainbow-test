import React, { useContext } from "react";
import { Wrapper, Reimburse } from "./style";
import TotalDebts from "../../context";
import { useNavigate } from 'react-router-dom';

const DebtsTable = () => {
    const debts = useContext(TotalDebts)
    const navigate = useNavigate();

    const goToAddPage = () => {
        navigate('/add')
      };

    return (
    <Wrapper>
        <button  onClick={goToAddPage} className="button is-info is-light">Ajouter</button>
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
                    {debts?.map(debt => (
                    <tr key={debt.id}>
                        <td>{debt.name}</td>
                        <td>{debt.creditor}</td>
                        <td>{debt.amount}</td>
                        <td>{debt.date}</td>
                        <td>{debt.paymentMethod}</td>
                        <td><Reimburse isDone={debt.isDone}>{debt.isDone ? 'oui' : 'non'}</Reimburse></td>
                        <td>{debt.paymentMethod}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Wrapper>
    )
}

export default DebtsTable;