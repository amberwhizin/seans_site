import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import RandomNoteDrop from '../components/RandomNoteDrop';

const Container = styled.div`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

// https://bennettfeely.com/clippy/
// these are the controls for the skew, and skew position!
const polySkewDesktop = 15;
const desktopLeft = 6;
const polySkewMobile = 40;
const mobileTop = 4;

const MusicContainer = styled.div`
  position: absolute;
  width: ${50 + desktopLeft + polySkewDesktop / 2}%;
  height: 100%;
  right: 0;
  clip-path: polygon(0 0, 100% 0%, ${99 - polySkewDesktop}% 100%, 0% 100%);
  left: 0;
  background: #040707;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    background-color: #111f21;
    & ${HomeLink} {
      color: #9dbebb;
    }
  }
  @media (max-width: 1438px) {
    clip-path: polygon(0 0, 100% 0%, 100% ${99 - polySkewMobile}%, 0 100%);
    background: #040707;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${50 + polySkewMobile / 2}%;
    top: 0;
  }
`;

const TutorContainer = styled.div`
  position: absolute;
  width: ${50 - mobileTop + desktopLeft + polySkewDesktop / 2}%;
  height: 100%;
  right: 0;
  clip-path: polygon(${polySkewDesktop}% 0%, 100% 0%, 100% 100%, 0% 100%);
  background: #468189;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 2s, transform 0s;
  :hover {
    cursor: pointer;
    background-color: #4d8d96;
    & ${HomeLink} {
      color: #9dbebb;
    }
  }
  @media (max-width: 1438px) {
    clip-path: polygon(0 ${polySkewMobile}%, 100% 0%, 100% 100%, 0% 100%);
    background: #468189;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${50 - mobileTop + polySkewMobile / 2}%;
    bottom: 0;
  }
`;

const Heading = `Sean Keegan`;

const Title = styled.h1`
  /* clip-path  is messing with whats on top.*/
  color: #f4e9cd;
  z-index: 1;
  font-size: 9rem;
  position: absolute;
  top: 15vh;
  left: 50vw;
  text-align: center;
  width: 100%;
  font-family: 'Caveat', cursive;
  margin: 0;
  padding: 0;
  transition: transform 1200ms;
  transform: ${(props) => {
    if (props.wasTutoringClicked) {
      return 'translate(-50%, -50%) rotate(360deg);';
    }
    return 'translate(-50%, -50%) rotate(0);';
  }};
  @media (max-width: 1438px) {
    font-size: 5rem;
    top: 48vh;
  }
  @media (max-width: 340px) {
    font-size: 4rem;
  }
  @media (max-width: 270px) {
    font-size: 3.5rem;
  }
`;

const StyledMusic = styled.h2`
  text-align: center;
  font-family: 'Metal Mania', cursive;
  position: absolute;
  margin-right: ${polySkewDesktop + desktopLeft}%;
  @media (max-width: 1438px) {
    margin-right: 0;
    margin-bottom: 200px;
  }
`;

const StyledTutor = styled.h2`
  text-align: center;
  font-family: 'Merienda', sans-serif;
  position: absolute;
  @media (max-width: 1438px) {
    margin-top: 150px;
  }
`;

const TutorQuote = `"Best Tutor EVER!!"`;
const MusicQuote = `"Incredible, a must see!"`;

const MusicParagraph = styled.p`
  margin-top: 7rem;
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
  margin-top: 7rem;
  color: #f4e9cd;
  @media (max-width: 1438px) {
    font-size: 15px;
    margin: 0;
    padding: 0;
  }
`;
const HomePage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const router = useRouter();
  const [wasMusicClicked, setWasMusicClicked] = useState(false);
  const onClickMusic = () => {
    setWasMusicClicked(true);
    setTimeout(() => {
      router.push('/music/about/');
    }, 900);
  };
  const [wasTutoringClicked, setWasTutoringClicked] = useState(false);
  const onClickTutoring = () => {
    setWasTutoringClicked(true);
    setTimeout(() => {
      router.push('/tutoring/about/');
    }, 900);
  };

  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <Title wasTutoringClicked={wasTutoringClicked}>{Heading}</Title>
          <MusicContainer onClick={onClickMusic}>
            <StyledMusic>
              <HomeLink onClick={onClickMusic}>Music</HomeLink>
              <MusicParagraph>{MusicQuote}</MusicParagraph>
            </StyledMusic>
          </MusicContainer>
          <TutorContainer onClick={onClickTutoring}>
            <StyledTutor>
              <HomeLink onClick={onClickTutoring}>Tutoring</HomeLink>
              <TutorParagraph>{TutorQuote}</TutorParagraph>
            </StyledTutor>
          </TutorContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Title wasTutoringClicked={wasTutoringClicked}>{Heading}</Title>
          <MusicContainer onClick={onClickMusic}>
            <StyledMusic>
              <HomeLink onClick={onClickMusic}>Music</HomeLink>
              <MusicParagraph>{MusicQuote}</MusicParagraph>
            </StyledMusic>
          </MusicContainer>
          <TutorContainer onClick={onClickTutoring}>
            <StyledTutor>
              <HomeLink onClick={onClickTutoring}>Tutoring</HomeLink>
              <TutorParagraph>{TutorQuote}</TutorParagraph>
            </StyledTutor>
          </TutorContainer>
        </>
      )}
      <RandomNoteDrop
        wasMusicClicked={wasMusicClicked}
        isTabletOrMobile={isTabletOrMobile}
      />
    </Container>
  );
};

export default HomePage;
