import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundImage from '../public/pics/5thAveB.jpg';
import { useIsTabletOrMobile } from '../hooks';
import Footer from '../components/Footer';

const Container = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #122932, 50%, #E3C0D3 50%);
`;

const Heading = `Sean Keegan`;
const Title = styled.h1`
  position: fixed;
  padding: 1.4rem;
  top: 0;
  margin: 5rem;
  font-size: 3rem;
  background-color: white;
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

// const Line_1 = styled.span`
//   position: absolute;
//   height: 45rem;
//   border-left: 2px solid black;
// `;
// const Line_2 = styled.span`
//   position: absolute;
//   height: 45rem;
//   top: 12.2rem;
//   border-left: 2px solid black;
// `;

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

function HomePage() {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <Title>{Heading}</Title>
          <StyledMusic>
            <Link href="music/">Music</Link>
            <MusicParagraph>{MusicQuote}</MusicParagraph>
          </StyledMusic>
          {/* <Line_2 /> */}
          <StyledTutor>
            <Link href="tutoring/">Tutoring</Link>
            <TutorParagraph>{TutorQuote}</TutorParagraph>
          </StyledTutor>
          {isTabletOrMobile && (
            <>
              <Title>{Heading}</Title>
              <StyledMusic>
                <Link href="music/">Music</Link>
                <MusicParagraph>{MusicQuote}</MusicParagraph>
              </StyledMusic>
              <StyledTutor>
                <Link href="tutoring/">Tutoring</Link>
                <TutorParagraph>{TutorQuote}</TutorParagraph>
              </StyledTutor>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default HomePage;

// <StyledFooterContainer>
//   {/* do we need this anymore? */}
//   <Footer copy={copy} />
// </StyledFooterContainer>
