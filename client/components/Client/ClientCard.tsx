import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { CardActions, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import { Client } from "../../models/client";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditDialog from "../Dialog/EditDialog";

type Props = {
  client: Client;
};

const ClientCard = ({ client }: Props) => {
  return (
    <Card sx={{ maxWidth: 365, boxShadow: "none", border: "1px solid black" }}>
      <CardHeader
        title={client.name}
        avatar={<Avatar src={""} />}
        subheader={client.company}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
      />
      <CardContent>
        <Typography>{client.phone}</Typography>
        <Typography>{client.email}</Typography>
        <Typography>{client.address}</Typography>
      </CardContent>
      <CardActions>
        <Button>New Offer</Button>
        <Button>Past Offers</Button>
        <DeleteDialog />
        <EditDialog />
      </CardActions>
    </Card>
  );
};

export default ClientCard;
