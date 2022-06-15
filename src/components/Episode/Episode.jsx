import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledContainer } from './Episode.styled';

const Episode = ({episode}) => {

    const [episodes, setEpisodes] = useState()

    useEffect(()=> {

        const getEpisodeData = async () => {
            const data = await axios(episode).then(data => data.data)
            setEpisodes(data)
            .catch(error => console.log(error)) 
        }
        
        getEpisodeData()
        
    }, [episode])

    return (
        <StyledContainer>
            <span>{episodes?.name}</span>
            <span>{episodes?.episode}</span>
        </StyledContainer>
    )
}

export default Episode;