import React from 'react'
import Container from 'react-bootstrap/Container'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchBar = () => {
  return (
    <Container className='my-3'>
        <Row className='justify-content-center'>
            <Col xs={12} md={6} lg={4}>
                <Form>
                    <FloatingLabel
                        controlId="floatingSearch"
                        label="Search"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Search" />
                    </FloatingLabel>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default SearchBar