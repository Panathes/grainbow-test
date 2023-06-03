import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 10px;
border-radius: 5px;
height: 350px;
width: 350px;
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

const DebtsTable = () => {
    return (
    <Wrapper>
        <FormWrapper>
          <Form>
            <Label>Depuis quelle compte ?</Label>
            <select></select>
            <Label>Vers quelle compte ?</Label>
            <select></select> 
            <Label>Quelle montant ?</Label>
            <select></select>
            <Input type="number" />
      
            <Button type="submit">Transferer</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    )
}