import type { NextPage } from "next"
import ClientsPage from "../../components/Client/ClientsPage"
import Layout from "../../components/Layout/Layout"

const ClientsNextPage: NextPage = () => {
  return <Layout>
    <ClientsPage/>
  </Layout>
}

export default ClientsNextPage
