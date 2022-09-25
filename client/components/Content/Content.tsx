import * as React from "react"
import { Box } from "@mui/material"
import { OfferProductsTable } from "../OfferProductsTable/OfferProductsTable"

type Props = {};

export function Content(props: Props) {
  return (
    <Box>
      <OfferProductsTable/>
    </Box>
  )
}