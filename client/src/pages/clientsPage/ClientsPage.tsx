import React, { useEffect, useState } from "react"
import { Box, Button, Card, CardActions, CardContent, Fab, Grid, Modal, TextField } from "@mui/material"
import { Add } from "@mui/icons-material"
import { Client, createClient, getClients } from "../../api"
import { ClientCard } from "../../components/ClientCard/ClientCard"


const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 80,
  left: "auto",
  position: "fixed"
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

const cardStyle = {
  boxShadow: "none"
}

const textFieldStyle = {
  marginY: 4,
  width: "100%"
}

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([])
  const [newClientModalOpen, setNewClientModalOpen] = useState(false)

  useEffect(() => {
    getClients()
      .then(clients => setClients(clients))
  }, [])

  // Modal opening/closing

  const handleNewClientModalClose = () => {
    setNewClientModalOpen(false)
  }

  const handleNewClientModalCancel = () => {
    setNewClientModalOpen(false)
  }

  const handleNewClientModalClick = () => {
    setNewClientModalOpen(true)
  }

  // New client
  const [name, setName] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [email, setEmail] = useState<string>("")

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

  const handleNewClientSubmit = async (e: any) => {
    const data = {
      name: name,
      company: company,
      address: address,
      phone: phone,
      email: email
    }
    const client = await createClient(data)
    setClients([client, ...clients])
    setNewClientModalOpen(false)
  }

  return (
    <Box>
      <Grid
        padding={6}
        marginBottom={10}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {
          clients.map((client: Client, i: number) => (
              <Grid>
                <ClientCard key={i} client={client} clients={clients} setClients={setClients}/>
              </Grid>
            )
          )
        }
      </Grid>
      <Fab color={"primary"} sx={fabStyle} onClick={handleNewClientModalClick}>
        <Add/>
        <Modal open={newClientModalOpen} onClose={handleNewClientModalClose}>
          <Box sx={modalStyle} component={"form"}>
            <Card sx={cardStyle}>
              <CardContent>
                <TextField sx={textFieldStyle} onChange={handleNameChange} label={"Name"}/>
                <TextField sx={textFieldStyle} onChange={handleCompanyChange} label={"Company"}/>
                <TextField sx={textFieldStyle} onChange={handleAddressChange} label={"Address"} multiline rows={4}/>
                <TextField sx={textFieldStyle} onChange={handlePhoneChange} label={"Phone"}/>
                <TextField sx={textFieldStyle} onChange={handleEmailChange} label={"Email"}/>
              </CardContent>
              <CardActions>
                <Button onClick={handleNewClientSubmit}>Create</Button>
                <Button onClick={handleNewClientModalCancel}>Cancel</Button>
              </CardActions>
            </Card>
          </Box>
        </Modal>
      </Fab>
    </Box>
  )
}

export default ClientsPage
