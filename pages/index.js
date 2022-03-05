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

const MusicContainer = styled.div`
  background: #040707;
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 2s, transform 0s;
  :hover {
    cursor: pointer;
    background-color: #111f21;
    & ${HomeLink} {
      color: #9dbebb;
    }
  }
  @media (max-width: 1438px) {
    background: #040707;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const TutorContainer = styled.div`
  background: #468189;
  flex: 1;
  width: 100%;
  height: 100vh;
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
    background: #468189;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Heading = `Sean Keegan`;

const Title = styled.h1`
  font-size: 9rem;
  position: fixed;
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
`;

const StyledMusic = styled.h2`
  padding-top: 20rem;
  text-align: center;
  font-family: 'Metal Mania', cursive;
  @media (max-width: 1438px) {
    margin: 0;
    padding: 0;
  }
`;

const StyledTutor = styled.h2`
  padding-top: 20rem;
  text-align: center;
  font-family: 'Merienda', sans-serif;
  @media (max-width: 1438px) {
    margin: 0;
    padding: 0;
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
