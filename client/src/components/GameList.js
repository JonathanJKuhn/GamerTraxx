import React from 'react'
import Container from 'react-bootstrap/Container'
import GameListItem from './GameListItem'

//If more than 7 games are added to the list, the overflow will scroll


const GameList = () => {
  return (
    <Container className='py-2' style={{backgroundColor: '#aaaaaa'}}>
        <div className='overflow-auto' style={{height: '850px'}}>
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
        </div>
    </Container>
  )
}

export default GameList