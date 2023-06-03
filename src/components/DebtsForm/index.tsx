import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 10px;
border-radius: 5px;
box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
`

const FormWrapper = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 200px;
`;

const Input = styled.input`
padding: 0.5rem;
margin-bottom: 1rem;
`;

const Button = styled.button`
margin-top: 10px;
padding: 0.5rem;
background-color: lightblue;
border: none;
cursor: pointer;
`;

const Label = styled.label`
margin-top: 10px;
margin-bottom: 10px;
`
const Wrapperr = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Box = styled.div`
    width: 200px;
`

const DebtsForm = () => {
    return (
        <Wrapperr>
            <Box>
           <Form>
             <Label>Libellé de dette</Label>
             <Input  />
             <Label>Créditeur</Label>
             <Input  />
             <Label>Montant</Label>
             <Input  />
             <Label>Date</Label>
             <Input  />
             <Label>Moyen de paiement</Label>
             <Input  />
             <Label>Rembourser</Label>
             <select></select>     
             <Button type="submit">Valider</Button>
           </Form>
            </Box>
        </Wrapperr>

    )
};

export default DebtsForm;