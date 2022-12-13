import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>GAMERTRAXX</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#my_games">MY GAMES</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
        
  )
}

export default Header