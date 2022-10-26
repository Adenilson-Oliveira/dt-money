import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
