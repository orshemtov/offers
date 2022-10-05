import { Delete, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ProductRow } from "../../data/products";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditDialog from "../Dialog/EditDialog";

type Props = {
  rows: ProductRow[];
};

export default function ProductsTable({ rows }: Props) {
  const calculateTotal = (rows: ProductRow[]): number => {
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
          {rows.map((row: ProductRow, i: number) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                <Avatar src={row.image} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price * row.quantity}</TableCell>
              <TableCell align="right">
                <DeleteDialog />
                <EditDialog />
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
