import React, { useEffect }from 'react'
import Container from 'react-bootstrap/Container'
import GameListItem from './GameListItem'

//If more than 7 games are added to the list, the overflow will scroll

const GameList = (props) => {
    const { searchResults, setSelectedGame } = props
    
    //rerender the list when the searchResults state changes
    useEffect(() => {
    }, [searchResults])

  return (
    <Container className='py-2' style={{backgroundColor: '#aaaaaa'}}>
        <div className='overflow-auto' style={{height: '850px'}}>
            {
                searchResults.map((game, i) => {
                    return <GameListItem key={i} game={game} setSelectedGame={setSelectedGame}/>
                })
            }
        </div>
    </Container>
  )
}

export default GameList