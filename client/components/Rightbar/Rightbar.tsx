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

export function Rightbar(props: Props) {
  const defaultCategories = ["Cameras", "DVRs", "Switches", "Routers"];
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const p = { name: "Item 1", description: "Desc", price: 100, image: "s3://" };

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
                <ProductCard product={p} />
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
