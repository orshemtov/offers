import React, { useState } from "react"
import "./clientCard.css"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
import axios from "axios"

export interface Client {
  ID: number
  name: string
  company: string
  address: string
  phone: string
  email: string
}

type Props = {
  client: Client
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}


const editClient = async (id: number) => {
  const url = `/clients/${id}`
}

const deleteClient = async (id: number) => {
  const url = `/clients?id=${id}`
  await axios.delete(url)
}

export function ClientCard({ client }: Props) {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false)


  const handleDelete = async (e: any) => {
    await deleteClient(client.ID)
  }

  const handleEdit = (e: any) => {
    setEditModalOpen(true)
  }

  const handleEditModalClose = () => {
    setEditModalOpen(false)
  }

  const handleEditCancel = () => {
    setEditModalOpen(false)
  }

  return <Card sx={{ border: "none", boxShadow: "none" }}>
    <CardContent sx={{ display: "flex" }}>
      <TableContainer component={Paper} sx={{ boxShadow: "none", flex: 0.5 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
              <TableCell>{client.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Company</TableCell>
              <TableCell>{client.company}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Address</TableCell>
              <TableCell>{client.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
              <TableCell>{client.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
              <TableCell>{client.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box flex={0.5}>

      </Box>
    </CardContent>
    <CardActions>
      <Button>New Offer</Button>
      <Button>Past Offers</Button>
      <IconButton onClick={handleEdit}>
        <Edit color={"primary"}/>
      </IconButton>
      <Modal open={editModalOpen} onClose={handleEditModalClose}>
        <Box sx={modalStyle}>
          <Grid container spacing={4} columns={1}>
            <Grid item>
              <TextField label={"Name"} value={client.name}/>
            </Grid>
            <Grid item>
            </Grid>
            <Grid item>
              <TextField label={"Company"} value={client.company}/>
            </Grid>
            <Grid item>
              <TextField label={"Address"} value={client.address}/>
            </Grid>
            <Grid item>
              <TextField label={"Phone"} value={client.phone}/>
            </Grid>
            <Grid item>
              <TextField label={"Email"} value={client.email}/>
            </Grid>
            <Grid item xs={4}>
              <Button>Update</Button>
              <Button onClick={handleEditCancel}>Cancel</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <IconButton onClick={handleDelete}>
        <Delete color={"error"}/>
      </IconButton>
    </CardActions>
  </Card>

}