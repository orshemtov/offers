import * as React from "react"
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import Product from "../../models/Product"

type Props = {
  product: Product,
};

export function Product({ product }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={product.name}/>
      <Box display={"flex"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"left"} justifyContent={"space-between"}>
          <CardContent>
            <Typography variant={"h5"}>
              {product.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Button>${product.price}</Button>
          </CardContent>
        </Box>
        <Box display={"flex"}>
          <CardMedia
            component={"img"}
            alt={"item"}
            height={250}
            image={product.image}
          />
        </Box>
      </Box>
    </Card>
  )
}