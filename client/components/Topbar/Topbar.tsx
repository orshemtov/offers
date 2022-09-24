import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Business } from "@mui/icons-material"


type Props = {};

export function Topbar(props: Props) {
  // const pages: string[] = []
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Business
            sx={{ display: "flex", mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "JetBrains Mono",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            BarCom
          </Typography>
          {/*<Box sx={{ flexGrow: 1, display: "flex" }}>*/}
          {/*  {pages.map((page) => (*/}
          {/*    <Button*/}
          {/*      key={page}*/}
          {/*      sx={{ my: 2, color: "white", display: "block" }}*/}
          {/*    >*/}
          {/*      {page}*/}
          {/*    </Button>*/}
          {/*  ))}*/}
          {/*</Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  )
}