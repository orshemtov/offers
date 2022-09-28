import { Edit } from "@mui/icons-material";
import { Sheet } from "@mui/joy";
import { IconButton, Modal, Typography } from "@mui/material";
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
          <Typography>Editting...</Typography>
        </Sheet>
      </Modal>
    </IconButton>
  );
};

export default EditDialog;
