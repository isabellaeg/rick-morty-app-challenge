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
            <div> 
                <span>{episodes?.episode}</span>
                <span>{episodes?.name}</span>
            </div>
            
            <span>{episodes?.air_date}</span>
        </StyledContainer>
    )
}

export default Episode;