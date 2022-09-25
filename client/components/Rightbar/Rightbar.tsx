import * as React from "react"
import { Box } from "@mui/material"

type Props = {};

export function Rightbar(props: Props) {
  return (
    <Box bgcolor={"pink"} height={`${100 - 7}vh`}>
      Rightbar
    </Box>
  )
}