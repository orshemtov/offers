import { Add } from "@mui/icons-material"
import { Button } from "@mui/joy"
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import styles from "../../styles/NewClientDialog.module.css"

type Props = {};

const NewClientDialog = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value)
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    const client = {
      name: name,
      company: company,
      address: address,
      phone: phone,
      email: email
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
          <Typography>New Client</Typography>
        </DialogTitle>
        <DialogContent>
          <Box>
            <TextField className={styles.textInput} label={"Name"} value={name} onChange={handleNameChange}/>
            <TextField className={styles.textInput} label={"Company"} value={company} onChange={handleCompanyChange}/>
            <TextField className={styles.textInput} label={"Address"} value={address} onChange={handleAddressChange}/>
            <TextField className={styles.textInput} label={"Phone"} value={phone} onChange={handlePhoneChange}/>
            <TextField className={styles.textInput} label={"Email"} value={email} onChange={handleEmailChange}/>
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

export default NewClientDialog
