import * as React from "react"
import { Topbar } from "../Topbar/Topbar"
import { Box, Container } from "@mui/material"
import { Sidebar } from "../Sidebar/Sidebar"
import { Content } from "../Content/Content"
import { Rightbar } from "../Rightbar/Rightbar"
import { Footer } from "../Footer/Footer"

type Props = {};

export function MainPage(props: Props) {
  return (
    <Container maxWidth={"xl"}>
      <Topbar/>
      <Box display={"flex"}>
        <Box flex={2}>
          <Sidebar/>
        </Box>
        <Box flex={8}>
          <Content/>
        </Box>
        <Box flex={2}>
          <Rightbar/>
        </Box>
      </Box>
      <Footer/>
    </Container>
  )
}