import { Delete, Edit, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { Product } from "../../models/product";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 365, boxShadow: "none", border: "1px solid black" }}>
      <CardHeader
        title={product.name}
        subheader={product.make}
        avatar={<Avatar src={product.image} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant={"body1"}>{product.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Delete />
        </IconButton>
        <IconButton>
          <Edit />
        </IconButton>
      </CardActions>
    </Card>
  );
}
