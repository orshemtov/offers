import { ShortText } from "@mui/icons-material";
import { Box, Fab, TextField } from "@mui/material";
import React, { useState } from "react";

export const Content = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingTop={4}
    >
      <TextField
        variant={"outlined"}
        value={content}
        onChange={handleContentChange}
        multiline
        rows={5}
        fullWidth
        sx={{ p: 4 }}
      />
    </Box>
  );
};
