export default interface ICreateTransaction {
  to_address: string;
  secret_key: string;
  amount: number;
}

export interface ITransaction {
  amount: number;
  from_address: string;
  msg: string;
  pub_key: string;
  signature: string;
  status: string;
  to_address: string;
}

export interface IBalance {
  balance: number;
  public_key: string;
}
