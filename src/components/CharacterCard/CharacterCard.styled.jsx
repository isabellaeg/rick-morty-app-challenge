import styled from 'styled-components';

export const StyledWrapper = styled.div`
    max-width: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    margin: 0 15px 10px 0;
    &:hover {
        background-color: #25F4EA;
        cursor: pointer;
        max-width: 210px

    }
    ${({ active }) => active && `
    border: 4px solid #25F4EA;
    background-color: #25F4EA;
  `}
`;

export const StyledImage = styled.img`
   width: 100%;
   border-radius: 10px 10px 0 0;

`;

export const StyledDetails = styled.div`
margin-bottom: 10px;
justify-content: space-between;

`;

export const StyledSpan = styled.span`
    justify-content: space-between;
    margin: 7px;
`;

export const StyledH3 = styled.h3`
    font-family: 'Schwifty';
`;
