import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler, } from 'react-hook-form';
import { Box, Button, Form, Input, Label, Wrapper } from './style'
import { Debt } from "../../context";


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
    debt?: Debt
    onSubmit: (data: Debt) => void;
}

const DebtsForm = ({onSubmit, debt}: TransferProps) => {
    const [update, setUpdate] = useState<any>(debt)

    // useEffect(() => {
    //     setUpdate(debt)
    // }, [debt])
    useEffect(() => {
    }, [update])

    const { register, handleSubmit, formState: { errors } } = 
    useForm<Debt>(
        {
            defaultValues: {
              id: debt ? update?.id : '',
              name: debt ? update?.name : '',
              creditor: debt ? update?.creditor : '',
              amount: debt ? update?.amount : 0,
              date: debt ? update?.date : new Date(),
              paymentMethod: debt ? update?.paymentMethod : '',
              isDone: debt ? update?.isDone : '' 
            }
          }
    );

    const submitHandler: SubmitHandler<Debt> = data => {
        onSubmit(data);
      };

    // console.log(update)

    return (
        <Wrapper>
            <Box>
                <h1>{debt ? 'Éditer dette' : 'Nouvelle dette' }</h1>
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