import React, {Fragment} from "react";
import Header from "../../components/Header";
import DebtsTable from "../../components/DebtsTable";
import { Title } from "./style";


const Homepage = () => {
    return (
        <Fragment>
            <Header />
            <Title>Gestionnaire de dettes</Title>
            <DebtsTable />        
        </Fragment>
    )
}

export default Homepage;