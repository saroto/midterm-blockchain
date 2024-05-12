"use client";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
  const [data, setData] = useState<ApiResponse>();
  useEffect(() => {
    getTransaction().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <Box width={"100%"} padding={5}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Transaction
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell align="center">Sender</TableCell>
              <TableCell align="center">Reciver</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.transactions.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.amount}
                </TableCell>

                <TableCell align="right">{row.from_address}</TableCell>
                <TableCell align="right">{row.to_address}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
