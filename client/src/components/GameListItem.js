import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const GameListItem = () => {
  return (
    <Container className='my-2' style={{backgroundColor: '#fcf5f5'}}>
        <Row>
        <Col md="2">
            <img src='https://via.placeholder.com/75' alt='game cover' className='mt-2' style={{borderRadius: '50%'}}/>
        </Col>
        <Col>
            <Row className='mt-3'>
                <h4>Game Title</h4>
            </Row>
            <Row>
                <p>Release Date: 9/22/2011</p>
            </Row>
        </Col>
        </Row>
    </Container>
  )
}

export default GameListItem