import React, { useState} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import GameList from '../components/GameList'
import GameDetails from '../components/GameDetails'

const Home = () => {
    const [searchResults, setSearchResults] = useState([])
    const [selectedGame, setSelectedGame] = useState()

    const searchIGDB = (searchParam) => {
        axios.get(`http://localhost:8000/api/v1/search-igdb/${searchParam}`)
        .then(res => {
            setSearchResults(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div style={{backgroundColor: '#0F1113'}}>
        <Header view='home' />
        <SearchBar onSubmitProp={searchIGDB} />
        <Container>
            <Row>
                <Col>
                    <GameList searchResults={searchResults} setSelectedGame={setSelectedGame}/>
                </Col>
                <Col>
                    <GameDetails view='home' selectedGame={selectedGame}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home