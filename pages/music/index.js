import styled from 'styled-components';
import Link from 'next/link';
import { useIsTabletOrMobile } from '../../hooks';
import Footer from '../../components/Footer';

const Container = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #122932, 50%, #e3c0d3 50%);
  height: 100vh;
`;

const Heading = `Sean Keegan`;

const Title = styled.h1`
  position: fixed;
  padding: 1.4rem;
  top: 0;
  margin: 5rem;
  font-size: 3rem;
  background-color: white;
  /* This is the index font */
  font-family: 'Orbitron', sans-serif;
`;

const StyledMusic = styled.h2`
  margin-top: 30rem;
  padding-right: 20rem;
  text-align: center;
  font-family: 'Bangers', cursive;
`;

const StyledTutor = styled.h2`
  margin-top: 30rem;
  padding-left: 20rem;
  text-align: center;
  font-family: 'Happy Monkey', cursive;
`;

const TutorQuote = `"Best Tutor EVER!!"`;
const MusicQuote = `"Incredible, a must see!"`;

const MusicParagraph = styled.p`
  margin-top: 9rem;
  color: white;
`;
const TutorParagraph = styled.p`
  margin-top: 9rem;
  color: white;
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
            <Link href="/music/">Music</Link>
            <MusicParagraph>{MusicQuote}</MusicParagraph>
          </StyledMusic>
          <StyledTutor>
            <Link href="/tutoring/">Tutoring</Link>
            <TutorParagraph>{TutorQuote}</TutorParagraph>
          </StyledTutor>
          {isTabletOrMobile && (
            <StyledFooterContainer>
              <Footer copy={copy} />
            </StyledFooterContainer>
          )}
        </>
      )}
    </Container>
  );
}

export default HomePage;
