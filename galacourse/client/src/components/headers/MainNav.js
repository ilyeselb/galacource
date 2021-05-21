import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const MainNav = () => {
    return (
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default MainNav