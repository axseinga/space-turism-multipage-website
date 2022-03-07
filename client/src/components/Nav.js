import { StyledNav } from './styled/Nav.styled';

export const Nav = ({ items }) => {
  return (
    <StyledNav>
      <ul>
        {items.map((item, index) => (
          <li key={`${item.name}_${item.index}`}>
            <a href={item.href}>
              <span>{`0${index}`}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
