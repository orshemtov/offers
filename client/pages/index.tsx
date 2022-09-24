import type { NextPage } from "next"
import { Box, Container } from "@mui/material"
import { Topbar } from "../components/Topbar/Topbar"
import { Footer } from "../components/Footer/Footer"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Rightbar } from "../components/Rightbar/Rightbar"
import { Content } from "../components/Content/Content"

const Home: NextPage = () => {
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

export default Home
