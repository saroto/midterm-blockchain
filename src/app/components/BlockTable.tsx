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
  nonce: number
): BlockData {
  return { hash, block_capacity, mined, nonce };
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
            <TableCell>Hashed</TableCell>
            <TableCell align="right">Block Capacity</TableCell>
            <TableCell align="right">Nonce</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.hash}
                </TableCell>
                {/* <TableCell component="th" scope="row">
                  {row.hash || "No Hash"}
                </TableCell> */}
                <TableCell align="right">{row.block_capacity}</TableCell>
                <TableCell align="right">{row.nonce}</TableCell>
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
