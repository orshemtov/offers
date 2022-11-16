import { Box, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Client } from "../../models/client"
import ClientCard from "./ClientCard"
import styles from "../../styles/ClientsPage.module.css"
import NewClientDialog from "./NewClientDialog"
import Search from "../Search/Search"

type Props = {};

const ClientsPage = (props: Props) => {
  const [clients, setClients] = useState<Client[]>([])
  useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => {
        setClients(data)
      })
  }, [])

  return (
    <Box>
      <Search/>
      <div className={styles.newItemDialog}>
        <NewClientDialog/>
      </div>
      <Grid container rowSpacing={4}>
        {clients.map((c, i) => {
          return (
            <Grid key={i} item xs={4}>
              <ClientCard client={c}/>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ClientsPage
