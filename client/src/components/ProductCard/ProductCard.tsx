import React from "react"
import { Avatar, Button, Card, CardActions, CardHeader } from "@mui/material"
import { Airlines } from "@mui/icons-material"
import { blue, grey } from "@mui/material/colors"

const cardStyle = {
  border: "none",
  boxShadow: "none",
  width: 300,
  backgroundColor: grey[300],
  borderRadius: 5
}

const ProductCard = () => {
  return (
    <Card sx={cardStyle}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: blue[500] }}><Airlines/>
          </Avatar>}
        title={"product name"}
      />
      <CardActions>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
