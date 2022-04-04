import { useIsTabletOrMobile } from '../hooks';
import styled from 'styled-components';
// import {
//   Container,
//   TutorContainer,
//   MusicContainer,
//   StyledTutor,
//   StyledMusic,
//   HomeLink,
//   Title,
//   ImageContainerTutor,
//   ImageContainerMusic,
// } from '../styles/IndexStyles.js';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import RandomNoteDrop from '../components/RandomNoteDrop';
import BackgroundMusic from '../public/pics/ylanite_koppens_music.jpeg';
import BackgroundTutoring from '../public/pics/cropped_marjanNo.png';
import GreenTapeImg from '../public/pics/cropped_green_label.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

// https://bennettfeely.com/clippy/
// these are the controls for the skew, and skew position!
const polySkewMobile = 40;
const mobileTop = 4;

const TutorContainer = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  /* these aren't doing very much just here because causing issues with clippy without */
  /* refactor one day */
  /* laptops */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
    flex: 1;
    top: 0;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: landscape) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
  }

  /* ipads */
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
  }

  /* iphone 8... */
  @media only screen and (min-width: 414px) and (max-width: 736px) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
  }

  /* iphone 5... */
  @media only screen and (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
  }
`;

// https://bennettfeely.com/clippy/
const MusicContainer = styled.div`
  filter: grayscale(1);
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
  /* laptops */
  @media screen and (min-width: 1200px) and (max-width: 1600px) and (orientation: landscape) {
    clip-path: polygon(0 92%, 100% 0%, 100% 100%, 0% 100%);
    height: ${72 - mobileTop + 50 / 2}%;
    bottom: 0;
  }

  @media screen and (min-width: 1200px) and (max-width: 1600px) and (orientation: portrait) {
    clip-path: polygon(0 54%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 50 / 2}%;
    bottom: 0;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: landscape) {
    clip-path: polygon(0 79%, 100% 0%, 100% 100%, 0% 100%);
    height: ${63 - mobileTop + 50 / 2}%;
    bottom: 0;
  }
  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait) {
    clip-path: polygon(0 64%, 100% 0%, 100% 100%, 0% 100%);
    height: ${53 - mobileTop + 50 / 2}%;
    bottom: 0;
  }

  /* ipads */
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    clip-path: polygon(0 52%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 50 / 2}%;
    bottom: 0;
  }

  /* iphone 8... */
  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {
    clip-path: polygon(0 92%, 100% 0%, 100% 100%, 0% 100%);
    height: ${72 - mobileTop + 50 / 2}%;
    bottom: 0;
  }

  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {
    clip-path: polygon(0 42%, 100% 0%, 100% 100%, 0% 100%);
    height: ${48 - mobileTop + 50 / 2}%;
    bottom: 0;
  }

  /* iphone 5... landscape=min */
  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: portrait) {
    clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
    height: ${45 - mobileTop + 50 / 2}%;
    bottom: 0;
  }
