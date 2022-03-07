import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  place-items: center;
  color: ${({ theme }) => theme.colors.fontLight};
  font-family: ${({ theme }) => theme.fonts.text};
  margin-top: 6rem;

  & h1 {
    font-size: 3rem;
    letter-spacing: 4.75px;
    font-weight: 400;

    & span {
      font-size: 16rem;
      font-family: ${({ theme }) => theme.fonts.header};
      display: block;
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 15px;
      line-height: 1.2;
    }
  }

  & p {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.text2};
    line-height: 3rem;
  }

  & button {
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    font-size: 3.5rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.header};
    border: none;
  }
`;
