import { createContext } from 'react';

export interface Debt {
    id: string;
    name: string;
    creditor: string;
    amount: number;
    date: Date;
    paymentMethod: string;
    isDone: string;
}

const TotalDebts = createContext<Debt[] | null>(null)

export default TotalDebts;