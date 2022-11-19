import React from "react"
import "./layout.css"
import { AppBar, Box, Container, Menu, Toolbar, Typography } from "@mui/material"
import { Adb } from "@mui/icons-material"

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <AppBar position={'static'}>
          <Container maxWidth={'xl'}>
            <Toolbar disableGutters>
              <Adb/>
              <Typography variant={'h6'} noWrap component={'a'} href={'/'}>
                BarCom
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main>
        {children}
      </main>
      <footer>
        &copy; 2022, BarCom
      </footer>
    </>
  )
}

export default Layout
