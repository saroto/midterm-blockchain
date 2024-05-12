"use server";
import { BASE_URL } from "../../../url";

export const CreateWallet = async () => {
  const response = await fetch(`${BASE_URL}/wallet/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};
