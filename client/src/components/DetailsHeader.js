import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const DetailsHeader = (props) => {
    const { game } = props
    let isLoaded = false
    if(game.cover !== undefined) {
        isLoaded = true
    }


  return (
    <>
    {isLoaded && (
    <Container style={{backgroundColor: '#454749', color: '#fff'}}>
        <Row>
            <Col md="8">
            </Col>
            <Col md="4" className='d-flex justify-content-end'>
                <Button variant='primary' className='mt-2'>Add to Collection</Button>
            </Col>
        </Row>
        <Row>
            <Col md="2" style={{position: 'relative'}}>
                <img src={game.cover} alt='game cover' className='mt-2 ms-1' style={{borderRadius: '50%', position: 'absolute', bottom: '-45px'}}/>
            </Col>
            <Col md="10">
                <Row style={{marginTop: '25px'}}>
                    <h4>{game.name}</h4>
                </Row>
            </Col>
        </Row>
    </Container>
    )}
    </>
  )
}

export default DetailsHeader