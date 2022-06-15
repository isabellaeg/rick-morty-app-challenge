import { useContext  } from "react";
import CharactersContext from "../../providers/CharactersContext";
import { StyledWrapper, StyledImage, StyledDetails, StyledSpan, StyledH3 } from "./CharacterCard.styled";
import { FaSkull, FaLaugh, FaUser, FaOptinMonster} from 'react-icons/fa';


const CharacterCard = ({character, list}) => {

    const {setSelected} = useContext(CharactersContext)

    

    const handleClick = () => {
        if (list === 1) {setSelected((char) => ({...char, char1: character.id}))
        
        } 
        else {
            setSelected((char) => ({...char, char2: character.id}))
            
        }
        
    }
    return (
        <StyledWrapper onClick={handleClick}>
            <StyledImage src={character.image}/>
            <StyledH3>{character.name}</StyledH3>
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