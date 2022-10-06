import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../../../models/product";
import DeleteDialog from "../../Dialog/DeleteDialog";
import EditDialog from "../../Dialog/EditDialog";

type Props = {
  products: Product[];
};

interface ProductWithQuantity extends Product {
  quantity: number;
}

export default function ProductsTable({ products }: Props) {
  const productsWithQuantities = products.map((p) => {
    return { ...p, quantity: 1 };
  });

  const total = (products: ProductWithQuantity[]): number => {
    let sum = 0;
    for (const product of products) {
      sum += product.quantity * product.price;
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
          {productsWithQuantities.map((row, i) => (
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
            <TableCell align="right">{total(productsWithQuantities)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
