import styled from 'styled-components';

export const StyledNav = styled.nav`
  order: 3;
  width: 100%;

  @media only screen and (max-width: 75em) {
    width: 75%;
  }

  @media only screen and (max-width: 56.25em) {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

  & ul {
    height: 100%;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.whiteTransparent};
    backdrop-filter: blur(2rem);
    margin: 0;
    padding: 4rem 9rem;
    gap: 6rem;

    @media only screen and (max-width: 75em) {
      gap: 2rem;
      padding: 4rem 3rem 4rem 8rem;
    }

    @media only screen and (max-width: 56.25em) {
      flex-direction: column;
      padding: 10rem 4rem;
      justify-content: start;
      gap: 8rem;
    }
  }
`;
