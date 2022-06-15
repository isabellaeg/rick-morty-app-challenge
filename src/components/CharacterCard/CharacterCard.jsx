import { useContext, useState } from "react";
import CharactersContext from "../../providers/CharactersContext";
import { StyledWrapper, StyledImage, StyledDetails, StyledSpan } from "./CharacterCard.styled";
import { FaSkull, FaLaugh, FaUser, FaOptinMonster} from 'react-icons/fa';


const CharacterCard = ({character, list}) => {

    const {setSelected} = useContext(CharactersContext)

    const [active, setActive] = useState(false)

    const handleClick = () => {
        if (list === 1) {setSelected((char) => ({...char, char1: character.id}))
        setActive(!active)
        } 
        else {
            setSelected((char) => ({...char, char2: character.id}))
            setActive(!active)
        }
        
    }
    return (
        <StyledWrapper onClick={handleClick} active={active}>
            <StyledImage src={character.image}/>
            <h3>{character.name}</h3>
            <StyledDetails>
                {character.species === "Alien" ? <FaOptinMonster/> : <FaUser/>}
                <StyledSpan>{character.species}</StyledSpan>
                {character.status === "Alive" ? <FaLaugh/> : <FaSkull/>}
                <StyledSpan>{character.status}</StyledSpan>
            </StyledDetails>
        </StyledWrapper>
    )
}

export default CharacterCard;