import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import { CardActions, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import Client from "../../models/Client";

type Props = {
  client: Client;
};

const Client = ({ client }: Props) => {
  return (
    <Card>
      <CardHeader title={client.name} avatar={<Avatar src={""} />} />
      <CardMedia>
        <img src={""} alt="logo" />
      </CardMedia>
      <CardContent>
        <Typography>{client.phone}</Typography>
        <Typography>{client.email}</Typography>
        <Typography>{client.address}</Typography>
      </CardContent>
      <CardActions>
        <Button>New Offer</Button>
        <Button>Past Offers</Button>
      </CardActions>
    </Card>
  );
};

export default Client;
