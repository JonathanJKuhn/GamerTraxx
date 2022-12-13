import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import GameList from '../components/GameList'
import GameDetails from '../components/GameDetails'

const Home = () => {
  return (
    <div>
        <Header />
        <SearchBar />
        <Container>
            <Row>
                <Col>
                    <GameList />
                </Col>
                <Col>
                    <GameDetails />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home