import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import TutoringDropdownMenu from './TutoringDropdownMenu';
import { useIsTabletOrMobile } from '../hooks';

const StyledLink = styled.a`
  text-decoration: none;
  margin-left: 10px;
  margin-right: 4rem;
  font-size: 27px;
  color: #468189;
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
  background-color: white;
  border-bottom: 1px solid #468189;
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

const NavItem = ({ href, children, left }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NavLi left={left}>
      <Link href={href} passHref>
        {/* is it going to index first- easy way to get rid of this, just go straight to about page and not the homepage of each side...investigate locale */}
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </NavLi>
  );
};

const StyledHeader = styled.header`
  position: relative;
  /* width: 100%; */
  /* height: 100vh; */
`;

const TutoringHeader = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { navBarTutor = {} } = copy;
  const homeDivided = (navBarTutor.home || '').split(' ');

  return (
    <StyledHeader>
      <NavUl>
        {!isTabletOrMobile && (
          <>
            <NavItem href="/" left>
              {navBarTutor.home}
            </NavItem>
            {/* adding extra header information to split between both sides */}
            <NavItem href="/tutoring/about">{navBarTutor.about}</NavItem>
            <NavItem href="/tutoring/subjects">{navBarTutor.subjects}</NavItem>
            <NavItem href="/tutoring/testimonials">
              {navBarTutor.testimonials}
            </NavItem>
            <NavItem href="/tutoring/contact">{navBarTutor.contact}</NavItem>
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
            <TutoringDropdownMenu />
          </>
        )}
      </NavUl>
    </StyledHeader>
  );
};
export default TutoringHeader;
