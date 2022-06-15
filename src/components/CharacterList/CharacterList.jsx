import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StyledList, StyledWrapper } from "./CharacterList.styled";
import CharacterCard from '../CharacterCard/CharacterCard';
import Pagination from '../Pagination/Pagination';

const CharacterList = ({list}) => {

    const [characters, setCharacters] = useState()
    const [currentUrl, setCurrentUrl] = useState('https://rickandmortyapi.com/api/character')
    const [pages, setPages] = useState(1)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    const getCharacters = async () => {
        const url = currentUrl
        const data = await axios(url).then(data => data.data)
        
        setCharacters(data.results)
        setLoading(false)
        setPages(data.info.pages)
        setNextPageUrl(data.info.next);
        setPrevPageUrl(data.info.prev);
    }

    useEffect(() => {
        setLoading(true)
        getCharacters()

    }, [currentUrl])
    

    function nextPage() {
        setCurrentUrl(nextPageUrl)
        }
        function prevPage() {
        setCurrentUrl(prevPageUrl)
        }
        function goToPage(num) {
        setCurrentUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
        }
        if (loading) return "Loading..."
        const characterList = characters.map(char => <CharacterCard key={char.id} character={char} list={list}/>)

        

    return (
        <StyledWrapper>
            <StyledList>
            { characters.length > 0 ? (
                characterList
            ) : null }
            </StyledList>
            <Pagination
                nextPage={nextPageUrl ? nextPage : null}
                prevPage={prevPageUrl ? prevPage : null}
                goToPage={goToPage}
                pages={pages}
            />
        </StyledWrapper>
    )
}

export default CharacterList;