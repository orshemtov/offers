import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Receiver = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"left"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"left"}
        justifyContent={"center"}
      >
        <Typography fontWeight={700} sx={{ paddingBottom: 2 }}>
          To
        </Typography>
        <TextField
          variant={"outlined"}
          label={"Name"}
          value={name}
          onChange={handleNameChange}
          sx={{ paddingBottom: 2 }}
        />
        <TextField
          variant={"outlined"}
          label={"Address"}
          value={address}
          onChange={handleAddressChange}
          sx={{ paddingBottom: 2 }}
        />
        <TextField
          variant={"outlined"}
          label={"Phone"}
          value={phone}
          onChange={handlePhoneChange}
          sx={{ paddingBottom: 2 }}
        />
        <TextField
          variant={"outlined"}
          label={"Email"}
          value={email}
          onChange={handleEmailChange}
          sx={{ paddingBottom: 2 }}
        />
      </Box>
    </Box>
  );
};
