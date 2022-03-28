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
  @media (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

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
  @media (max-width: 1438px) {
    clip-path: polygon(100% 0, 0% 100%, 0 0);
  }
`;
// https://bennettfeely.com/clippy/
const MusicContainer = styled.div`
  filter: grayscale(1);
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media (max-width: 1438px) {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const StyledTutor = styled.div`
  z-index: 100;
  position: absolute;
  left: 7vw;
  bottom: 73vh;
  color: #343a40;
  /* text-shadow: grey 1px 0 2px; */
  font-family: 'Cutive Mono', monospace;
  font-size: 8.5rem;
  @media (max-width: 1438px) {
    /* bottom: 0; */
    /* margin-right: 0; */
    /* margin-bottom: 100px; */
  }
  @media (max-width: 340px) {
    margin-bottom: 50px;
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
  @media (max-width: 1438px) {
    /* margin-right: 0; */
    /* margin-top: 100px; */
  }
  @media (max-width: 340px) {
    margin-top: 50px;
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
  z-index: 1;
  position: fixed;
  margin: 0;
  padding: 0;
  top: 25vh;
  left: 31vw;
  width: 40%;
  /* opacity: 0.9; */
  transition: transform 1200ms;
  transform: ${(props) => {
    if (props.wasTutoringClicked) {
      return 'translate(-50%, -50%) rotate(360deg);';
    }
    return;
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
