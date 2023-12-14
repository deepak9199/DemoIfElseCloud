export interface ApiData {
  balance: Balance;
  money_statistics: MoneyStatistics;
  transactions: Transaction[];
}

export interface Balance {
  total_balance: number;
  monthly_payment_limit: number;
  payment_done_so_far: number;
  payment_done_percentage: number;
}

export interface MoneyStatistics {
  total_income: TotalIncome;
  total_expense: TotalExpense;
  total_investment: TotalInvestment;
}

export interface TotalIncome {
  value: number;
  trend: number;
  trend_color: string;
}

export interface TotalExpense {
  value: number;
  trend: number;
  trend_color: string;
}

export interface TotalInvestment {
  value: number;
  trend: number;
  trend_color: string;
}

export interface Transaction {
  id: string;
  date: string;
  name: string;
  status: string;
  type: string;
  amount: number;
}
