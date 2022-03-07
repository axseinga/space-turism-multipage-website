import { StyledSidebar } from './styled/Sidebar.styled';
import logo from '../assets/shared/logo.svg';
import { Nav } from './Nav';

export const Sidebar = () => {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Destination', href: '/destination' },
    { name: 'Crew', href: '/crew' },
    { name: 'Technology', href: '/technology' },
  ];
  return (
    <StyledSidebar>
      <img src={logo}></img>
      <Nav items={menuItems} />
    </StyledSidebar>
  );
};
