import React,{ Fragment , useState , useEffect } from "react";
import DebtsForm from "../../components/DebtsForm";
import Header from "../../components/Header";
import { Debt } from "../../context";
import { Button } from "./style";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateDebt = () => {
    const [debts, setDebts] = useState<Array<Debt>>();

    let storedData = localStorage.getItem('debts')
    useEffect(() => {
        if (storedData) {
          setDebts(JSON.parse(storedData))
        }
      }, [storedData])
    //   console.log(storedData)

    const  debtId  = useParams();   
    // const debts = useContext(TotalDebts)

    const debt = debts?.find((item: { id: any; }) => item.id === debtId.id)

    const navigate = useNavigate()

    const goToHomepage = () => {
        navigate('/')
    }

    const updateData = (data: Debt) => {
        // debts?.push(data);
        console.log(data)
        // localStorage.setItem('debts', JSON.stringify(debts));
        // navigate('/')
    }

    return (
        <Fragment>
            <Header />
            <Button  onClick={goToHomepage} className="button is-info is-light">Retour a l'accueil</Button>
            <DebtsForm  debt={debt} onSubmit={updateData}/>
        </Fragment>
    )
}

export default UpdateDebt;