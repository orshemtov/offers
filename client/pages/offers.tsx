import { Box, Modal } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import OfferForm from "../components/Offer/Form";
import { Sidebar } from "../components/Sidebar/Sidebar";

const OffersPage: NextPage = () => {
  return (
    <Modal open={true}>
      <Box display={"flex"}>
        <Box flex={8}>
          <OfferForm />
        </Box>
        <Box flex={2}>
          <Sidebar />
        </Box>
      </Box>
    </Modal>
  );
};

export default OffersPage;
