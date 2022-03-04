import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import DropdownMenu from './DropdownMenu';
import { useIsTabletOrMobile } from '../hooks';

const StyledLink = styled.a`
  text-decoration: none;
  padding-right: 5rem;
  font-size: 2rem;
  color: #f4e9cd;
  &:hover,
  &:focus {
    color: #9dbebb;
  }
  @media (max-width: 1438px) {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
`;

const MobileHome = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;

  margin: 0 auto;

  background-color: black;
  border-bottom: 1px solid #f4e9cd;
  /* padding-left: 4rem; */
  font-size: 2rem;

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
  height: 6rem;
  ${(props) => props.left && 'margin-right: auto;'};
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
    <header>
      <NavUl>
        {!isTabletOrMobile && (
          <NavItem href="/" left>
            {navBarMusic.home}
          </NavItem>
        )}

        {!isTabletOrMobile && (
          <>
            <NavItem href="/music/about">{navBarMusic.about}</NavItem>
            <NavItem href="/music/videoGallery">
              {navBarMusic.videoGallery}
            </NavItem>
            <NavItem href="/music/services">{navBarMusic.services}</NavItem>
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
            {isTabletOrMobile && <DropdownMenu />}
          </>
        )}
      </NavUl>
    </header>
  );
};
export default MusicHeader;