`;

const StyledTutor = styled.div`
  z-index: 100;
  position: absolute;
  left: 7vw;
  bottom: 73vh;
  color: #343a40;
  font-family: 'Cutive Mono', monospace;
  font-size: 8.5rem;

  /* laptop */
  @media screen and (min-width: 1200px) and (max-width: 1600px) and (orientation: portrait) {
    top: 7%;
    left: 21vw;
    font-size: 9rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait) {
    top: 8%;
    left: 16vw;
    font-size: 9rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    left: 10vw;
    top: 6%;
    font-size: 6rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    left: 20vw;
    top: 6%;
    font-size: 6rem;
  }

  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {
    left: 10vw;
    top: 6%;
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {
    left: 17vw;
    top: 6%;
    font-size: 3.5rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: landscape) {
    left: 10vw;
    top: 6%;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: portrait) {
    left: 10vw;
    top: 6%;
    font-size: 3.5rem;
  }
`;

const StyledMusic = styled.div`
  position: absolute;
  top: 69vh;
  right: 4vw;
  color: #343a40;
  font-family: 'Metal Mania', cursive;
  font-size: 10rem;
  letter-spacing: 1rem;
  filter: blur(0);

  @media screen and (min-width: 1200px) and (max-width: 1600px) and (orientation: portrait) {
    top: 76%;
    right: 30vw;
    font-size: 9rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: landscape) {
    top: 70%;
    right: 5vw;
    font-size: 9rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait) {
    top: 70%;
    right: 27vw;
    font-size: 9rem;
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    right: 4vw;
    top: 77%;
    font-size: 7rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    right: 22vw;
    top: 70%;
    font-size: 7.5rem;
  }

  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {
    font-size: 4.5rem;
  }

  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {
    right: 17vw;
    top: 74%;
    font-size: 4.2rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: landscape) {
    top: 77%;
    right: 5vw;
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: portrait) {
    top: 70%;
    left: 22vw;
    font-size: 3.5rem;
  }

  @media (max-width: 270px) {
    font-size: 1.7rem;
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  font-size: 9rem;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Title = styled.div`
  display: block;
  z-index: 1;
  position: fixed;
  margin: 0;
  padding: 0;
  top: 25vh;
  left: 31vw;
  width: 40%;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-name: ${(props) => {
    if (props.wasTutoringClicked) {
      return 'rotate';
    }
    return;
  }};
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* laptop */
  @media screen and (min-width: 1200px) and (max-width: 1600px) and (orientation: landscape) {
    top: 26%;
    left: 20vw;
    width: 70%;
    transform: rotate(-3deg);
  }

  @media screen and (min-width: 1200px) and (max-width: 1600px) and (orientation: portrait) {
    top: 31%;
    left: 13vw;
    width: 70%;
    transform: rotate(2deg);
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: landscape) {
    top: 28%;
    left: 18vw;
    width: 60%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait) {
    top: 34%;
    left: 19vw;
    width: 60%;
  }

  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    top: 21%;
    left: 20vw;
    width: 60%;
    transform: rotate(-5deg);
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    top: 31%;
    left: 13vw;
    width: 70%;
    transform: rotate(2deg);
  }

  /* iphone 8.... */
  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {
    top: 12%;
    left: 25vw;
    width: 60%;
    transform: rotate(3deg);
  }

  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {
    top: 31%;
    left: 8vw;
    width: 80%;
    transform: rotate(3deg);
  }

  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: portrait) {
    top: 28%;
    left: 14vw;
    width: 75%;
    transform: rotate(9deg);
  }

  @media only screen and (min-width: 320px) and (max-width: 413px) and (orientation: landscape) {
    top: 15%;
    left: 14vw;
    width: 75%;
    transform: rotate(-7deg);
  }
`;

const ImageContainerTutor = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;
const ImageContainerMusic = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  opacity: 0.7;
  @media (max-width: 1438px) {
    filter: blur(2px);
  }
`;

const TutoringImage = () => {
  return (
    <ImageContainerTutor>
      <Image
        src={BackgroundTutoring}
        alt="an image of lined paper usually used for school work"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </ImageContainerTutor>
  );
};
const MusicImage = () => {
  return (
    <ImageContainerMusic>
      <Image
        src={BackgroundMusic}
        alt="an image of three pieces of ripped sheet music on top one another"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </ImageContainerMusic>
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
            <HomeLink onClick={onClickTutoring}>
              <StyledTutor>TUTORING</StyledTutor>
            </HomeLink>
          </TutorContainer>

          <Title wasTutoringClicked={wasTutoringClicked}>
            <Image
              alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
              src={GreenTapeImg}
            />
          </Title>

          <MusicContainer onClick={onClickMusic}>
            <MusicImage ifMusicImageExists={MusicImage} />
            <HomeLink onClick={onClickMusic}>
              <StyledMusic>MUSIC</StyledMusic>
            </HomeLink>
          </MusicContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <TutorContainer onClick={onClickTutoring}>
            <TutoringImage />
            <HomeLink onClick={onClickTutoring}>
              <StyledTutor>TUTORING</StyledTutor>
            </HomeLink>
          </TutorContainer>

          <Title wasTutoringClicked={wasTutoringClicked}>
            <Image
              alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
              src={GreenTapeImg}
            />
          </Title>

          <MusicContainer onClick={onClickMusic}>
            <MusicImage />
            <HomeLink onClick={onClickMusic}>
              <StyledMusic>MUSIC</StyledMusic>
            </HomeLink>
          </MusicContainer>
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
