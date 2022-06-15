import Title from "../../components/Title/Title"
import CharacterList from "../../components/CharacterList/CharacterList";
import { StyledMainContainer, StyledListContainer } from "./Main.styled";

const MainPage = () => {
    return (
        <StyledMainContainer>
            <StyledListContainer>
                <Title title="Character #1" />
                <CharacterList list={1}/>
            </StyledListContainer>
            <StyledListContainer>
                <Title title="Character #2"/>
                <CharacterList list={2}/>
            </StyledListContainer>
        </StyledMainContainer>
    )
}

export default MainPage;