import { Debt } from "../context";

export const initialData: Debt[] = [
    {
        id: '1',
        name: 'Location de ski',
        creditor: 'Paul',
        amount: 350,
        date: '2022-03-24',
        paymentMethod: 'CB',
        isDone: true  
    },
    {
        id: '2',
        name: 'Repas',
        creditor: 'Lauriane',
        amount: 10,
        date: '2022-03-24',
        paymentMethod: 'CB',
        isDone: true  
    },
    {
        id: '3',
        name: 'Cinéma',
        creditor: 'Axel',
        amount: 17,
        date: '2022-03-24',
        paymentMethod: 'CB',
        isDone: false  
    },
    {
        id: '4',
        name: 'Vacances',
        creditor: 'Pierrafeu',
        amount: 700,
        date: '2022-03-14',
        paymentMethod: 'CB',
        isDone: true  
    }
];

export default initialData;