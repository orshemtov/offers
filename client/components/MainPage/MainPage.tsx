import * as React from "react";
import { Topbar } from "../Topbar/Topbar";
import { Box, Container } from "@mui/material";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";

type Props = {};

export function MainPage(props: Props) {
  return (
    <Container maxWidth={"xl"}>
      <Topbar />
      <Box display={"flex"}>
        <Box flex={8}>
          <Content />
        </Box>
        <Box flex={2}>
          <Sidebar />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}
