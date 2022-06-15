import CharactersContext from "../../providers/CharactersContext";
import { StyledWrapper } from "./Filtered.styled";
import { useContext } from "react";
import EpisodesList from '../../components/EpisodesList/EpisodesList'

const Filtered = () => {

    const { selected } = useContext(CharactersContext);

    const character1 = [selected.char1]
    const character2 = [selected.char2]
    const characters = [character1, character2]

    return (
        <StyledWrapper>
            <EpisodesList title={'Character #1 episodes'} character={character1}/>
            <EpisodesList title={'Shared Episodes'} character={characters}/>
            <EpisodesList title={'Character #2 episodes'} character={character2}/>
        </StyledWrapper>
        
    )
}
export default Filtered;

