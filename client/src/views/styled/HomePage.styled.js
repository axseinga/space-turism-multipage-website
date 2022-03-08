import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  padding: 2rem;
  place-items: center;
  color: ${({ theme }) => theme.colors.fontLight};
  font-family: ${({ theme }) => theme.fonts.text};
  margin-top: 6rem;
  padding: 0 20rem;

  & div {
    & h1 {
      font-size: 3rem;
      letter-spacing: 4.75px;
      font-weight: 400;

      & span {
        font-size: 14rem;
        font-family: ${({ theme }) => theme.fonts.header};
        display: block;
        color: ${({ theme }) => theme.colors.white};
        letter-spacing: 15px;
        line-height: 1.5;
      }
    }

    & p {
      font-size: 2rem;
      font-family: ${({ theme }) => theme.fonts.text2};
      line-height: 3rem;
    }
  }

  & button {
    grid-column: 3/4;
    cursor: pointer;
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    font-size: 3.5rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.header};
    border: none;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);

    &:hover {
      animation: pulse 2s infinite;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;
