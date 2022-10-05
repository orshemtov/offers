import { Add } from "@mui/icons-material";
import { Button, Sheet } from "@mui/joy";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  children: any;
};

const NewItemDialog = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Fab color="primary" onClick={handleClick}>
        <Add />
      </Fab>
      <Dialog
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>
          <Typography>New Item</Typography>
        </DialogTitle>

        <DialogContent>{props.children}</DialogContent>

        <DialogActions>
          <Button>OK</Button>
          <Button>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewItemDialog;
