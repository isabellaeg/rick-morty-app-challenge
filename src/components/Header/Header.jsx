import { StyledNavbar, StyledIcon, StyledTitle } from "./Header.styled"

const Header = () => {
    return (
        <StyledNavbar>
            <StyledIcon src="/Rick_and_Morty.svg.png"/>
            <StyledTitle>Conexa Challenge</StyledTitle>
        </StyledNavbar>
    )
}

export default Header;