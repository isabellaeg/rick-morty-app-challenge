import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledContainer } from './Episode.styled';

const Episode = ({episode}) => {

    const [episodes, setEpisodes] = useState()

    const getEpisodeData = async () => {
        try {
            const data = await axios(episode).then(data => data.data)
            setEpisodes(data)
            console.log(episodes)
        } 
        catch (err) {
            if (err.response) {
                console.log(err)
            }
        }
        
    }

    useEffect(()=> {
        getEpisodeData()
        console.log(episode)
    }, [episode])

    return (
        <StyledContainer>
            <span>{episodes?.name}</span>
            <span>{episodes?.episode}</span>
        </StyledContainer>
    )
}

export default Episode;