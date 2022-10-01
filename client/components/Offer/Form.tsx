import { FormatListBulleted, Note, ShortText } from "@mui/icons-material";
import {
  SpeedDial,
  Card,
  CardContent,
  SpeedDialIcon,
  Typography,
  SpeedDialAction,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Actions } from "./Actions";
import { Content } from "./Content";
import { Logo } from "./Logo";
import { Notes } from "./Notes";
import { Products } from "./Products";
import { Receiver } from "./Receiver";
import { Subject } from "./Subject";

const actions = [
  { icon: <FormatListBulleted />, name: "Category" },
  { icon: <ShortText />, name: "Text" },
  { icon: <Note />, name: "Note" },
];

type Props = {};

export const OfferForm = (props: Props) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography fontWeight={700} paddingY={4}>
          {date}
        </Typography>
        <Logo />
        <Receiver />
        <Subject />
        <Content />
        <Products />
        <Notes />
      </CardContent>
      <Actions />
      <SpeedDial
        icon={<SpeedDialIcon />}
        ariaLabel="speed-dial"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {actions.map((action, i) => (
          <SpeedDialAction
            key={i}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Card>
  );
};

export default OfferForm;
