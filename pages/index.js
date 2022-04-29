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
} from '../styles/IndexStyles.js';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import RandomNoteDrop from '../components/RandomNoteDrop';
import BackgroundMusic from '../public/pics/paper_sk.png';
import BackgroundTutoring from '../public/pics/cropped_marjanNo.png';
import GreenTapeImg from '../public/pics/cropped_mobile_green_label.png';

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
            <MusicContainer onClick={onClickMusic}>
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
            <StyledTutor onClick={onClickTutoring}>TUTORING</StyledTutor>
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
