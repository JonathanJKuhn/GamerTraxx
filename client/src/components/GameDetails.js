import React, { useState, useEffect } from 'react'
import DetailsHeader from './DetailsHeader'
import DetailsBody from './DetailsBody'
import axios from 'axios'

const GameDetails = (props) => {
    const { selectedGame, view, setSelectedGame, getCollection } = props
    const [gameDetails, setGameDetails] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if(selectedGame !== undefined) {
            let endpoint
            if(view === 'home'){
                endpoint = 'details-igdb'
            } else if(view === 'my-games'){
                endpoint = 'my-games'
            }
            axios.get(`/api/v1/${endpoint}/${selectedGame}`)
            .then(res => {
                setGameDetails(res.data)
            })
            .then(setIsLoaded(true))
            .catch(err => {
                console.log(err)
            })
        } else {
            setIsLoaded(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedGame])

  return (
    <div style={{backgroundColor: '#1A1C1E'}}>
        {isLoaded && (
            <>
                <DetailsHeader view={view} game={gameDetails} setSelectedGame={setSelectedGame} setGame={setGameDetails} getCollection={getCollection}/>
                <DetailsBody game={gameDetails}/>
            </>
        )}
    </div>
  )
}

export default GameDetails