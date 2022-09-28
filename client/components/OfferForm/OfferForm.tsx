import { Print, Save } from "@mui/icons-material";
import { CardContent, IconButton } from "@mui/material";
import {
  Box,
  Button,
  Card,
  CardActions,
  TextField,
  Typography,
} from "@mui/material";
import { GridToolbarExport } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { createData, Rows } from "../../data/fake_products";
import ProductsTable from "../ProductsTable/ProductsTable";

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1920px-NASA_logo.svg.png";

type Props = {};

export const OfferForm = (props: Props) => {
  const [date, setDate] = useState<string>("");

  // From
  const [nameFrom, setNameFrom] = useState<string>("BarCom");
  const [addressFrom, setAddressFrom] = useState<string>(
    "HaCarmel 39, Bet Dagan, 50200, Israel"
  );
  const [phoneFrom, setPhoneFrom] = useState<string>("050-5758991");
  const [emailFrom, setEmailFrom] = useState<string>("barcom100@gmail.com");

  // To
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Content
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [products, setProducts] = useState<Rows>([]);
  const [summary, setSummary] = useState<string>("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  useEffect(() => {
    setProducts(createData());
  }, []);

  const handleNameFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFrom(e.target.value);
  };

  const handleAddressFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressFrom(e.target.value);
  };

  const handlePhoneFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneFrom(e.target.value);
  };

  const handleEmailFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFrom(e.target.value);
  };

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

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(e.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingY={6}
        >
          <Box component={"img"} src={logo} alt={"logo"} width={150} />
          <Typography fontWeight={700} paddingY={4}>
            {date}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            justifyContent={"center"}
          >
            <Typography fontWeight={700} sx={{ paddingBottom: 2 }}>
              From
            </Typography>
            <TextField
              variant={"outlined"}
              label={"Name"}
              value={nameFrom}
              onChange={handleNameFromChange}
              sx={{ paddingBottom: 2, width: 500 }}
            />
            <TextField
              variant={"outlined"}
              label={"Address"}
              value={addressFrom}
              onChange={handleAddressFromChange}
              sx={{ paddingBottom: 2, width: 500 }}
            />
            <TextField
              variant={"outlined"}
              label={"Phone"}
              value={phoneFrom}
              onChange={handlePhoneFromChange}
              sx={{ paddingBottom: 2, width: 500 }}
            />
            <TextField
              variant={"outlined"}
              label={"Email"}
              value={emailFrom}
              onChange={handleEmailFromChange}
              sx={{ paddingBottom: 2, width: 500 }}
            />
          </Box>
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={4}
        >
          <TextField
            variant={"outlined"}
            label={"Subject"}
            value={subject}
            onChange={handleSubjectChange}
            sx={{ width: 500 }}
          />
          <TextField
            variant={"outlined"}
            value={content}
            onChange={handleContentChange}
            multiline
            rows={5}
            fullWidth
            sx={{ p: 4 }}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box sx={{ p: 4 }}>
            <ProductsTable rows={products} />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={6}
        >
          <TextField
            variant={"outlined"}
            value={summary}
            onChange={handleSummaryChange}
            multiline
            rows={5}
            fullWidth
            sx={{ p: 4 }}
          />
        </Box>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton>
          <Save />
        </IconButton>
        <IconButton>
          <Print />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OfferForm;
