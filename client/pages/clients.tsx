import { Grid } from "@mui/material";
import type { NextPage } from "next";
import ClientCard from "../components/Client/ClientCard";
import NewClient from "../components/Client/NewClient";
import NewItemDialog from "../components/Dialog/NewItemDialog";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import { clients } from "../data/clients";

const ClientsPage: NextPage = () => {
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
