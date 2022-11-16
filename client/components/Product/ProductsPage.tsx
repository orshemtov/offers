import { Box, Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Product } from "../../models/product"
import Search from "../Search/Search"
import { ProductCard } from "./ProductCard"
import NewProductDialog from "./NewProductDialog"
import styles from "../../styles/ProductsPage.module.css"


type Props = {};

const ProductsPage = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const cat = ["cameras", "alarm system"]
    setCategories(cat)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <Box>
      <div className={styles.newItemDialog}>
        <NewProductDialog/>
      </div>
      <Search/>
      {categories.map((c, i) => {
        return (
          <Box key={i}>
            <Typography variant={"h3"}>{c}</Typography>
            <Grid container rowSpacing={4}>
              {products.map((p, i) => {
                return (
                  <Grid key={i} item xs={4}>
                    <ProductCard product={p}/>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        )
      })}
    </Box>
  )
}

export default ProductsPage
