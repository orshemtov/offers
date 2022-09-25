import { Add, Delete, Edit } from "@mui/icons-material";
import Sheet from "@mui/joy/Sheet";
import {
  Avatar,
  Box,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createData, Row, Rows } from "../../data/fake_products";
import Offer from "../../models/Offer";

type DialogProps = {
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

const Dialog = ({ icon, color }: DialogProps) => {
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

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1920px-NASA_logo.svg.png";

type TableProps = {
  rows: Rows;
};

function ProductsTable({ rows }: TableProps) {
  const calculateTotal = (rows: Rows): number => {
    let sum = 0;
    for (const row of rows) {
      sum += row.price * row.quantity;
    }
    return sum;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Avatar src={row.image} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price * row.quantity}</TableCell>
              <TableCell align="right">
                <Dialog icon={<Delete />} color={"error"} />
                <Dialog icon={<Edit />} color={"primary"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right">{calculateTotal(rows)}</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}

type Props = {};

export const OfferForm = () => {
  const [offer, setOffer] = useState<Offer>();

  useEffect(() => {
    setOffer({
      date: "2022-04-27",
      to: {
        name: "John Scully",
        address: "HaOrev 21, Bat Yam, Israel",
        phone: "052-12314109",
        email: "o@o.com",
      },
      title: "Offer",
      content: "We hereby present this offer to you",
      products: createData(),
    });
  }, []);

  return (
    <div>
      {offer ? (
        <div>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            p={2}
          >
            <Typography fontWeight={700}>{offer.date}</Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingY={6}
          >
            <img src={logo} alt={"logo"} width={150} />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Box>
              <Typography fontWeight={700}>{"From"}</Typography>
              <Typography>{"BarCom"}</Typography>
              <Typography>{"HaCarmel 39, Bet Dagan, 50200, Israel"}</Typography>
              <Typography>{"0543258979"}</Typography>
              <Typography>{"or@or.com"}</Typography>
            </Box>
            <Box>
              <Typography fontWeight={700}>{"To"}</Typography>
              <Typography>{offer.to.name}</Typography>
              <Typography>{offer.to.address}</Typography>
              <Typography>{offer.to.phone}</Typography>
              <Typography>{offer.to.email}</Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography padding={4} fontWeight={700}>
              {offer.title}
            </Typography>
            <Typography padding={4}>{offer.content}</Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box sx={{ p: 4 }}>
              <ProductsTable rows={offer.products} />
              <Dialog icon={<Add />} color={"primary"} />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            p={6}
          >
            <Typography>Thank you!</Typography>
          </Box>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
