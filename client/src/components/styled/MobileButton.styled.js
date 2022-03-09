import styled from 'styled-components';

export const StyledMobileButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 3rem;
  z-index: 99;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 56.25em) {
    display: inline-block;
  }

  & img {
    width: 3rem;
    height: auto;
  }
`;
