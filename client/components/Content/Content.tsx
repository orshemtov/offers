import * as React from "react";
import { Box } from "@mui/material";
import { OfferForm } from "../OfferForm/OfferForm";

type Props = {};

export function Content(props: Props) {
  return (
    <Box>
      <OfferForm />
    </Box>
  );
}
