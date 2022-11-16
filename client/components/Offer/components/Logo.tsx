import { Box } from "@mui/material"
import React from "react"

export const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1920px-NASA_logo.svg.png"

export const Logo = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingY={6}
    >
      <Box component={"img"} src={logo} alt={"logo"} width={150}/>
    </Box>
  )
}
