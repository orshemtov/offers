import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import OfferForm from "../components/Offer/Form";

const Home: NextPage = () => {
  return (
    <Layout>
      <OfferForm />
    </Layout>
  );
};

export default Home;
