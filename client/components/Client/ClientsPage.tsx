import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Client } from "../../models/client";
import NewItemDialog from "../Dialog/NewItemDialog";
import Layout from "../Layout/Layout";
import ClientCard from "./ClientCard";
import NewClient from "./NewClient";

type Props = {};

const ClientsPage = (props: Props) => {
  const [clients, setClients] = useState<Client[]>([]);
  useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
      });
  }, []);

  return (
    <Layout>
      <NewItemDialog>
        <NewClient />
      </NewItemDialog>
      <Search />
      <Grid container rowSpacing={4}>
        {clients.map((c, i) => {
          return (
            <Grid key={i} item xs={4}>
              <ClientCard client={c} />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export default ClientsPage;
