import * as React from "react"
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import { faker } from "@faker-js/faker"
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material"

interface Row {
  id: number
  image: string
  name: string
  price: number
  quantity: number
}

type Rows = Row[]

const createData = (): Rows => {
  let items: Rows = []
  for (let i = 0; i < faker.datatype.number({ min: 1, max: 10 }); i++) {
    const row: Row = {
      id: i,
      image: faker.image.technics(30, 30, true),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(10, 2000)),
      quantity: faker.datatype.number({ min: 1, max: 10 })
    }
    items.push(row)
  }
  return items
}

type TableProps = {
  rows: Rows,
}

function ProductsTable({ rows }: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <Avatar src={row.image}/>
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price * row.quantity}</TableCell>
              <TableCell align="right">
                <IconButton color={"error"}>
                  <DeleteIcon/>
                </IconButton>
                <IconButton color={"primary"}>
                  <EditIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

type Props = {};

export function OfferProductsTable(props: Props) {
  const rows: Rows = createData()

  return (
    <div>
      <ProductsTable rows={rows}/>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} paddingY={6}>
        <IconButton color={"inherit"}>
          <AddIcon/>
        </IconButton>
      </Box>
    </div>
  )
}

