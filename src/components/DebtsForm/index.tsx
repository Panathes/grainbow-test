import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Form, Input, Label, Wrapper } from "./style";
import { Debt } from "../../type";

interface TransferProps {
  debt?: Debt;
  onSubmit: (data: Debt) => void;
}

const DebtsForm = ({ onSubmit, debt }: TransferProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Debt>();

  useEffect(() => {
    reset({
      id: debt ? debt?.id : "",
      name: debt ? debt?.name : "",
      creditor: debt ? debt?.creditor : "",
      amount: debt ? debt?.amount : 0,
      date: debt ? debt?.date : new Date().toISOString().substring(0, 10),
      paymentMethod: debt ? debt?.paymentMethod : "",
      isDone: debt ? debt?.isDone : "",
    });
  }, [debt, reset]);

  const submitHandler: SubmitHandler<Debt> = (data) => {
    onSubmit(data);
  };

  const isReimburse: string[] = ["Oui", "Non"];
  const choosePaymentMethod: string[] = [
    "CB",
    "Espèces",
    "Portefeuille virtuel",
    "Paiement mobile",
    "Virement bancaire",
    "Chèques",
  ];

  return (
    <Wrapper>
      <Box>
        <h1>{debt ? "Éditer dette" : "Nouvelle dette"}</h1>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Label>Libellé de dette</Label>
          <Input
            type="text"
            {...register("name", { required: true, min: 0 })}
          />
          {errors.amount?.type === "required" && <span>Champs requis</span>}

          <Label>Créditeur</Label>
          <Input
            type="text"
            {...register("creditor", { required: true, min: 0 })}
          />
          {errors.amount?.type === "required" && <span>Champs requis</span>}

          <Label>Montant</Label>
          <Input
            type="number"
            {...register("amount", { required: true, min: 0 })}
          />
          {errors.amount?.type === "required" && <span>Champs requis</span>}
          {errors.amount?.type === "min" && (
            <span>The amount must be greater than or equal to 0</span>
          )}

          <Label>Date</Label>
          <Input type="date" {...register("date", { required: true })} />
          {errors.amount?.type === "required" && <span>Champs requis</span>}

          <Label>Moyen de paiement</Label>
          <select {...register("paymentMethod")}>
            {choosePaymentMethod.map((val) => (
              <option>{val}</option>
            ))}
          </select>
          {errors.amount?.type === "required" && <span>Champs requis</span>}

          <Label>Rembourser</Label>
          <select {...register("isDone")}>
            {isReimburse.map((val) => (
              <option>{val}</option>
            ))}
          </select>
          <Button type="submit">Valider</Button>
        </Form>
      </Box>
    </Wrapper>
  );
};

export default DebtsForm;
