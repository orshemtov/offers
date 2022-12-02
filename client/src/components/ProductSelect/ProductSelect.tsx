import React from "react"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ProductCard from "../ProductCard/ProductCard"

type Props = {
  name: string
}

const ProductSection = ({ name }: Props) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </AccordionDetails>
    </Accordion>
  )
}

const ProductSelect = () => {
  const sections = ["cameras", "network"]
  return (
    <div>
      {sections.map((section, i) => <ProductSection key={i} name={section}/>)}
    </div>
  )
}

export default ProductSelect
