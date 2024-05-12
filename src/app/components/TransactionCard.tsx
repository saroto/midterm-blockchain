import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ITransaction } from "../interface/transaction";
import { Box } from "@mui/material";

interface TransactionCardProps {
  transactions: ITransaction | null;
}

export default function TransactionCard({
  transactions,
}: TransactionCardProps) {
  if (transactions === null) {
    return (
      <Typography>
        You have not created a transaction yet. Click on the Create Transaction
        button to create a transaction.
      </Typography>
    );
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Typography variant="h5" component="div">
          Transaction Details
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">Amount: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.amount}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">From Address: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.from_address}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">Hash: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.msg}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">Public Key: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.pub_key}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">Signature: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.signature}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">Status: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.status}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body2">To Address: </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#4f9bd9",
              fontWeight: "normal",
              paddingInline: "10px",
            }}
          >
            {transactions.to_address}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
