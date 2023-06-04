import React, { Fragment } from "react";
import DebtsForm from "../../components/DebtsForm";
import Header from "../../components/Header";
import { Button } from "./style";
import { useNavigate } from 'react-router-dom';
import { Debt } from "../../context";


const NewDebt = () => {
    const storedData = localStorage.getItem('debts');
    const navigate = useNavigate();

    let debts: Array<Debt> = [];

    if (storedData) {
        // Convertissez les données en un tableau d'objets
        debts = JSON.parse(storedData);
      }

    const goToHomepage = () => {
        navigate('/')
    }

    const addData = (data: Debt) => {
        debts.push(data);
        localStorage.setItem('myData', JSON.stringify(debts));
      }; 

    return (
        <Fragment>
            <Header />
            <Button  onClick={goToHomepage} className="button is-info is-light">Retour a l'accueil</Button>
            <DebtsForm onSubmit={addData}/>
        </Fragment>
    )
}

export default NewDebt;