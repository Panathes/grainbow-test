import React, { Fragment } from "react";
import DebtsForm from "../../components/DebtsForm";
import Header from "../../components/Header";
import { ModelData } from "../../components/DebtsForm";


const NewDebts = () => {
    const storedData = localStorage.getItem('debts');
    let debts: Array<ModelData> = [];

    if (storedData) {
        // Convertissez les données en un tableau d'objets
        debts = JSON.parse(storedData);
      }

    const addData = (data: ModelData) => {
        debts.push(data);
        localStorage.setItem('myData', JSON.stringify(debts));
      }; 

    return (
        <Fragment>
            <Header />
            <DebtsForm onSubmit={addData}/>
        </Fragment>
    )
}

export default NewDebts;