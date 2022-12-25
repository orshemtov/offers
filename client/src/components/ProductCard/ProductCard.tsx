import React from "react"
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { Airlines, CurrencyExchange } from "@mui/icons-material"
import { blue, grey } from "@mui/material/colors"
import { Product } from "../../api/products"

const cardStyle = {
  border: "none",
  boxShadow: "none",
  width: 300,
  backgroundColor: grey[300],
  borderRadius: 5,
  margin: 2
}

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card sx={cardStyle}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: blue[500] }}>
            <Airlines/>
          </Avatar>}
        title={product.name}
        subheader={product.make}
      />
      <CardContent>
        <Typography>
          {product.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CurrencyExchange/>
          <Box width={4}/>
          <Typography fontWeight={700}>
            {product.price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
