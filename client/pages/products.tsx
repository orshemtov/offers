import { Add } from "@mui/icons-material";
import { Fab, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { createData } from "../data/products";
import Product from "../types/Product";

const ProductsPage: NextPage = () => {
  const categories = ["cameras", "alarm system"];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(createData());
  }, []);

  return (
    <Layout>
      <Fab color="primary">
        <Add />
      </Fab>
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
