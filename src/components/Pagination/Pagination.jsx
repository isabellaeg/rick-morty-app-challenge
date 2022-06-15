import React from 'react'
import { StyledButtonWrapper, StyledButton } from './Pagination.styled'

const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
  let pageButtons = []
  
  for (let i = 1; i <= pages; i++) {
  pageButtons.push(<StyledButton key={i} onClick={() => goToPage(i)}>{i}</StyledButton>)
}
  return (
    <StyledButtonWrapper>
      {prevPage && (<StyledButton onClick={prevPage}>Previous</StyledButton>)}
      {pageButtons}
      {nextPage && (<StyledButton onClick={nextPage}>Next</StyledButton>)}
    </StyledButtonWrapper>
  )
}

export default Pagination;