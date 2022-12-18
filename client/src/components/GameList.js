import React, { useEffect, useState }from 'react'
import styles from './GameList.module.css'
import Container from 'react-bootstrap/Container'
import GameListItem from './GameListItem'

const GameList = (props) => {
    const { searchResults, setSelectedGame } = props
    const { scrollParent, scrollbar } = styles
    let [isLoaded, setIsLoaded] = useState(false)
    
    //rerender the list when the searchResults state changes
    useEffect(() => {
        if(searchResults.length > 0){
            setIsLoaded(true)
        }
    }, [searchResults])

  return (
    <>
        {isLoaded && (
            <Container className={scrollParent} style={{backgroundColor: '#1A1C1E'}}>
                <div className={scrollbar} style={{height: '850px'}}>
                    {
                        searchResults.map((game, i) => {
                            return <GameListItem key={i} game={game} setSelectedGame={setSelectedGame}/>
                        })
                    }
                </div>
            </Container>
        )}
    </>
  )
}

export default GameList