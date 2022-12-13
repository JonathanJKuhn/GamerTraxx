import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const DetailsHeader = () => {
  return (
    <Container style={{backgroundColor: '#fcf5f5'}}>
        <Row>
            <Col md="3">
                <img src='https://via.placeholder.com/125' alt='game cover' className='mt-2 ms-2' style={{borderRadius: '50%', position: 'relative', top: '65px'}}/>
            </Col>
            <Col md="5">
                <Row className='' style={{marginTop: '65px'}}>
                    <h4>Game Title</h4>
                </Row>
                <Row>
                    <p className='mb-0'>Release Date: 9/22/2011</p>
                </Row>
            </Col>
            <Col>
                <Button variant='primary' className='mt-2'>Add to Collection</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default DetailsHeader