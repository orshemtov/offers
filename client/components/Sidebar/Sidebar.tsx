import * as React from "react";
import {
  alpha,
  Box,
  Card,
  InputBase,
  List,
  Stack,
  styled,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { ProductCard } from "../Product/ProductCard";
import { ProductRow, createData } from "../../data/products";
import Search from "../Search/Search";

type Props = {};

export function Sidebar(props: Props) {
  const defaultCategories = ["Cameras", "DVRs", "Switches", "Routers"];
  const [categories, setCategories] = useState<string[]>(defaultCategories);

  const [products, setProducts] = useState<ProductRow[]>([]);

  React.useEffect(() => {
    setProducts(createData());
  }, []);

  return (
    <Box>
      <Search />
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
