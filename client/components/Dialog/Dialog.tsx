import { Sheet } from "@mui/joy";
import { IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  icon: any;
  color:
    | "default"
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
};

const Dialog = ({ icon, color }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <IconButton color={color} onClick={handleClick}>
      {icon}
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
          {/* TODO: Dynamic Form Data */}
          <Typography>Hello</Typography>
        </Sheet>
      </Modal>
    </IconButton>
  );
};

export default Dialog;
