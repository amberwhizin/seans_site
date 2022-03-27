import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import RandomNoteDrop from '../components/RandomNoteDrop';
import BackgroundMusic from '../public/pics/ylanite_koppens_music.jpeg';
import BackgroundTutoring from '../public/pics/cropped_marjanNo.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

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
    @media (max-width: 375px) {
      font-size: 40px;
    }
  }
`;

// https://bennettfeely.com/clippy/
// these are the controls for the skew, and skew position!
const desktopLeft = 6;
const polySkewDesktop = 15;
const polySkewMobile = 40;
const mobileTop = 4;

const TutorContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  :hover {
    cursor: pointer;
    & ${HomeLink} {
      color: #9dbebb;
    }
  }
`;
const MusicContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  transition: background-color 2s, transform 0s;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  :hover {
    cursor: pointer;
    & ${HomeLink} {
      color: #9dbebb;
    }
  }
`;

const Heading = `Sean Keegan`;
const Title = styled.h1`
  color: #f4e9cd;
  z-index: 1;
  font-size: 9rem;
  position: fixed;
  top: 17vh;
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
    top: 48%;
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
  position: fixed;
  margin-right: ${polySkewDesktop + desktopLeft}%;
  @media (max-width: 1438px) {
    top: 0;
    margin-right: 0;
    margin-top: 100px;
  }
  @media (max-width: 340px) {
    margin-top: 50px;
  }
`;

const StyledTutor = styled.h2`
  text-align: center;
  font-family: 'Merienda', sans-serif;
  position: fixed;
  @media (max-width: 1438px) {
    bottom: 0;
    margin-right: 0;
    margin-bottom: 100px;
  }
  @media (max-width: 340px) {
    margin-bottom: 50px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MusicImage = () => {
  return (
    <ImageContainer>
      <Image
        src={BackgroundMusic}
        alt="an image of three pieces of ripped sheet music on top one another"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        // priority
      />
    </ImageContainer>
  );
};
const TutoringImage = () => {
  return (
    <ImageContainer>
      <Image
        src={BackgroundTutoring}
        alt="image of lined paper for usually used for school work"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        // priority
      />
    </ImageContainer>
  );
};

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
          <TutorContainer onClick={onClickTutoring}>
            <TutoringImage />
            {/* <StyledTutor> */}
            {/* <HomeLink onClick={onClickTutoring}>Tutoring</HomeLink> */}
            {/* </StyledTutor> */}
          </TutorContainer>
          {/* <Title wasTutoringClicked={wasTutoringClicked}>{Heading}</Title> */}
          <MusicContainer onClick={onClickMusic}>
            <MusicImage />
            {/* <StyledMusic> */}
            {/* <HomeLink onClick={onClickMusic}>Music</HomeLink> */}
            {/* </StyledMusic> */}
          </MusicContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <Title wasTutoringClicked={wasTutoringClicked}>{Heading}</Title>
          <MusicContainer onClick={onClickMusic}>
            <MusicImage />
            <StyledMusic>
              <HomeLink onClick={onClickMusic}>Music</HomeLink>
            </StyledMusic>
          </MusicContainer>
          <TutorContainer onClick={onClickTutoring}>
            <StyledTutor>
              <HomeLink onClick={onClickTutoring}>Tutoring</HomeLink>
              <TutoringImage />
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
