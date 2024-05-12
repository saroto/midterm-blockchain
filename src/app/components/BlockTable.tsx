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
  hashed: string,
  block_capacity: number,
  mined: Date,
  nonce: number
): BlockData {
  return { hashed, block_capacity, mined, nonce };
}

export default function BlockTable({ rows }: { rows: BlockData[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hashed</TableCell>
            <TableCell align="right">Block Capacity</TableCell>
            <TableCell align="right">Nonce</TableCell>
            <TableCell align="right">Block Capacity</TableCell>
            <TableCell align="right">Mined</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.hashed}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.hashed}
              </TableCell>
              <TableCell align="right">{row.block_capacity}</TableCell>
              <TableCell align="right">{row.mined.toString()}</TableCell>
              <TableCell align="right">{row.nonce}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
