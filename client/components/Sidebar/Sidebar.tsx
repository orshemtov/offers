import * as React from "react";
import { Box, Card, List, Stack } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

type Props = {};

export function Sidebar(props: Props) {
  const defaultCategories = ["Cameras", "DVRs", "Switches", "Routers"];
  const [categories, setCategories] = useState<string[]>(defaultCategories);

  const products = [
    {
      name: "Item 1",
      description: "Desc",
      price: 100,
      image:
        "https://images.thdstatic.com/productImages/220c5202-95f9-4bc4-80ae-875c28f99fc0/svn/white-google-smart-security-cameras-ga01317-us-64_600.jpg",
    },
    {
      name: "Item 2",
      description: "Desc 2",
      price: 200,
      image:
        "https://images.thdstatic.com/productImages/220c5202-95f9-4bc4-80ae-875c28f99fc0/svn/white-google-smart-security-cameras-ga01317-us-64_600.jpg",
    },
  ];

  return (
    <Box>
      {categories.map((category, i) => {
        return (
          <Accordion key={i} sx={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {products.map((p, i) => (
                  <ProductCard key={i} product={p} />
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
