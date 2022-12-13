import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Container maxWidth="lg">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GAMERTRAXX
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">My GAMES</Button>
            </Toolbar>
        </Container>
        </AppBar>
    </Box>
  )
}

export default Nav