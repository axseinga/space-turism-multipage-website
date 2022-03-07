import { StyledNav } from './styled/Nav.styled';
import { StyledNavLink } from './styled/NavLink.styled';

export const Nav = ({ items }) => {
  return (
    <StyledNav>
      <ul>
        {items.map((item, index) => (
          <li key={`${item.name}_${item.index}`}>
            <StyledNavLink to={item.href}>
              <span>{`0${index}`}</span>
              {item.name}
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
