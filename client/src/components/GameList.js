import React, { useEffect }from 'react'
import styles from './GameList.module.css'
import Container from 'react-bootstrap/Container'
import GameListItem from './GameListItem'

//If more than 7 games are added to the list, the overflow will scroll

const GameList = (props) => {
    const { searchResults, setSelectedGame } = props
    const { scrollParent, scrollbar } = styles
    
    //rerender the list when the searchResults state changes
    useEffect(() => {
    }, [searchResults])

  return (
    <Container className={scrollParent} style={{backgroundColor: '#1A1C1E'}}>
        <div className={scrollbar} style={{height: '850px'}}>
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