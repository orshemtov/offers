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
import { Actions } from "./components/Actions";
import { Content } from "./components/Content";
import { Logo } from "./components/Logo";
import { Notes } from "./components/Notes";
import { Products } from "./components/Products";
import { Receiver } from "./components/Receiver";
import { Subject } from "./components/Subject";

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
