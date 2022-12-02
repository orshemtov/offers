import React, { useState } from "react"
import { Box, Button, Modal } from "@mui/material"

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}

const NewOffer = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClick}>New Offer</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
        </Box>
      </Modal>
    </div>
  )
}

export default NewOffer
