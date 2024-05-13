import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BlockData from "../interface/block";
import { Typography, Box } from "@mui/material";
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
    <>
      <Box sx={{ paddingBlock: "20px" }}>
        <Typography variant="h4">Total of {rows.length} blocks</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nonce</TableCell>
              <TableCell>Timestamps</TableCell>
              <TableCell>Transactions</TableCell>
              <TableCell>Hashed</TableCell>
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
                    <TableCell component="th" scope="row">
                      {(() => {
                        let seconds = Math.floor(
                          Date.now() / 1000 - (row.timestamp ?? 0)
                        );
                        const days = Math.floor(seconds / (3600 * 24));
                        seconds -= days * 3600 * 24;
                        const hrs = Math.floor(seconds / 3600);
                        seconds -= hrs * 3600;
                        const mnts = Math.floor(seconds / 60);

                        let result = "";
                        if (days > 0) result += `${days} days, `;
                        if (hrs > 0) result += `${hrs} hours, `;
                        if (mnts > 0) result += `${mnts} minutes `;
                        result += "ago";

                        return result.trim();
                      })()}
                    </TableCell>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {row.transactions?.length}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#4f9bd9" }}
                  >
                    {row.hash}
                  </TableCell>
                  <TableCell align="right">{row.block_capacity}</TableCell>
                  <TableCell
                    align="right"
                    style={{ color: row.mined ? "#4f9bd9" : "red" }}
                  >
                    {row.mined ? "True" : "False"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
