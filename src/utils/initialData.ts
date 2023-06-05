import { Debt } from "../context";

export const initialData: Debt[] = [
    {
        id: '1',
        name: 'Location de ski',
        creditor: 'Paul',
        amount: 350,
        date: new Date().toISOString().substring(0,10),
        paymentMethod: 'CB',
        isDone: 'oui'  
    },
    {
        id: '2',
        name: 'Repas',
        creditor: 'Lauriane',
        amount: 10,
        date: new Date().toISOString().substring(0,10),
        paymentMethod: 'CB',
        isDone: 'oui'  
    },
    {
        id: '3',
        name: 'Cinéma',
        creditor: 'Axel',
        amount: 17,
        date: new Date().toISOString().substring(0,10),
        paymentMethod: 'CB',
        isDone: 'non'  
    },
    {
        id: '4',
        name: 'Vacances',
        creditor: 'Pierrafeu',
        amount: 700,
        date: new Date().toISOString().substring(0,10),
        paymentMethod: 'CB',
        isDone: 'non'  
    }
];

export default initialData;