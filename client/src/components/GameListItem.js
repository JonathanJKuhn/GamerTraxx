import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const GameListItem = (props) => {
    const { game, setSelectedGame } = props

  return (
    <div onClick={()=> setSelectedGame(game.id)}>
    <Container className='my-2' style={{backgroundColor: '#fcf5f5'}} >
        <Row>
        <Col md="2">
            <img src={game.cover.url} alt='game cover' className='my-1' style={{borderRadius: '50%'}}/>
        </Col>
        <Col>
            <Row className='mt-3'>
                <h4>{game.name}</h4>
            </Row>
            <Row>
                <p>Release Date: {!!game.first_release_date.date?game.first_release_date.date:'Not Available'}</p>
            </Row>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default GameListItem