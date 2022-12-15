import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchBar = (props) => {
    const { onSubmitProp } = props
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp(search)
    }

  return (
    <Container className='my-3'>
        <Row className='justify-content-center'>
            <Col xs={12} md={6} lg={4}>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingSearch"
                        label="Search"
                        className="mb-3"
                        style={{color: '#fff'}}
                    >
                        <Form.Control type="text" placeholder="Search" onChange={(e)=> setSearch(e.target.value) } style={{backgroundColor: '#1A1C1E', color: '#fff', border: 'none'}}/>
                    </FloatingLabel>
                    <button type="submit" style={{visibility: 'hidden'}}></button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default SearchBar