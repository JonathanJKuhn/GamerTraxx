import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

const DetailsBody = () => {
  return (
    <Container className='py-2' style={{backgroundColor: '#aaaaaa'}}>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Genre:</p>
            </Col>
            <Col>
                <p className='mb-0'>Adventure, Role-playing (RPG)</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Platforms:</p>
            </Col>
            <Col>
                <p className='mb-0'>PlayStation 3, Xbox 360, PC</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Publisher:</p>
            </Col>
            <Col>
                <p className='mb-0'>Electronic Arts</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Developers:</p>
            </Col>
            <Col>
                <p>FromSoftware</p>
            </Col>
        </Row>
        <Row className='mb-3 px-3'>
            <p>An action RPG and spiritual sequel to Demon's Souls in which the player embodies the Chosen Undead, who is tasked with fulfilling an ancient prophecy by ringing the Bells of Awakening in the dark fantasy setting of Lordran, an open world with intricate areas full of beasts, former humans gone hollow, and magical abominations whom the player must overcome in challenging and unforgiving combat.</p>
        </Row>
        <Row className='mb-4'>
            <Col>
                <img className="d-block mx-auto" src='https://via.placeholder.com/300x200' alt='game video'/>
            </Col>
        </Row>
        <Row>

            <Carousel>
            <Carousel.Item>
                    <img
                    className="d-block mx-auto"
                    src="https://via.placeholder.com/300x200"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block mx-auto"
                    src="https://picsum.photos/300/200"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block mx-auto"
                    src="https://picsum.photos/300/200?blur=1"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Row>
    </Container>
  )
}

export default DetailsBody