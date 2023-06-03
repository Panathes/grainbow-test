import { createContext } from 'react';

export interface Debt {
    id: string;
    name: string;
    creditor: string;
    amount: number;
    date: string;
    paymentMethod: string;
    isDone: boolean;
}

const TotalDebts = createContext<Debt[] | null>(null)

export default TotalDebts;