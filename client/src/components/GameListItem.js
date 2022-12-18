import React from 'react'
import styles from './GameListItem.module.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const GameListItem = (props) => {
    const { game, setSelectedGame } = props

    const handleGameClick = (e) => {
        setSelectedGame(game.id)
    }

  return (
    <div onClick={(e)=>handleGameClick(e.target.value)}>
    <Container className={styles.item}>
        <Row>
        <Col md="2 justify-content-center d-flex align-items-center">
            <img src={game.cover.url} alt='game cover' className='' style={{borderRadius: '50%', width: '65px', height: '65px'}}/>
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