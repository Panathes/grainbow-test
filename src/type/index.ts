export interface Debt {
  id: string;
  name: string;
  creditor: string;
  amount: number;
  date: string | Date;
  paymentMethod: string;
  isDone: string;
}
