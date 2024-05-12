import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ITransaction } from "../interface/transaction";
import { Typography } from "@mui/material";

interface TransactionTableProps {
  transactions: ITransaction | null;
}

export default function TransactionTable({
  transactions,
}: TransactionTableProps) {
  if (transactions === null) {
    return (
      <Typography>
        You have not created a transaction yet. Click on the Create Transaction
        button to create a transaction.
      </Typography>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>From Address</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Public Key</TableCell>
            <TableCell>Signature</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>To Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={transactions.pub_key}>
            <TableCell>{transactions.amount}</TableCell>
            <TableCell>{transactions.from_address}</TableCell>
            <TableCell>{transactions.msg}</TableCell>
            <TableCell>{transactions.pub_key}</TableCell>
            <TableCell>{transactions.signature}</TableCell>
            <TableCell>{transactions.status}</TableCell>
            <TableCell>{transactions.to_address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
