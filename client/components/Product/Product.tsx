import * as React from "react"
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import Product from "../../models/Product"

type Props = {
  product: Product,
};

export function Product({ product }: Props) {
  return (
    <Box>
      <Card>
        <CardHeader title={product.name}/>
        <CardContent>
          <Typography variant={"h5"}>
            {product.description}
          </Typography>
        </CardContent>
        <CardMedia
          component={"img"}
          alt={"item"}
          height={250}
          image={product.image}
        />
        <CardContent>
          <Button>${product.price}</Button>
        </CardContent>
      </Card>
    </Box>
  )
}