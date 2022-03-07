import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.headers};
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 4rem;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.fontMid};
  }

  & span {
    margin-right: 8px;
    font-weight: 700;
  }
`;
