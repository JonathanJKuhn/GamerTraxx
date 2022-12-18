import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Header from '../components/Header'
import GameList from '../components/GameList'
import GameDetails from '../components/GameDetails'

const MyGames = () => {
    const [searchResults, setSearchResults] = useState([])
    const [selectedGame, setSelectedGame] = useState()

    useEffect(() => {
        getCollection()
    }, [])

    const getCollection = () => {
        axios.get('http://localhost:8000/api/v1/my-games')
        .then(res => {
                setSearchResults(res.data)
                setSelectedGame(undefined)
            })
        .catch(err => {
                console.log(err)
            })
    }


  return (
    <div style={{backgroundColor: '#0F1113'}}>
        <Header view='my-games' />
        <Container>
            <Row className='mt-5'>
                <Col>
                    <GameList searchResults={searchResults} setSelectedGame={setSelectedGame}/>
                </Col>
                <Col>
                    <GameDetails view='my-games' selectedGame={selectedGame} setSelectedGame={setSelectedGame} setSearchResults={setSearchResults} getCollection={getCollection} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MyGames