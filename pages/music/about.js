import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanGuitarImg from '../../public/pics/sean_website.jpeg';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  @media (max-width: 1438px) {
    position: absolute;
    flex-direction: column;
    padding: 1rem;
  }
`;

function SeanGuitar() {
  return (
    <Image
      src={seanGuitarImg}
      alt="Sean Keegan holding a classical guitar sitting on a stone garden bed in a well groomed park"
      placeholder="blur"
      priority
    />
  );
}

const ImageContainer = styled.div`
  padding: 1rem;
  @media (max-width: 820px) {
    padding: 0;
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
  line-height: 1.9;
  @media (max-width: 820px) {
    margin-bottom: 0.5rem;
    padding: 1px;
    line-height: 1.7;
  }
`;

const HeaderContainer = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  @media (max-width: 820px) {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }
`;

const About = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { about = {} } = copy;
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <ImageContainer>
            <SeanGuitar />
          </ImageContainer>
          <TextContainer>
            <HeaderContainer>Sean Keegan</HeaderContainer>
            <p>
              {about.blurb1} <br />
              <br />
              {about.blurb2}
            </p>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <HeaderContainer>Sean Keegan</HeaderContainer>
          <ImageContainer>
            <SeanGuitar />
          </ImageContainer>
          <TextContainer>
            <p>
              {about.blurb1} <br />
              <br />
              {about.blurb2}
            </p>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default About;
