import styled from 'styled-components';
import Image from 'next/image';
import BackgroundImage from '../../public/pics/5thAveB.jpg';
import { useIsTabletOrMobile } from '../../hooks';
import Footer from '../../components/Footer';

const X = 4;
function Garden() {
  return (
    <Image
      src={BackgroundImage} 
      alt="A white house with a white fence and a new lovely new garden landscaping in the front, with a path down the middle"
      width={6032 / X}
      height={3024 / X}
    />
  );
}

const Y = 4;
function GardenMobile() {
  return (
    <Image
      src={BackgroundImage} 
      alt="A white house with a white fence and a new lovely new garden landscaping in the front, with a path down the middle"
      width={4032 / Y}
      height={3024 / Y}
    />
  );
}

const Container = styled.div`
  position: absolute;
  top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFooterContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 6.5rem;
  @media (max-height: 800px) {
    margin-top: 5.5rem;
  }
  @media (max-height: 750px) {
    margin-top: 4rem;
  }
  @media (max-height: 667px) {
    margin-top: 3rem;
  }
  @media (max-height: 640px) {
    margin-top: 2rem;
  }
  @media (max-height: 600px) {
    margin-top: 0;
  }
`;

function HomePage({ copy }) {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && <Garden />}
      {isTabletOrMobile && (
        <>
          <div>
            <GardenMobile />
          </div>
          <StyledFooterContainer>
            <Footer copy={copy} />
          </StyledFooterContainer>
        </>
      )}
    </Container>
  );
}

export default HomePage;
