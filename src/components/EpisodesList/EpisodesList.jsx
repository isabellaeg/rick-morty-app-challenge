import { StyledList } from "./EpisodesList.styled"
import { useEffect, useState } from 'react';
import axios from 'axios'
import Episode from "../Episode/Episode";

const EpisodesList = ({title, character}) => {

    
    const [episodes, setEpisodes] = useState([]);
    const url = 'https://rickandmortyapi.com/api/character'

    const getEpisodes = async () => {
        try {
            const data = await axios(`${url}/${character}`).then(data => data.data)
            data.length !== 2 ? setEpisodes(data.episode) : filterEpisodes(data);
        }
        catch (err) {
            if (err.response) {
                console.log(err)
            }
        }
        
    }

    const filterEpisodes = (character) => {
        const episodeChar1 = character[0].episode;
        const episodeChar2 = character[1].episode;
        const combinedEpisodes = episodeChar1.filter(ep => episodeChar2.includes(ep))
        setEpisodes(combinedEpisodes)
    }  

    useEffect(() => {
        getEpisodes()
    }, [character])

    return (
        <StyledList>
            <h1>{title}</h1>
            {episodes ? (
                episodes.map((ep) => (
                    <Episode episode={ep}/>
                ))
             ) : null }
        </StyledList>
    )
}

export default EpisodesList;