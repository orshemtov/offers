import React, { useEffect, useState } from "react"
import "./App.css"
import { Client, ClientCard } from "./components/ClientCard/ClientCard"
import axios from "axios"
import { Box, Button, Fab, Grid, Modal, TextField } from "@mui/material"
import { Add } from "@mui/icons-material"


const fabStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 40,
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

function App() {
  const [clients, setClients] = useState<Client[]>([])
  const [newClientModalOpen, setNewClientModalOpen] = useState(false)

  useEffect(() => {
    const getClients = async () => {
      const url = "/clients"
      const resp = await axios.get(url)
      const data = await resp.data
      setClients(data)
    }
    getClients().then()
  }, [])


  function handleNewClientModalClose() {
    setNewClientModalOpen(false)
  }

  function handleNewClientModalCancel() {
    setNewClientModalOpen(false)
  }

  function handleNewClientModalClick() {
    setNewClientModalOpen(true)
  }

  return (
    <Box>
      <Grid container spacing={2} columns={1}>
        {clients.map((client, i) => {
          return <Grid key={i} item xs={4}>
            <ClientCard client={client}/>
          </Grid>
        })}
      </Grid>
      <Fab color={"primary"} sx={fabStyle} onClick={handleNewClientModalClick}>
        <Add/>
        <Modal open={newClientModalOpen} onClose={handleNewClientModalClose}>
          <Box sx={modalStyle} component={"form"}>
            <Grid container spacing={4} columns={1}>
              <Grid item>
                <TextField required label={"Name"}/>
              </Grid>
              <Grid item>
              </Grid>
              <Grid item>
                <TextField required label={"Company"}/>
              </Grid>
              <Grid item>
                <TextField required multiline rows={4} label={"Address"}/>
              </Grid>
              <Grid item>
                <TextField required label={"Phone"}/>
              </Grid>
              <Grid item>
                <TextField required label={"Email"} type={"email"}/>
              </Grid>
              <Grid item xs={4}>
                <Button type={'submit'}>Create</Button>
                <Button onClick={handleNewClientModalCancel}>Cancel</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Fab>
    </Box>
  )
}

export default App
