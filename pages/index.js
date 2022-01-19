import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundImage from '../public/pics/5thAveB.jpg';
import { useIsTabletOrMobile } from '../hooks';
import Footer from '../components/Footer';

const X = 4;
function Garden() {
  return (
    <Image
      src={BackgroundImage} //pass in image
      alt="A white house with a white fence and a new lovely new garden landscaping in the front, with a path down the middle"
      width={6032 / X}
      height={3024 / X}
    />
  );
}

const Y = 4;
function GardenMobile() {
  return (
    <Image
      src={BackgroundImage}
      alt="A white house with a white fence and a new lovely new garden landscaping in the front, with a path down the middle"
      width={4032 / Y}
      height={3024 / Y}
    />
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = `Sean Keegan`;
const Title = styled.h1`
  position: fixed;
  padding: 1.4rem;
  top: 0;
  margin: 5rem;
  font-size: 3rem;
  border: 1px solid grey;
`;

const StyledMusic = styled.div`
  margin-top: 30rem;
  padding-right: 20rem;
  text-align: center;
`;

const StyledTutor = styled.div`
  margin-top: 30rem;
  padding-left: 20rem;
  text-align: center;
`;

const MusicQuote = `"Best Tutor EVER!!"`;
const TutorQuote = `"Incredible, a must see!"`;

const MusicParagraph = styled.p`
  margin-top: 9rem;
`;
const TutorParagraph = styled.p`
  margin-top: 9rem;
`;

const Line_1 = styled.span`
  position: absolute;
  height: 40rem;
  /* bottom: 1rem; */
  bottom: 1px;
  border-left: 2px solid black;
`;
const Line_2 = styled.span`
  position: absolute;
  height: 45rem;
  top: 12.2rem;
  border-left: 2px solid black;
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
      {!isTabletOrMobile && (
        <>
          <Line_1 />
          <Title>{Heading}</Title>
          <StyledMusic>
            <Link href="music/">Music</Link>
            <MusicParagraph>{MusicQuote}</MusicParagraph>
          </StyledMusic>
          <Line_2 />
          <StyledTutor>
            <Link href="tutoring/">Tutoring</Link>
            <TutorParagraph>{TutorQuote}</TutorParagraph>
          </StyledTutor>
        </>
      )}
    </Container>
  );
}

export default HomePage;

//  {isTabletOrMobile && (
//   <>
//   <StyledFooterContainer>
//     {/* do we need this anymore? */}
//     <Footer copy={copy} />
//   </StyledFooterContainer>
// </>
// )}
