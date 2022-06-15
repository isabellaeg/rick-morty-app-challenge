import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    background-color: #8B9B8D;
    font-family: 'Schwiftly';
`;

export const StyledIcon = styled.img`
    height: 70px;
`;


export const StyledTitle = styled.h1`
    font-family: 'Schwifty';
    font-size: 30px;
    color: #25F4EA;
`;