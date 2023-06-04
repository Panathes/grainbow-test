import React, { Fragment } from "react";
import DebtsForm from "../../components/DebtsForm";
import Header from "../../components/Header";
import { ModelData } from "../../components/DebtsForm";
import { Button } from "./style";
import { useNavigate } from 'react-router-dom';


const NewDebt = () => {
    const storedData = localStorage.getItem('debts');
    const navigate = useNavigate();

    let debts: Array<ModelData> = [];

    if (storedData) {
        // Convertissez les données en un tableau d'objets
        debts = JSON.parse(storedData);
      }

    const goToHomepage = () => {
        navigate('/')
    }

    const addData = (data: ModelData) => {
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