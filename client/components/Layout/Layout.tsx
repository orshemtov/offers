import { Container, Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Topbar } from "../Topbar/Topbar";
import styles from "./Layout.module.css";

const Layout = (props: PropsWithChildren) => {
  return (
    <Container maxWidth={"xl"}>
      <Topbar />
      {props.children}
      <footer className={styles.footer}>Barcom &copy; 2022</footer>
    </Container>
  );
};

export default Layout;
