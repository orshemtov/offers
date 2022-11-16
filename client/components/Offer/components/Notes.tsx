import { Box, TextField } from "@mui/material"
import React, { useState } from "react"

export const Notes = () => {
  const [note, setNote] = useState<string>("")

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value)
  }

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} p={6}>
      <TextField
        variant={"outlined"}
        value={note}
        onChange={handleNoteChange}
        multiline
        rows={5}
        fullWidth
        sx={{ p: 4 }}
      />
    </Box>
  )
}
