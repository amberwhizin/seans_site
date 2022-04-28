import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import MusicDropdownMenu from './MusicDropdownMenu';
import { useIsTabletOrMobile } from '../hooks';

const StyledLink = styled.a`
  text-decoration: none;
  margin-left: 10px;
  margin-right: 4rem;
  font-size: 27px;
  color: ${(props) => {
    props.theme.colors.lightBrown;
  }};
  &:hover, 
  &:focus {
    color: #9dbebb;
  }
  @media (max-width: 1438px) {
    display: flex;
    align-items: center;
  }
`;

const MobileHome = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const NavUl = styled.ul`
  display: flex;
  margin: 0 auto;
  background-color: black;
  border-bottom: 1px solid
    ${(props) => {
      props.theme.colors.lightBrown;
    }};
  @media (max-width: 1438px) {
    padding: 0;
    margin: 0;
    bottom: 0;
  }
`;

const NavLi = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 4rem;
  ${(props) => props.left && 'margin-right: auto;'};
`;

const StyledHeader = styled.header`
  position: relative;
`;

const NavItem = ({ href, children, left }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NavLi left={left}>
      <Link href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </NavLi>
  );
};

const MusicHeader = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { navBarMusic = {} } = copy;
  const homeDivided = (navBarMusic.home || '').split(' ');

  return (
    <StyledHeader>
      <NavUl>
        {!isTabletOrMobile && (
          <>
            <NavItem href="/" left>
              {navBarMusic.home}
            </NavItem>
            <NavItem href="/music/about">{navBarMusic.about}</NavItem>
            <NavItem href="/music/videoGallery">
              {navBarMusic.videoGallery}
            </NavItem>
            <NavItem href="/music/contact">{navBarMusic.contact}</NavItem>
          </>
        )}

        {/* Mobile */}
        {isTabletOrMobile && (
          <>
            <NavItem href="/" left>
              <MobileHome>
                {homeDivided.map((word) => (
                  <div key={word}>{word}</div>
                ))}
              </MobileHome>
            </NavItem>
            <MusicDropdownMenu />
          </>
        )}
      </NavUl>
    </StyledHeader>
  );
};
export default MusicHeader;
