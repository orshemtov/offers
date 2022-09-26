import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Product from "../../models/Product";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Card sx={{ minWidth: 275, boxShadow: "none", border: "1px solid black" }}>
      <CardHeader
        title={product.name}
        avatar={<Avatar src={product.image} />}
      />
      <Box display={"flex"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
          justifyContent={"space-between"}
        >
          <CardContent>
            <Typography variant={"body1"}>{product.description}</Typography>
            <Typography fontWeight={700}>${product.price}</Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}
