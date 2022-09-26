import * as React from "react";
import { Box, Button, ButtonGroup, List } from "@mui/material";

type Props = {};

export function Sidebar(props: Props) {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <List>
        <Button variant={"contained"} sx={{ marginY: 2 }}>
          Export to PDF
        </Button>
        <Button variant={"contained"} sx={{ marginY: 2 }}>
          Export to Excel
        </Button>
        <Button variant={"contained"} sx={{ marginY: 2 }}>
          Export to Word
        </Button>
      </List>
    </Box>
  );
}
