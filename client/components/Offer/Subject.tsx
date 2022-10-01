import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

export const Subject = () => {
  const [subject, setSubject] = useState<string>("");

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
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
        label={"Subject"}
        value={subject}
        onChange={handleSubjectChange}
        sx={{ width: 500 }}
      />
    </Box>
  );
};
