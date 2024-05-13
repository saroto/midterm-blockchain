import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BlockData from "../interface/block";
import ICreateWallet from "../interface/wallet";
import { Box, Button, Typography } from "@mui/material";
function Wallet(public_key: string, secret_key: string): ICreateWallet {
  return { public_key, secret_key };
}

export default function WalletTable({ rows }: { rows: ICreateWallet | null }) {
  const copyToClipboard = (publicKey: string) => {
    navigator.clipboard.writeText(publicKey);
  };

  console.log("waalet in com", rows);
  if (rows === null) {
    return (
      <Typography>
        You have not created a wallet yet. Click on the Create Wallet button to
        create a wallet.
      </Typography>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Your Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={rows.public_key}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {rows.public_key}
              <Button onClick={() => copyToClipboard(rows.public_key)}>
                Copy
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
