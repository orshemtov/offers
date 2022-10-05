import { Edit } from "@mui/icons-material";
import { Sheet } from "@mui/joy";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {};

const EditDialog = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <IconButton color={"primary"} onClick={handleClick}>
      <Edit />
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
          <Typography>Editting Item...</Typography>
        </DialogTitle>
      </Dialog>
    </IconButton>
  );
};

export default EditDialog;
