import React from "react"
import { Box } from "@mui/material"
import ProductSelect from "../../components/ProductSelect/ProductSelect"
import ClientPage from "../clientPage/ClientPage"

const OfferPage = () => {
  return (
    <Box display={"flex"}>
      <Box flex={0.8}>
        <ClientPage/>
      </Box>
      <Box flex={0.2}>
        <ProductSelect/>
      </Box>
    </Box>
  )
}

export default OfferPage
