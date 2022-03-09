import styled from 'styled-components';

export const StyledSidebar = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 3.5rem 0 0 6.5rem;
  height: min-content;

  @media only screen and (max-width: 75em) {
    margin: 3rem 0 0 3rem;
  }

  &::after {
    content: '';
    display: block;
    position: relative;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.fontMid};
    opacity: 0.4;
    order: 2;
    align-self: center;
    margin-right: -2rem;

    @media only screen and (max-width: 75em) {
      display: none;
    }
  }

  & > img {
    width: 5rem;
    height: 5rem;
    align-self: center;
    margin-right: 2.5rem;
    order: 1;

    @media only screen and (max-width: 56.25em) {
      order: -1;
    }
  }
`;
