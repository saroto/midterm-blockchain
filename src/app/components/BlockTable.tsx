import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BlockData from "../interface/block";
function createData(
  hash: string,
  block_capacity: number,
  mined: boolean,
  nonce: number,
  transactions?: [],
  timestamp?: number
): BlockData {
  return { hash, block_capacity, mined, nonce, transactions, timestamp };
}

export default function BlockTable({ rows }: { rows: BlockData[] }) {
  console.log(
    "mined",
    rows.map((row) => row.mined)
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nonce</TableCell>
            <TableCell>Timestamps</TableCell>
            <TableCell>Hashed</TableCell>
            <TableCell>Transactions</TableCell>
            {/* <TableCell>Hash</TableCell> */}
            <TableCell align="right">Block Capacity</TableCell>
            <TableCell align="right">Mined</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(rows) &&
            rows.map((row) => (
              <TableRow
                key={row.hash}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.nonce}</TableCell>
                <TableCell component="th" scope="row">
                  {new Date((row.timestamp ?? 0) * 1000).toLocaleString()}
                </TableCell>
                <TableCell component="th" scope="row" sx={{ color: "#4f9bd9" }}>
                  {row.hash}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.transactions?.length}
                </TableCell>
                <TableCell align="right">{row.block_capacity}</TableCell>
                <TableCell align="right">
                  {row.mined ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
