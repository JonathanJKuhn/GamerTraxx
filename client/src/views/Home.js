import React from 'react'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import GameList from '../components/GameList'
import GameDetails from '../components/GameDetails'

const Home = () => {
  return (
    <div>
        <Nav />
        <SearchBar />
        <Container maxWidth="lg">
            <Grid2 container spacing={2} display='flex' justifyContent='center'>
                <Grid2 item xs={12} sm={6} md={4} lg={3}>
                    <GameList />
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4} lg={3}>
                    <GameDetails />
                </Grid2>
            </Grid2>
        </Container>
    </div>
  )
}

export default Home