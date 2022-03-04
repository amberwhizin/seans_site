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
  @media (max-width: 1438px) {
    background: linear-gradient(to bottom, black, 50%, #468189 50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
  @media (max-width: 1438px) {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 5rem;
  }
`;

const StyledMusic = styled.h2`
  margin-top: 30rem;
  padding-right: 20rem;
  text-align: center;
  font-family: 'Metal Mania', cursive;
  @media (max-width: 1438px) {
    margin: 0;
    padding: 0;
    /* border: 1px solid red; */
  }
`;

const StyledTutor = styled.h2`
  margin-top: 30rem;
  padding-left: 20rem;
  text-align: center;
  font-family: 'Merienda', sans-serif;

  @media (max-width: 1438px) {
    margin: 0;
    padding: 0;
    /* border: 1px solid yellow; */
  }
`;

// target
const HomeLink = styled.a`
  text-decoration: none;
  font-size: 4rem;
  color: #f4e9cd;
  &:hover,
  &:focus {
    color: #9dbebb;
  }
  @media (max-width: 1438px) {
    font-size: 45px;
    margin-bottom: 1.5rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
    cursor: pointer;
  }
  }
`;

const TutorQuote = `"Best Tutor EVER!!"`;
const MusicQuote = `"Incredible, a must see!"`;

const MusicParagraph = styled.p`
  margin-top: 9rem;
  color: #f4e9cd;
  font-size: 2rem;
  @media (max-width: 1438px) {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
`;
const TutorParagraph = styled.p`
  font-size: 2rem;
  margin-top: 9rem;
  color: #f4e9cd;
  @media (max-width: 1438px) {
    font-size: 15px;
    margin: 0;
    padding: 0;
  }
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
          <Title>{Heading}</Title>
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
};

export default HomePage;
