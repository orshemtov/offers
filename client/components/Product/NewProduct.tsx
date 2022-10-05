import { Add } from "@mui/icons-material";
import { Box, TextField, Button, Modal, Fab } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const NewProduct = (props: Props) => {
  const [name, setName] = useState<string>();
  const [make, setMake] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [image, setImage] = useState<string>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleMakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMake(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box>
      <TextField label={"Name"} value={name} onChange={handleNameChange} />
      <TextField label={"Make"} value={make} onChange={handleMakeChange} />
      <TextField
        label={"Description"}
        value={description}
        onChange={handleDescriptionChange}
      />
      <TextField label={"Price"} value={price} onChange={handlePriceChange} />
      <TextField label={"Image"} value={image} onChange={handleImageChange} />
    </Box>
  );
};

export default NewProduct;
