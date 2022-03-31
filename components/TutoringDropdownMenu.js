import { forwardRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  display: flex;
  align-items: center;
  z-index: 100;
  padding: 1rem;
  margin-top: 0.7rem;
  color: #468189;
  &:hover,
  &:focus {
    color: #9dbebb;
  }
  :hover {
    cursor: pointer;
  }
  border: none;
  width: 70px;
  @media (max-width: 414px) {
    width: 60px;
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
      <FontAwesomeIcon icon={faTimes} css={{ fontSize: '2rem' }} />
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
      <FontAwesomeIcon icon={faBars} css={{ fontSize: '1.8rem' }} />
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
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.875rem;
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
