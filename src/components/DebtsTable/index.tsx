import React, { useState, useEffect } from "react";
import { Wrapper, Reimburse, Button } from "./style";
import { Debt } from "../../type";
import { useNavigate } from "react-router-dom";
const moment = require("moment");

const DebtsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [debts, setDebts] = useState<Array<Debt>>();
  const [id, setId] = useState<string>("");

  const navigate = useNavigate();
  let storedData = localStorage.getItem("debts");

  useEffect(() => {
    if (storedData) {
      setDebts(JSON.parse(storedData));
    }
  }, [storedData]);

  const goToAddPage = () => {
    navigate("/add");
  };

  const goToUpdate = (id: string) => {
    navigate(`/${id}`);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteDebt = (id: string) => {
    let newDebtsArray = debts?.filter((index) => index.id !== id);
    localStorage.setItem("debts", JSON.stringify(newDebtsArray));
    setId("");
    toggleModal();
  };

  const openDeleteModal = (id: string) => {
    toggleModal();
    setId(id);
  };

  const active = isModalOpen ? "is-active" : "";

  return (
    <Wrapper>
      <button onClick={goToAddPage} className="button is-info is-light">
        Ajouter
      </button>
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
            <button onClick={() => deleteDebt(id)} className="button is-danger">
              Supprimer
            </button>
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
            {debts?.map((debt) => (
              <tr key={debt.id}>
                <td>{debt.name}</td>
                <td>{debt.creditor}</td>
                <td>{debt.amount}</td>
                <td>{moment(debt.date).format("DD/MM/YYYY")}</td>
                <td>{debt.paymentMethod}</td>
                <td>
                  <Reimburse isDone={debt.isDone}>{debt.isDone}</Reimburse>
                </td>
                <td>
                  <Button
                    onClick={() => goToUpdate(debt.id)}
                    className="button is-info"
                  >
                    Modifier
                  </Button>
                  <Button
                    onClick={() => openDeleteModal(debt.id)}
                    className="button is-danger"
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default DebtsTable;
