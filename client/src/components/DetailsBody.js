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
        <Container className='py-2' style={{backgroundColor: '#1A1C1E', color: '#fff'}}>
        <Row>
            <Col md={{span: "3", offset: "2"}}>
                <p className='mb-0'>Release Date:</p>
            </Col>
            <Col>
                <p className='mb-0'>
                    {!!game.first_release_date.date?game.first_release_date.date:'Not Available'}
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={{span: "3", offset: "2"}}>
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
        {!!game.platforms && !!game.platforms[0].name && (
            <Row>
                <Col md={{span: "3", offset: "2"}}>
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
        )}
        {!!game.involved_companies && (
            <>
            <Row>
                <Col md={{span: "3", offset: "2"}}>
                    <p className='mb-0'>Publisher:</p>
                </Col>
                <Col>
                    <p className='mb-0'>{
                        // eslint-disable-next-line
                        game.involved_companies.map((company, i) => {
                            if(company.publisher === true) {
                                return <span key={i}>{company.name}, </span>
                            }
                        })
                    }</p>
                </Col>
            </Row>
            <Row>
                <Col md={{span: "3", offset: "2"}}>
                    <p className='mb-0'>Developers:</p>
                </Col>
                <Col>
                    <p>{
                        // eslint-disable-next-line
                        game.involved_companies.map((company, i) => {
                            if(company.developer === true) {
                                return <span key={i}>{company.name}, </span>
                            }
                        })       
                    }</p>
                </Col>
            </Row>
        </>
        )}
        <Row className='mb-3 px-3'>
            <p>{game.summary}</p>
        </Row>
        {!!game.videos && !!game.videos[0]
        ? <Row className='mb-4'>
            <Col className='text-center'>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${game.videos[0].video_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
        </Row>
        : null
        }
        {!!game.screenshots && !!game.screenshots[0]
            ? <Row>
                <Carousel>
                    {
                        game.screenshots.map((screenshot, i) => {
                            return (
                                <Carousel.Item key={i}>
                                    <img
                                    className="d-block mx-auto"
                                    src={screenshot.url}
                                    alt={`Slide ${i+1}`}
                                    height='315'
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Row>
        : null
        }
    </Container>
    )}
    </>
  )
}

export default DetailsBody