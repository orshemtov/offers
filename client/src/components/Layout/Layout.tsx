import React from "react"
import "./layout.css"
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { Adb } from "@mui/icons-material"
import { blue } from "@mui/material/colors"

const footerStyle = {
  color: "white",
  backgroundColor: blue[500],
  fontWeight: 700,
}

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <AppBar position={"static"}>
          <Container maxWidth={"xl"}>
          <Toolbar disableGutters>
            <Adb/>
            <Typography variant={"h6"} noWrap component={"a"} href={"/"}>
              BarCom
            </Typography>
          </Toolbar>
            </Container>
        </AppBar>
      </header>
      <main>
        {children}
      </main>
      <Box component={"footer"} sx={footerStyle}>
        &copy; 2022, BarCom
      </Box>
    </>
  )
}

export default Layout
