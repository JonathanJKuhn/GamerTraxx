import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

const DetailsBody = (props) => {
    const { game } = props
    let isLoaded = false
    if(game.genres !== undefined) {
        isLoaded = true
    }

  return (
    <>
    {isLoaded && (
        <Container className='py-2' style={{backgroundColor: '#aaaaaa'}}>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Genre:</p>
            </Col>
            <Col>
                <p className='mb-0'>{
                    game.genres.map((genre, i) => {
                        return <span key={i}>{genre.name}, </span>
                    })
                }</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Platforms:</p>
            </Col>
            <Col>
                <p className='mb-0'>{
                    game.platforms.map((platform, i) => {
                        return <span key={i}>{platform.name}, </span>
                    })
                }</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Publisher:</p>
            </Col>
            <Col>
                <p className='mb-0'>{
                    game.involved_companies.map((company, i) => {
                        if(company.publisher === true) {
                            return <span key={i}>{company.name}, </span>
                        }
                    })
                }</p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "2", offset: "3"}}>
                <p className='mb-0'>Developers:</p>
            </Col>
            <Col>
                <p>{
                    game.involved_companies.map((company, i) => {
                        if(company.developer === true) {
                            return <span key={i}>{company.name}, </span>
                        }
                    })       
                }</p>
            </Col>
        </Row>
        <Row className='mb-3 px-3'>
            <p>{game.summary}</p>
        </Row>
        <Row className='mb-4'>
            <Col>
                <img className="d-block mx-auto" src='https://via.placeholder.com/300x200' alt='game video'/>
            </Col>
        </Row>
        <Row>

            <Carousel>
                {
                    game.screenshots.map((screenshot, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <img
                                className="d-block mx-auto"
                                src={screenshot.url}
                                alt={`Slide ${i+1}`}
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Row>
    </Container>
    )}
    </>
  )
}

export default DetailsBody