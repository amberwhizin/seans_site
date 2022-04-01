// <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by Syahrul Hidayatullah - Flaticon</a>

//Syahrul Hidayatullah
// <a href="https://www.flaticon.com/free-icons/cancel" title="cancel icons">Cancel icons created by torskaya - Flaticon</a> 

import { forwardRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import HamburgerIcon from '../public/pics/burger_green.png';
import XIcon from '../public/pics/cancel_green.png';

const Button = styled.button`
  display: flex;
  align-items: center;
  z-index: 100;
  padding: 1rem;
  margin-top: 0.2rem;
  border: none;
  &:hover,
  &:focus {
    color: #9dbebb;
  }
  :hover {
    cursor: pointer;
  }
`;
const CloseContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const CloseButton = ({ onClick }) => (
  <CloseContainer>
    <Button onClick={onClick}>
      <Image
        src={XIcon}
        alt={'an image of a black and white hamburger'}
        width={30}
        height={30}
      />
    </Button>
  </CloseContainer>
);
const OpenContainer = styled.div`
  z-index: ${(props) => (props.hidden ? -1 : 1)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: all 500ms ease 350ms;
  font-size: 2rem;
`;
const OpenButton = ({ onClick, hidden }) => (
  <OpenContainer hidden={hidden}>
    <Button onClick={onClick}>
      <Image
        alt={'an image of a black and white hamburger'}
        src={HamburgerIcon}
        width={42}
        height={42}
      />
    </Button>
  </OpenContainer>
);
const StyledA = styled.a`
  text-decoration: none;
  color: #468189;
  &:hover,
  &:focus {
    color: #9dbebb;
  }
  :hover {
    cursor: pointer;
  }
`;
const LinkWithOnClick = forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Link href={href} passHref>
      <StyledA href={href} onClick={onClick} ref={ref}>
        {children}
      </StyledA>
    </Link>
  );
});
const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.hidden ? -1 : 100)};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: all 500ms ease 350ms;
`;
const MenuUl = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  height: 100%;
`;
const MenuLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  font-size: 1.9rem;
`;
const DropDownMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive); //update or "set" aka (setIsActive)... click event from false to true (isActive)
  return (
    <>
      <OpenButton onClick={toggleIsActive} hidden={isActive} />
      <Menu hidden={!isActive}>
        <MenuUl>
          <MenuLi>
            <LinkWithOnClick onClick={toggleIsActive} href="/tutoring/about/">
              about
            </LinkWithOnClick>
          </MenuLi>
          <MenuLi>
            <LinkWithOnClick onClick={toggleIsActive} href="/tutoring/subjects">
              subjects
            </LinkWithOnClick>
          </MenuLi>
          <MenuLi>
            <LinkWithOnClick
              onClick={toggleIsActive}
              href="/tutoring/testimonials"
            >
              testimonials
            </LinkWithOnClick>
          </MenuLi>
          <MenuLi>
            <LinkWithOnClick onClick={toggleIsActive} href="/tutoring/contact">
              contact
            </LinkWithOnClick>
          </MenuLi>
        </MenuUl>
        <CloseButton onClick={toggleIsActive} />
      </Menu>
    </>
  );
};
LinkWithOnClick.displayName = 'LinkWithOnClick';
export default DropDownMenu;
