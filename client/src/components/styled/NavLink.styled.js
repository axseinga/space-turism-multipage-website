import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.text}, serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 3.5rem;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.fontMid};
  }

  & span {
    margin-right: 10px;
    font-weight: 700;
  }
`;
