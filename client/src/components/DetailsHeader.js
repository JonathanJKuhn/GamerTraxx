import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const DetailsHeader = (props) => {
    const { game, view } = props
    let isLoaded = false
    if(game.cover !== undefined) {
        isLoaded = true
    }


  return (
    <>
    {isLoaded && (
    <Container style={{backgroundColor: '#454749', color: '#fff'}}>
        <Row>
                {view === 'home' && (
                    <>
                        <Col md="8">
                        </Col>
                        <Col md="4" className='d-flex justify-content-end'>
                            <Button variant='primary' className='mt-2'>Add to Collection</Button>
                        </Col>
                    </>
                )}
                {view === 'my-games' && (
                    <>
                        <Col md="6">
                        </Col>
                        <Col md="1" className='d-flex justify-content-end'>
                            <Button variant='primary' className='mt-2'><FontAwesomeIcon icon={fasHeart} /></Button>
                        </Col>
                        <Col md="4" className='d-flex justify-content-end'>
                            <Form.Select className='mt-2'>
                                <option defaultValue>Play Status</option>
                                <option value="1">Not Started</option>
                                <option value="2">In Progress</option>
                                <option value="3">Completed</option>
                            </Form.Select>
                        </Col>
                        <Col md="1" className='d-flex justify-content-end'>
                            <Button variant='danger' className='mt-2'><FontAwesomeIcon icon={faTrash} /></Button>
                        </Col>
                    </>
                )}
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