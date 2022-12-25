import React from "react"
import "./App.css"
import { Box } from "@mui/material"
import ProductSelect from "./components/ProductSelect/ProductSelect"


function App() {
  return (
    <Box display={"flex"}>
      <Box flex={0.8}>

      </Box>
      <Box flex={0.2}>
        <ProductSelect/>
      </Box>
    </Box>
  )
}

export default App
