import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import RandomNoteDrop from '../components/RandomNoteDrop';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HomeLink = styled.a`
  text-decoration: none;
  font-size: 4rem;
  color: white;
  /* display: flex; */

  &:hover,
  &:focus {
    color: #9dbebb;
    cursor: pointer;
  }
  @media (max-width: 1438px) {
    :hover {
      cursor: pointer;
    }
    @media (max-width: 375px) {
      border: 3px solid red;
    }
  }
`;

const MusicContainer = styled.div`
  border: solid purple;
  background-color: purple;
  height: 50%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

const TutorContainer = styled.div`
  border: solid blue;
  background-color: blue;
  height: 50%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

const MusicPosition = styled.div`
  font-size: 5rem;
  margin: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TutorPosition = styled.div`
  font-size: 5rem;
  margin: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const FirstName = `Sean`;
const LastName = `Keegan`;

const Name = styled.h1`
  color: white;
  /* font-size: 8rem; */
  /* transition: transform 1200ms;
  transform: ${(props) => {
    if (props.wasTutoringClicked) {
      return 'translate(-50%, -50%) rotate(360deg);';
    }
    return 'translate(-50%, -50%) rotate(0);';
  }}; */
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
            <HomeLink onClick={onClickTutoring}>
              <TutorPosition>Tutoring</TutorPosition>
            </HomeLink>
            <Name wasTutoringClicked={wasTutoringClicked}>{FirstName}</Name>
          </TutorContainer>
          <MusicContainer onClick={onClickMusic}>
            <Name wasTutoringClicked={wasTutoringClicked}>{LastName}</Name>
            <HomeLink onClick={onClickMusic}>
              <MusicPosition>Music</MusicPosition>
            </HomeLink>
          </MusicContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <MusicContainer onClick={onClickTutoring}>
            <HomeLink onClick={onClickTutoring}>
              <TutorPosition>Tutoring</TutorPosition>
            </HomeLink>
            <Name wasTutoringClicked={wasTutoringClicked}>{FirstName}</Name>
          </MusicContainer>
          <TutorContainer onClick={onClickMusic}>
            <Name wasTutoringClicked={wasTutoringClicked}>{LastName}</Name>
            <HomeLink onClick={onClickMusic}>
              <TutorPosition>
                <MusicPosition>Music</MusicPosition>
              </TutorPosition>
            </HomeLink>
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
