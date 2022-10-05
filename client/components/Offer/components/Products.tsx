import { ExpandMore, FormatListBulleted } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Fab,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createData, ProductRow } from "../../data/products";
import ProductsTable from "../Product/ProductsTable";

export const Products = () => {
  const categories = ["cameras", "alarm system"];

  const [products, setProducts] = useState<ProductRow[]>([]);

  useEffect(() => {
    setProducts(createData());
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {categories.map((c, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{c}</Typography>
            </AccordionSummary>
            <Box sx={{ p: 4 }}>
              <ProductsTable rows={products} />
            </Box>
          </Accordion>
        );
      })}
    </Box>
  );
};
