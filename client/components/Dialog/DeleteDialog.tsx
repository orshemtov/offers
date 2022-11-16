import { Delete } from "@mui/icons-material";
import { Button } from "@mui/joy";
import {
  IconButton,
  Dialog,
  Typography,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

type Props = {};

const DeleteDialog = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <IconButton color={"error"} onClick={handleClick}>
      <Delete />
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
          <Typography>Are you sure?</Typography>
        </DialogTitle>
        <DialogActions>
          <Button>Yes</Button>
          <Button>Cancel</Button>
        </DialogActions>
      </Dialog>
    </IconButton>
  );
};

export default DeleteDialog;
