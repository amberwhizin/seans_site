import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';
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
const desktopLeft = 6;
const polySkewDesktop = 15;
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
  @media (max-width: 414px) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + polySkewMobile / 2}%;
    /* background-color: purple; */
    flex: 1;
    top: 0;
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
  @media (max-width: 414px) {
    /* height: 50%; */
    height: ${50 - mobileTop + polySkewMobile / 2}%;

    /* background-color: red; */
    /* right: 0; */
    clip-path: polygon(0 ${polySkewMobile}%, 100% 0%, 100% 100%, 0% 100%);
    flex: 1;
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
   /* media queries */
  @media (max-width: 414px) {
    left: 12vw;
    bottom: 52vh;
    font-size: 4rem;
  }
`;

const StyledMusic = styled.div`
  position: absolute;
  top: 69vh;
  right: 4vw;
  color: #343a40;
  font-family: 'Metal Mania', cursive;
  font-size: 9.5rem;
  letter-spacing: 1rem;
  filter: blur(0);
  /* media queries */
  @media (max-width: 414px) {
    top: 48vh;
    right: 16vw;
    font-size: 4.5rem;
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  font-size: 9rem;
  :hover {
    cursor: pointer;
    opacity: 0.9;
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

const Title = styled.div`
  display: block;
  z-index: 1;
  position: fixed;
  margin: 0;
  padding: 0;
  top: 25vh;
  left: 31vw;
  width: 40%;
  transition: transform 1200ms;
  transform: ${(props) => {
    if (props.wasTutoringClicked) {
      return 'translate(-10%, -10%) rotate(380deg);';
    }
    return;
  }};
  @media (max-width: 414px) {
    top: 36%;
    width: 80%;
    left: 10vw;
  }
`;

const ImageContainerTutor = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;
const ImageContainerMuisc = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  opacity: 0.7;
`;

const MusicImage = () => {
  return (
    <ImageContainerMuisc>
      <Image
        src={BackgroundMusic}
        alt="an image of three pieces of ripped sheet music on top one another"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        // priority
      />
    </ImageContainerMuisc>
  );
};
const TutoringImage = () => {
  return (
    <ImageContainerTutor>
      <Image
        src={BackgroundTutoring}
        alt="image of lined paper for usually used for school work"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        // priority
      />
    </ImageContainerTutor>
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
          <>
            <TutorContainer onClick={onClickTutoring}>
              <TutoringImage />
              <HomeLink onClick={onClickTutoring}>
                <StyledTutor>TUTORING</StyledTutor>
              </HomeLink>
            </TutorContainer>
          </>
          <>
            <Title wasTutoringClicked={wasTutoringClicked}>
              <Image
                alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
                src={GreenTapeImg}
              />
            </Title>
          </>
          <>
            <MusicContainer onClick={onClickMusic}>
              <MusicImage ifMusicImageExists={MusicImage} />
              <HomeLink onClick={onClickMusic}>
                <StyledMusic>MUSIC</StyledMusic>
              </HomeLink>
            </MusicContainer>
          </>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <>
            <TutorContainer onClick={onClickTutoring}>
              <TutoringImage />
              <HomeLink onClick={onClickTutoring}>
                <StyledTutor>TUTORING</StyledTutor>
              </HomeLink>
            </TutorContainer>
          </>
          <>
            <Title wasTutoringClicked={wasTutoringClicked}>
              <Image
                alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
                src={GreenTapeImg}
              />
            </Title>
          </>
          <>
            <MusicContainer onClick={onClickMusic}>
              <MusicImage />
              <HomeLink onClick={onClickMusic}>
                <StyledMusic>MUSIC</StyledMusic>
              </HomeLink>
            </MusicContainer>
          </>
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
