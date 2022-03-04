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
  @media (max-height: 1438px) {
    background: linear-gradient(to bottom, black, 50%, #468189 50%);
  }
`;

const Heading = `Sean Keegan`;

const Title = styled.h1`
  position: fixed;
  padding: 1rem;
  top: 0;
  margin: 4rem;
  font-size: 9rem;
  font-family: 'Caveat', cursive;
  /* @media (max-height: 800px) {
    font-size: 5rem;
  } */
`;

const StyledMusic = styled.h2`
  margin-top: 30rem;
  padding-right: 20rem;
  text-align: center;
  font-family: 'Metal Mania', cursive;
  @media (max-height: 1438px) {
    margin: 0;
    padding: 0;
  }
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
  /* @media (max-height: 800px) {
    margin-right: 12rem;
    margin-top: 10rem;
    font-size: 1rem;
  } */
`;
const TutorParagraph = styled.p`
  font-size: 2rem;
  margin-top: 9rem;
  color: #f4e9cd;
`;

const HomePage = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <Title>{Heading}</Title>
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
      {isTabletOrMobile && (
        <>
          <StyledMusic>
            <Link href="/music/about/" passHref>
              <HomeLink>Music</HomeLink>
            </Link>
            <MusicParagraph>{MusicQuote}</MusicParagraph>
          </StyledMusic>
        </>
      )}
    </Container>
  );
};

export default HomePage;
