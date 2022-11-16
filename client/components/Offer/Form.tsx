import { FormatListBulleted, Note, ShortText } from "@mui/icons-material"
import { Card, CardContent, SpeedDial, SpeedDialAction, SpeedDialIcon, TextField } from "@mui/material"
import React from "react"
import { Actions } from "./components/Actions"
import { Content } from "./components/Content"
import { Logo } from "./components/Logo"
import { Notes } from "./components/Notes"
import { Products } from "./components/Products"
import { Receiver } from "./components/Receiver"
import { Subject } from "./components/Subject"
import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

const actions = [
  { icon: <FormatListBulleted/>, name: "Category" },
  { icon: <ShortText/>, name: "Text" },
  { icon: <Note/>, name: "Note" }
]

type Props = {};

export const OfferForm = (props: Props) => {
  const initialValue = dayjs(new Date().toLocaleDateString())
  const [value, setValue] = React.useState<Dayjs | null>(initialValue)

  return (
    <Card>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Logo/>
        <Receiver/>
        <Subject/>
        <Content/>
        <Products/>
        <Notes/>
      </CardContent>
      <Actions/>
      <SpeedDial
        icon={<SpeedDialIcon/>}
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
  )
}

export default OfferForm
