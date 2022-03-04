import styled from 'styled-components';
import Link from 'next/link';
import { useIsTabletOrMobile } from '../hooks';

const Container = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, black, 50%, #468189 50%);
  height: 100vh;
`;

const Heading = `Sean Keegan`;

const Title = styled.h1`
  position: fixed;
  padding: 1rem;
  top: 0;
  margin: 4rem;
  font-size: 9rem;
  font-family: 'Caveat', cursive;
  /* color: #031926; */
  /* background-color: #f4e9cd; */
  /* border-radius: 3%; */
`;

const StyledMusic = styled.h2`
  margin-top: 30rem;
  padding-right: 20rem;
  text-align: center;
  font-family: 'Metal Mania', cursive;
`;

const StyledTutor = styled.h2`
  margin-top: 30rem;
  padding-left: 20rem;
  text-align: center;
  font-family: 'Merienda', sans-serif;
`;
// target
const HomeLink = styled.a`
text-decoration: none;
font-size: 4rem;
    color: #f4e9cd;
 }
  &:hover,
  &:focus {
   color: #9dbebb;
  }
`;

const TutorQuote = `"Best Tutor EVER!!"`;
const MusicQuote = `"Incredible, a must see!"`;

const MusicParagraph = styled.p`
  margin-top: 9rem;
  color: #f4e9cd;
  font-size: 2rem;
`;
const TutorParagraph = styled.p`
  font-size: 2rem;
  margin-top: 9rem;
  color: #f4e9cd;
`;

const StyledFooterContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 6.5rem;
  @media (max-height: 800px) {
    margin-top: 5.5rem;
  }
  @media (max-height: 750px) {
    margin-top: 4rem;
  }
  @media (max-height: 667px) {
    margin-top: 3rem;
  }
  @media (max-height: 640px) {
    margin-top: 2rem;
  }
  @media (max-height: 600px) {
    margin-top: 0;
  }
`;

function HomePage({ copy }) {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <Title>{Heading}</Title>
      {!isTabletOrMobile && (
        <>
          <StyledMusic>
            <Link href="/music/about/" passHref>
              <HomeLink>Music</HomeLink>
            </Link>
            <MusicParagraph>{MusicQuote}</MusicParagraph>
          </StyledMusic>
          <StyledTutor>
            <Link href="/tutoring/about/" passHref>
              <HomeLink>Tutoring</HomeLink>
            </Link>
            <TutorParagraph>{TutorQuote}</TutorParagraph>
          </StyledTutor>
        </>
      )}
    </Container>
  );
}

export default HomePage;
