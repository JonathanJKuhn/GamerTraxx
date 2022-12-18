import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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
    const { game, setGame, view, getCollection } = props
    const navigate = useNavigate()
    //eslint-disable-next-line
    let isLoaded = false
    if (game.cover !== undefined) {
        isLoaded = true
    }

    useEffect(() => {
        if(game.cover !== undefined) {
            //eslint-disable-next-line
            isLoaded = true
        }
    }, [game])

    const handleCreate = (game) => {
        axios.post(`/api/v1/my-games`, game)
        .then((res) => navigate('/my-games'))
        .catch((err) => console.log(err))
    }

    const handleStatusChange = (status) => {
        axios.patch(`/api/v1/my-games/${game.id}`, {play_status: status})
        .then((res) => setGame(res.data))
        .catch((err) => console.log(err))
    }    

    const handleLikeChange = (like) => {
        axios.patch(`/api/v1/my-games/${game.id}`, {like: like})
        .then((res) => setGame(res.data))
        .catch((err) => console.log(err))
    }

    const handleDelete = () => {
        axios.delete(`/api/v1/my-games/${game.id}`)
        .then((res) => getCollection())
        .catch((err) => console.log(err))
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
                            <Button variant='primary' className='mt-2' onClick={(e)=>handleCreate(game)}>Add to Collection</Button>
                        </Col>
                    </>
                )}
                {view === 'my-games' && (
                    <>
                        <Col md="6">
                        </Col>
                        <Col md="1" className='d-flex justify-content-end'>
                            <Button variant='primary' className='mt-2' value={game.like===true?false:true} onClick={(e)=>handleLikeChange(e.target.value)}>
                                {game.like === true ? <FontAwesomeIcon icon={fasHeart} />
                                : <FontAwesomeIcon icon={farHeart} />}
                            </Button>
                        </Col>
                        <Col md="4" className='d-flex justify-content-end'>
                            <Form.Select className='mt-2'defaultValue={game.play_status} onChange={(e)=>handleStatusChange(e.target.value)}>
                                    <option value="0">Not Played</option>
                                    <option value="1">In Progress</option>
                                    <option value="2">Completed</option>
                            </Form.Select>
                        </Col>
                        <Col md="1" className='d-flex justify-content-end'>
                            <Button variant='danger' className='mt-2'><FontAwesomeIcon icon={faTrash} onClick={handleDelete} /></Button>
                        </Col>
                    </>
                )}
        </Row>
        <Row>
            <Col md="2" style={{position: 'relative'}}>
                <img src={game.cover.url} alt='game cover' className='mt-2 ms-1' style={{borderRadius: '50%', position: 'absolute', bottom: '-45px'}}/>
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