import { Add } from "@mui/icons-material"
import { Button } from "@mui/joy"
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import styles from "../../styles/NewProductDialog.module.css"

type Props = {};

const NewItemDialog = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>()
  const [make, setMake] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [image, setImage] = useState<string>()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleMakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMake(e.target.value)
  }
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value)
  }

  const handleSubmit = () => {
    const product = {
      name: name,
      make: make,
      description: description,
      price: price,
      image: image
    }
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <Box>
      <Fab color="primary" onClick={handleOpen}>
        <Add/>
      </Fab>
      <Dialog
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <DialogTitle>
          <Typography>New Product</Typography>
        </DialogTitle>
        <DialogContent>
          <Box>
            <TextField className={styles.textInput} label={"Name"} value={name} onChange={handleNameChange}/>
            <TextField className={styles.textInput} label={"Make"} value={make} onChange={handleMakeChange}/>
            <TextField className={styles.textInput} label={"Description"} value={description}
                       onChange={handleDescriptionChange}/>
            <TextField className={styles.textInput} label={"Price"} value={price} onChange={handlePriceChange}/>
            <TextField className={styles.textInput} label={"Image"} value={image} onChange={handleImageChange}/>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>OK</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default NewItemDialog
