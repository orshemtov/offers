import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import NewItemDialog from "../components/Dialog/NewItemDialog";
import Layout from "../components/Layout/Layout";
import NewProduct from "../components/Product/NewProduct";
import { ProductCard } from "../components/Product/ProductCard";
import Search from "../components/Search/Search";
import { createData } from "../data/products";
import { Product } from "../models/product";

const ProductsPage: NextPage = () => {
  const categories = ["cameras", "alarm system"];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(createData());
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
