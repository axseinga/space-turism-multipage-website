import { StyledMobileButton } from './styled/MobileButton.styled';
import IconHamburger from '../assets/shared/icon-hamburger.svg';
import IconHamburgerClose from '../assets/shared/icon-close.svg';

export const MobileButton = ({ isOpen, toggle }) => {
  return (
    <StyledMobileButton onClick={toggle}>
      <img src={isOpen ? IconHamburgerClose : IconHamburger} />
    </StyledMobileButton>
  );
};
