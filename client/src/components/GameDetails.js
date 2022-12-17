import React, { useState, useEffect } from 'react'
import DetailsHeader from './DetailsHeader'
import DetailsBody from './DetailsBody'
import axios from 'axios'

const GameDetails = (props) => {
    const { selectedGame, view } = props
    const [gameDetails, setGameDetails] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if(selectedGame !== undefined) {
            axios.get(`http://localhost:8000/api/v1/details-igdb/${selectedGame}`)
            .then(res => {
                setGameDetails(res.data)
            })
            .then(setIsLoaded(true))
            .catch(err => {
                console.log(err)
            })
        }
    }, [selectedGame])

  return (
    <div style={{backgroundColor: '#1A1C1E'}}>
        {isLoaded && (
            <>
                <DetailsHeader view={view} game={gameDetails}/>
                <DetailsBody game={gameDetails}/>
            </>
        )}
    </div>
  )
}

export default GameDetails