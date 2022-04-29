import { useIsTabletOrMobile } from '../hooks';
import {
  Container,
  TutorContainer,
  MusicContainer,
  StyledTutor,
  StyledMusic,
  HomeLink,
  Title,
  ImageContainerTutor,
  ImageContainerMusic,
  TutoringButton,
  MusicButton,
} from '../styles/IndexStyles.js';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import RandomNoteDrop from '../components/RandomNoteDrop';
import BackgroundImg from '../public/pics/3.png';
import BackgroundImgMobile from '../public/pics/nothing_but.png';
// import BackgroundMusic from '../public/pics/ylanite_koppens_music.jpeg';
// import BackgroundTutoring from '../public/pics/cropped_marjanNo.png';
import GreenTapeImg from '../public/pics/green_tape_mobile.png';

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
const BackGround = () => {
  return (
    <Image
      src={BackgroundImg}
      alt="an image of three pieces of ripped sheet music on top one another"
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      priority
    />
  );
};
const BackGroundMobile = () => {
  return (
    <Image
      src={BackgroundImgMobile}
      alt="an image of three pieces of ripped sheet music on top one another"
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      priority
    />
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
          {/* <MusicContainer onClick={onClickMusic}>
              <MusicImage ifMusicImageExists={MusicImage} />
            </MusicContainer>
            <StyledMusic onClick={onClickMusic}>MUSIC</StyledMusic>
          <Title wasTutoringClicked={wasTutoringClicked}>
            <Image
              alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
              src={GreenTapeImg}
            />
          </Title>
            <TutorContainer onClick={onClickTutoring}>
              <TutoringImage />
            </TutorContainer>
            <StyledTutor onClick={onClickTutoring}>TUTORING</StyledTutor> */}
          <TutoringButton onClick={onClickTutoring}>
            <BackGround />
          </TutoringButton>
          <MusicButton onClick={onClickMusic}>
            <BackGround />
          </MusicButton>
        </>
      )}
      {isTabletOrMobile && (
        <>
          {/* <TutorContainer onClick={onClickTutoring}>
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
            </HomeLink> //remove this
          </MusicContainer> */}

          <TutoringButton onClick={onClickTutoring}>
            <BackGroundMobile />
          </TutoringButton>
          <StyledTutor onClick={onClickTutoring}>TUTORING</StyledTutor>
          <Title wasTutoringClicked={wasTutoringClicked}>
            <Image
              alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
              src={GreenTapeImg}
            />
          </Title>
          <MusicButton onClick={onClickMusic}>
            <BackGroundMobile />
          </MusicButton>
          <StyledMusic onClick={onClickMusic}>MUSIC</StyledMusic>
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
