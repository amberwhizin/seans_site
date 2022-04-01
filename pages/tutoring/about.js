import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanTutoringImg from '../../public/pics/sean_mel_.png';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
Odio molestiae repellat necessitatibus ut corporis earum repellendus. Sed doloribus quam corrupti eos. Atque voluptatum non corporis ipsa beatae laboriosam. Iure sed est aut et consequatur iste sed exercitationem voluptatum. Eaque aspernatur aut et laboriosam dolore eos architecto.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.`;

const Container = styled.div`
  margin-top: 4rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1438px) {
    /* position: absolute; */
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
  }
`;

const X = 3;
function Family() {
  return (
    <Image
      src={seanTutoringImg}
      alt="two people with their arms on eachothers shoulders facing camera smiling. The background is lost of snow and trees"
      width={7000 / X}
      height={8752 / X}
      placeholder="blur"
      priority
    />
  );
}

const ImageContainer = styled.div`
  padding: 1rem;
`;

const TextContainer = styled.div`
  display: block;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  padding: 2rem;
  line-height: 1.9;
  @media (max-width: 820px) {
    text-align: center;
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

const About = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <ImageContainer>
            <Family />
          </ImageContainer>
          <TextContainer>
            <HeaderContainer>{AboutTitle}</HeaderContainer>
            <p>{AboutBlurb}</p>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <HeaderContainer>{AboutTitle}</HeaderContainer>
          <Family />
          <TextContainer>
            <p>{AboutBlurb}</p>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default About;
