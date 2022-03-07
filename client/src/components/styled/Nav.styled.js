import styled from 'styled-components';

export const StyledNav = styled.nav`
    order: 3;
    width: 100%;

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

`;
