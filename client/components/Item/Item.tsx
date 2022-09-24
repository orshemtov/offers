import * as React from "react"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import Item from "../../models/Item"

type Props = {
  item: Item,
};

export function Item({ item }: Props) {
  return (
    <Box>
      <Card>
        <CardHeader title={item.name}/>
        <CardContent>
          <Typography variant={"h5"}>
            {item.description}
          </Typography>
        </CardContent>
        <CardMedia
          component={"img"}
          alt={"item"}
          height={250}
          image={item.image}
        />
        <CardActions>
          <Button>${item.price}</Button>
        </CardActions>
      </Card>
    </Box>
  )
}