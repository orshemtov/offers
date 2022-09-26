import { Delete, Edit } from "@mui/icons-material";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Rows, Row } from "../../data/fake_products";
import Dialog from "../Dialog/Dialog";

type Props = {
  rows: Rows;
};

export default function ProductsTable({ rows }: Props) {
  const calculateTotal = (rows: Rows): number => {
    let sum = 0;
    for (const row of rows) {
      sum += row.price * row.quantity;
    }
    return sum;
  };

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Avatar src={row.image} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price * row.quantity}</TableCell>
              <TableCell align="right">
                <Dialog icon={<Delete />} color={"error"} />
                <Dialog icon={<Edit />} color={"primary"} />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{calculateTotal(rows)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
