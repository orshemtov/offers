import * as React from "react"
import { Box, Button, TextField } from "@mui/material"
import Switch from "@mui/material/Switch"


type Props = {};
export const Offer = (props: Props) => {
  const logo = "logoUrl"

  const [checked, setChecked] = React.useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Box display={"flex"} flexDirection={"column"}>
      {logo}
      <TextField variant={"outlined"} label={"Date"}/>

      To

      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      {/*New Client*/}
      <TextField label={"Name"}/>
      <TextField label={"Address"}/>
      <TextField label={"Phone"}/>
      <TextField label={"Email"}/>

      <select>
        <option>Client 1</option>
        <option>Client 2</option>
        <option>Client 3</option>
      </select>

      <TextField variant={"outlined"} label={"Title"}/>

      <TextField variant={"outlined"} label={"Content"} multiline rows={4}/>

      {/*Will become drag and drop*/}
      <TextField variant={"outlined"} label={"Items"}/>

      <Button variant={"contained"}>
        Export
      </Button>
    </Box>
  )
}