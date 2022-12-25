import React, { useEffect, useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ProductCard from "../ProductCard/ProductCard"
import { getProductsBySection, Product } from "../../api/products"
import { blue } from "@mui/material/colors"
import { MenuOpen } from "@mui/icons-material"


type Props = {
  name: string
  products: Product[]
}

const ProductSection = ({ name, products }: Props) => {
  return (
    <Accordion sx={{
      marginY: 6,
      marginX: 2,
      boxShadow: "none",
      border: "none",
      backgroundColor: blue[500],
      color: "white"
    }}>
      <AccordionSummary>
        <MenuOpen/>
        <Typography>
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {products.map((p, i) => <ProductCard key={i} product={p}/>)}
      </AccordionDetails>
    </Accordion>
  )
}


const ProductSelect = () => {
  const [products, setProducts] = useState<any>({})

  useEffect(() => {
    return () => {
      const getData = async () => {
        const data = await getProductsBySection()
        setProducts(data)
      }
      getData()
    }
  }, [])


  return (
    <div>
      {Object.keys(products).map((sectionName, i) =>
        <ProductSection name={sectionName} products={products[sectionName]}/>
      )
      }
    </div>
  )
}

export default ProductSelect
