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

      & a {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fonts.headers};
        letter-spacing: 0.3rem;
        text-transform: uppercase;
        text-decoration: none;
        padding-bottom: 4rem;

        &:hover {
          border-bottom: 3px solid white;
        }

        & span {
          margin-right: 8px;
          font-weight: 700;
        }
      }
`;
