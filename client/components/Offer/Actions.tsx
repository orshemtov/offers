import { Print, Save } from "@mui/icons-material";
import { CardActions, IconButton } from "@mui/material";
import React from "react";

export const Actions = () => {
  return (
    <CardActions
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton>
        <Save />
      </IconButton>
      <IconButton>
        <Print />
      </IconButton>
    </CardActions>
  );
};
