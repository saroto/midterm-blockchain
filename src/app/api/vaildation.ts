"use server";
import { BASE_URL } from "../../../url";
export async function Validation() {
  const response = await fetch(`${BASE_URL}/blocks/validate`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}
