import { Delete } from "@mui/icons-material";
import { Button, Sheet } from "@mui/joy";
import { IconButton, Modal, Typography } from "@mui/material";
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
      <Modal
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
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            backgroundColor: "white",
            color: "black",
            p: 3,
          }}
        >
          <Typography>Are you sure?</Typography>
          <Button>Yes</Button>
          <Button>Cancel</Button>
        </Sheet>
      </Modal>
    </IconButton>
  );
};

export default DeleteDialog;
