import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Fab,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "../../../models/product";
import ProductsTable from "./ProductsTable";

export const Products = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cat = ["cameras", "alarm system"];
    setCategories(cat);
  }, []);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {categories.map((cat, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{cat}</Typography>
            </AccordionSummary>
            <Box sx={{ p: 4 }}>
              <ProductsTable products={products} />
            </Box>
          </Accordion>
        );
      })}
    </Box>
  );
};
