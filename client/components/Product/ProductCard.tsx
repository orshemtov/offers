import {MoreVert} from "@mui/icons-material";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import {Product} from "../../models/product";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditDialog from "../Dialog/EditDialog";

type Props = {
    product: Product;
};

export function ProductCard({product}: Props) {
    return (
        <Card sx={{maxWidth: 365, boxShadow: "none", border: "1px solid black"}}>
            <CardHeader
                title={product.name}
                subheader={product.make}
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant={"body1"}>{product.description}</Typography>
                <Typography variant={"body1"}>{product.price}</Typography>
            </CardContent>
            <CardMedia>
                <Box component={"img"} src={product.image} width={"100%"}/>
            </CardMedia>
            <CardActions>
                <DeleteDialog/>
                <EditDialog/>
            </CardActions>
        </Card>
    );
}
