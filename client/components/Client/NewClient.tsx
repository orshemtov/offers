import { Add } from "@mui/icons-material";
import { Box, Button, Fab, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { Client } from "../../models/client";

type Props = {};

const NewClient = (props: Props) => {
  const [name, setName] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box>
      <TextField label={"Name"} value={name} onChange={handleNameChange} />
      <TextField
        label={"Company"}
        value={company}
        onChange={handleCompanyChange}
      />
      <TextField
        label={"Address"}
        value={address}
        onChange={handleAddressChange}
      />
      <TextField label={"Phone"} value={phone} onChange={handlePhoneChange} />
      <TextField label={"Email"} value={email} onChange={handleEmailChange} />
    </Box>
  );
};

export default NewClient;
