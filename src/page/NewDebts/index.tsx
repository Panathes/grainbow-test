import React, { Fragment } from "react";
import DebtsForm from "../../components/DebtsForm";
import Header from "../../components/Header";
import { Button } from "./style";
import { useNavigate } from "react-router-dom";
import { Debt } from "../../type";

const NewDebt = () => {
  const storedData = localStorage.getItem("debts");
  const navigate = useNavigate();

  let debts: Array<Debt> = [];

  if (storedData) {
    debts = JSON.parse(storedData);
  }

  const goToHomepage = () => {
    navigate("/");
  };

  const addData = (data: Debt) => {
    data.id = String(Math.floor(Math.random() * 1000));
    debts.push(data);
    localStorage.setItem("debts", JSON.stringify(debts));
    navigate("/");
  };

  return (
    <Fragment>
      <Header />
      <Button onClick={goToHomepage} className="button is-info is-light">
        Retour a l'accueil
      </Button>
      <DebtsForm onSubmit={addData} />
    </Fragment>
  );
};

export default NewDebt;
