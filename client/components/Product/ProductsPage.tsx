import { Search } from "@mui/icons-material";
import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "../../models/product";
import NewItemDialog from "../Dialog/NewItemDialog";
import Layout from "../Layout/Layout";
import NewProduct from "./NewProduct";
import { ProductCard } from "./ProductCard";

type Props = {};

const ProductsPage = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cat = ["cameras", "alarm system"];
    setCategories(cat);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Layout>
      <NewItemDialog>
        <NewProduct />
      </NewItemDialog>
      <Search />
      {categories.map((c, i) => {
        return (
          <Box key={i}>
            <Typography variant={"h3"}>{c}</Typography>
            <Grid container rowSpacing={4}>
              {products.map((p, i) => {
                return (
                  <Grid key={i} item xs={4}>
                    <ProductCard product={p} />
                  </Grid>
                );
                1;
              })}
            </Grid>
          </Box>
        );
      })}
    </Layout>
  );
};

export default ProductsPage;
