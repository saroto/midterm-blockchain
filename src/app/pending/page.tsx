"use client";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTransaction } from "../api/service/getTransaction";
interface Transaction {
  amount: number;
  from_address: string;
  msg: string;
  pub_key: string;
  signature: string;
  status: string;
  to_address: string;
}

interface TransactionsData {
  total_transactions: number;
  transactions: Transaction[];
}

interface ApiResponse {
  data: TransactionsData;
  status: string;
}

export default function PendingTransaction() {
  useEffect(() => {
    getTransaction().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <Box width={"100%"} padding={5}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Transaction
      </Typography>
    </Box>
  );
}
