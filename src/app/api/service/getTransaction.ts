"use server";

export async function getTransaction() {
  const res = await fetch("http://localhost:7000/transactions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
