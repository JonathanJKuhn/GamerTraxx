import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = (props) => {
  const { view } = props
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>GAMERTRAXX</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="/" style={{color: view === 'home' ? '#097EB8' : ''}} >HOME</Nav.Link>
                <Nav.Link href="/my-games" style={{color: view === 'my-games' ? '#097EB8' : ''}} >MY GAMES</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
        
  )
}

export default Header