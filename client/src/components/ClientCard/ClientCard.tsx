import React, { useState } from "react"
import "./clientCard.css"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
import { Delete, Edit, Person } from "@mui/icons-material"
import { Client, deleteClient, editClient } from "../../api/clients"
import { blue, grey } from "@mui/material/colors"
import NewOffer from "../NewOffer/NewOffer"


type Props = {
  client: Client
  clients: Client[]
  setClients: (clients: Client[]) => void,
}

const cardStyle = {
  border: "none",
  boxShadow: "none",
  maxWidth: 700,
  minWidth: 700,
  backgroundColor: grey[300],
  borderRadius: 5
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

const modalCardStyle = {
  boxShadow: "none"
}

const textFieldStyle = {
  marginY: 4,
  width: "100%"
}


export function ClientCard({ client, clients, setClients }: Props) {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false)

  const [name, setName] = useState<string>(client.name)
  const [company, setCompany] = useState<string>(client.company)
  const [address, setAddress] = useState<string>(client.address)
  const [phone, setPhone] = useState<string>(client.phone)
  const [email, setEmail] = useState<string>(client.email)

  const handleDeleteSubmit = async (e: any) => {
    await deleteClient(client.ID)
    clients = clients.filter((c) => c.ID !== client.ID)
    setClients(clients)
  }

  const handleEditSubmit = async () => {
    const data = {
      ID: client.ID,
      name: name,
      company: company,
      address: address,
      phone: phone,
      email: email
    }
    await editClient(client.ID, data)
    setEditModalOpen(false)

    clients[clients.indexOf(client)] = data
    setClients([...clients])
  }

  const handleEditModal = (e: any) => {
    setEditModalOpen(true)
  }

  const handleEditModalClose = () => {
    setEditModalOpen(false)
  }

  const handleEditCancel = () => {
    setEditModalOpen(false)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value)
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }


  return <Card sx={cardStyle}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: blue[500] }}>
          <Person/>
        </Avatar>
      }
      title={client.name}
      subheader={client.company}
      action={
        <CardActions>
          <IconButton onClick={handleEditModal}>
            <Edit color={"primary"}/>
          </IconButton>
          <IconButton onClick={handleDeleteSubmit}>
            <Delete color={"error"}/>
          </IconButton>
          <Modal open={editModalOpen} onClose={handleEditModalClose}>
            <Box sx={modalStyle}>
              <Card sx={modalCardStyle}>
                <CardContent>
                  <TextField sx={textFieldStyle} label={"Name"} value={name} onChange={handleNameChange}/>
                  <TextField sx={textFieldStyle} label={"Company"} value={company} onChange={handleCompanyChange}/>
                  <TextField sx={textFieldStyle} label={"Address"} multiline rows={4} value={address}
                             onChange={handleAddressChange}/>
                  <TextField sx={textFieldStyle} label={"Phone"} value={phone} onChange={handlePhoneChange}/>
                  <TextField sx={textFieldStyle} label={"Email"} value={email} onChange={handleEmailChange}/>
                </CardContent>
                <CardActions>
                  <Button onClick={handleEditSubmit}>Update</Button>
                  <Button onClick={handleEditCancel}>Cancel</Button>
                </CardActions>
              </Card>
            </Box>
          </Modal>
        </CardActions>
      }
    />
    <CardContent>
      <TableContainer component={Paper} sx={{ boxShadow: "none", flex: 0.5, backgroundColor: grey[200] }}>
        <Table>
          <TableBody>
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
    </CardContent>
    <CardActions>
      <NewOffer/>
      <Button>Past Offers</Button>
    </CardActions>
  </Card>

}