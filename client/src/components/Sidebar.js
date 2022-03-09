import { useState, useEffect } from 'react';
import { StyledSidebar } from './styled/Sidebar.styled';
import logo from '../assets/shared/logo.svg';
import { Nav } from './Nav';
import { MobileButton } from './MobileButton';

export const Sidebar = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 900);
  const [toggleNav, setToggleNav] = useState(false);

  const updateMedia = () => {
    setMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Destination', href: '/destination' },
    { name: 'Crew', href: '/crew' },
    { name: 'Technology', href: '/technology' },
  ];

  const mobileMenu = toggleNav ? (
    <Nav items={menuItems} toggle={setToggleNav} />
  ) : (
    ''
  );

  return (
    <StyledSidebar>
      <img src={logo}></img>

      <MobileButton
        isOpen={toggleNav}
        toggle={() => setToggleNav(!toggleNav)}
      />
      {isMobile ? mobileMenu : <Nav items={menuItems} />}
    </StyledSidebar>
  );
};
