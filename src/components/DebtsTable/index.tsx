import React, { useState, useContext } from "react";
import { Wrapper, Reimburse, Button } from "./style";
import TotalDebts from "../../context";
import { useNavigate } from 'react-router-dom';

const DebtsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [id, setId] = useState<string>('')

    const debts = useContext(TotalDebts)
    const navigate = useNavigate();

    const goToAddPage = () => {
        navigate('/add')
      };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const deleteDebt = (id: string) => {      
        let newDebtsArray = debts?.filter((index) => index.id !== id)
        console.log(newDebtsArray)
        setId('')
        toggleModal()
    }

    const test = (id: string) => {
        console.log(id)
        toggleModal()
        setId(id)
    }

    const active = isModalOpen ? "is-active" : "";

    return (
        
    <Wrapper>
        <button  onClick={goToAddPage} className="button is-info is-light">Ajouter</button>
        <div className={`modal ${active}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button
                onClick={toggleModal}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
                <p>Voulez-vous vraiment supprimer cet élèment ?</p>
            </section>
            <footer className="modal-card-foot">
              <button onClick={toggleModal} className="button">
                Cancel
              </button>
              <button onClick={() => deleteDebt(id)} className="button is-danger">Save changes</button>
            </footer>
          </div>
        </div>     
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
                        <th>Option</th>
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
                        <td>
                            <Button className="button is-info">Modifier</Button>
                            <Button onClick={() => test(debt.id)} className="button is-danger">Supprimer</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Wrapper>
    )
}

export default DebtsTable;