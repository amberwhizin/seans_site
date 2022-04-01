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
  /* ipad , ipad air & ipad mini */
  @media (max-width: 820px) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + 100 / 2}%;
    /* background-color: purple; */
    flex: 1;
    top: 0;
  }
  /* iphone 8 & iphone 8 plus max-width */
  @media (max-width: 414px) {
    clip-path: polygon(0 0, 100% 0%, 100% ${100 - polySkewMobile}%, 0 100%);
    height: ${50 + polySkewMobile / 2}%;
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
  /* ipad , ipad air & ipad mini */
  @media (max-width: 820px) {
    clip-path: polygon(0 57%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 50 / 2}%;
    flex: 1;
    bottom: 0;
  }
  @media (max-width: 428px) {
    clip-path: polygon(0 ${polySkewMobile}%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + polySkewMobile / 2}%;
    flex: 1;
    bottom: 0;
  }
  /* iphone 8 & iphone 8 plus max-width */
  @media (max-width: 414px) {
    clip-path: polygon(0 ${polySkewMobile}%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + polySkewMobile / 2}%;
    flex: 1;
    bottom: 0;
  }
  /* iphone 8 plus max-height */
  @media (max-height: 736px) {
    clip-path: polygon(0 45%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 45 / 2}%;
  }
  /* iphone 12/13 pro max */
  @media (max-width: 375px) {
    clip-path: polygon(0 47%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 45 / 2}%;
  }
  /* iphone 11 pro */
  @media (max-height: 812px) {
    clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 45 / 2}%;
  }
  @media (max-width: 360px) {
    clip-path: polygon(0 41%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 47 / 2}%;
  }

  @media (max-width: 340px) {
    clip-path: polygon(0 55%, 100% 0%, 100% 100%, 0% 100%);
    height: ${50 - mobileTop + 50 / 2}%;
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
  @media (max-width: 1438px) {
    left: 18vw;
    top: 11%;
    font-size: 6rem;
  }
  /* ipad , ipad air & ipad mini */
  @media (max-width: 820px) {
    left: 25vw;
    top: 6%;
    font-size: 5rem;
  }
  @media (max-width: 428px) {
    left: 23vw;
    top: 6%;
    font-size: 3rem;
  }
  /* iphone 8 & iphone 8 plus max-width */
  @media (max-width: 414px) {
    left: 20vw;
    top: 11%;
    font-size: 3rem;
  }
  //my iphone se 2nd gen
  @media (max-width: 340px) {
    top: 13%;
    left: 19.5vw;
    font-size: 2.5rem;
  }
  @media (max-width: 270px) {
    left: 25vw;
    font-size: 1.7rem;
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
  /* media queries */
  @media (max-width: 1438px) {
    font-size: 6rem;
    margin-bottom: 0.5rem;
  }
  /* ipad , ipad air & ipad mini */
  @media (max-width: 820px) {
    left: 33vw;
    top: 77%;
    font-size: 6rem;
  }
  @media (max-width: 428px) {
    left: 31vw;
    top: 81%;
    font-size: 3rem;
  }
  /* iphone 8 & iphone 8 plus max-width */
  @media (max-width: 414px) {
    left: 29vw;
    top: 80%;
    font-size: 3rem;
  }
  //my iphone se 2nd gen
  @media (max-width: 340px) {
    top: 75%;
    left: 25vw;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
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
  /* ipad , ipad air & ipad mini */
  @media (max-width: 820px) {
    top: 33%;
    width: 70%;
    left: 14vw;
  }
  /* iphone 12/13 pro max */
  @media (max-width: 428px) {
    top: 35%;
    width: 80%;
    left: 10vw;
  }
  //iphone 8 & iphone 8 plus, iphone xr width
  @media (max-width: 414px) {
    top: 35%;
    left: 6vw;
    width: 85%;
  }
  /* iphone se, iphone 11 pro */
  @media (max-width: 375px) {
    top: 36%;
  }
  /* iphone 11 pro -height */
  @media (max-height: 812px) {
    top: 32.5%;
  }
  //iphone 8 plus -height
  @media (max-height: 736px) {
    top: 29%;
    left: 6vw;
    width: 90%;
  }
  /* iphone se -height */
  @media (max-height: 667px) {
    top: 29%;
  }
  @media (max-width: 360px) {
    top: 32%;
  }
  //iphone se 2nd gen
  @media (max-width: 340px) {
    top: 30%;
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
// Thanks to - site Photo by Ylanite Koppens from Pexels - for the music sheet paper!
const MusicImage = () => {
  return (
    <ImageContainerMuisc>
      <Image
        src={BackgroundMusic}
        alt="an image of three pieces of ripped sheet music on top one another"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </ImageContainerMuisc>
  );
};
// thanks to MarjanNo for the photo! - "https://pixabay.com/users/marjanno-8445616/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3360876">MarjanNo</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3360876">Pixabay
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
          {/* Tutoring div */}
          <TutorContainer onClick={onClickTutoring}>
            <TutoringImage />
            <HomeLink onClick={onClickTutoring}>
              <StyledTutor>TUTORING</StyledTutor>
            </HomeLink>
          </TutorContainer>
          {/* Green tape div */}
          <Title wasTutoringClicked={wasTutoringClicked}>
            <Image
              alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
              src={GreenTapeImg}
            />
          </Title>
          {/* Music div */}
          <MusicContainer onClick={onClickMusic}>
            <MusicImage />
            <HomeLink onClick={onClickMusic}>
              <StyledMusic>MUSIC</StyledMusic>
            </HomeLink>
          </MusicContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          {/* Tutoring div */}
          <TutorContainer onClick={onClickTutoring}>
            <TutoringImage />
            <HomeLink onClick={onClickTutoring}>
              <StyledTutor>TUTORING</StyledTutor>
            </HomeLink>
          </TutorContainer>
          {/* Green tape div */}
          <Title wasTutoringClicked={wasTutoringClicked}>
            <Image
              alt="an image of a ripped piece of green tape with sean keegan written on it, the owner of site"
              src={GreenTapeImg}
            />
          </Title>
          {/* Music div */}
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
