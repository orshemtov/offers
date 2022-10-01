import { Add } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";
import type { NextPage } from "next";
import ClientCard from "../components/ClientCard/ClientCard";
import Layout from "../components/Layout/Layout";
import { clients } from "../data/clients";

const ClientsPage: NextPage = () => {
  return (
    <Layout>
      <Fab color="primary">
        <Add />
      </Fab>
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
