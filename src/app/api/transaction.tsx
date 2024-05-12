"use server";
import { BASE_URL } from "../../../url";
import ICreateTransaction from "../interface/transaction";
export const createTransaction = async (transaction: ICreateTransaction) => {
  const response = await fetch(`${BASE_URL}/transaction/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to_address: transaction.to_address,
      amount: transaction.amount,
      secret_key: transaction.secret_key,
    }),
  });

  if (!response.ok) {
    console.error("Network response was not ok");
  }

  return await response.json();
};
