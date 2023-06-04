import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from 'react-hook-form';

export interface ModelData {
    id: string;
    name: string;
    creditor: string;
    amount: number;
    date: string;
    paymentMethod: string;
    isDone: boolean;
  }

interface TransferProps {
    onSubmit: (data: ModelData) => void;
}

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
const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Box = styled.div`
    width: 200px;
`

const DebtsForm = ({onSubmit}: TransferProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ModelData>();

    const submitHandler: SubmitHandler<ModelData> = data => {
        console.log(data)
        onSubmit(data);
      };

    return (
        <Wrapper>
            <Box>
                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Label>Libellé de dette</Label>
                    <Input type="text" {...register('name', { required: true, min: 0 })} />
                    {errors.amount?.type === 'required' && <span>Champs requis</span>}

                    <Label>Créditeur</Label>
                    <Input type="text" {...register('creditor', { required: true, min: 0 })} />
                    {errors.amount?.type === 'required' && <span>Champs requis</span>}

                    <Label>Montant</Label>
                    <Input type="number" {...register('amount', { required: true, min: 0 })} />
                    {errors.amount?.type === 'required' && <span>Champs requis</span>}
                    {errors.amount?.type === 'min' && <span>The amount must be greater than or equal to 0</span>}

                    <Label>Date</Label>
                    <Input type="date" {...register('date', { required: true, min: 0 })} />
                    {errors.amount?.type === 'required' && <span>Champs requis</span>}

                    <Label>Moyen de paiement</Label>
                    <Input type="text" {...register('paymentMethod', { required: true, min: 0 })} />
                    {errors.amount?.type === 'required' && <span>Champs requis</span>}

                    <Label>Rembourser</Label>
                    <select {...register("isDone")}>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                    </select>   
                    <Button type="submit">Valider</Button>
                </Form>
            </Box>
        </Wrapper>

    )
};

export default DebtsForm;