import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanGuitarImg from '../../public/pics/sean_website.jpeg';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
Odio molestiae repellat necessitatibus ut corporis earum repellendus. Sed doloribus quam corrupti eos. Atque voluptatum non corporis ipsa beatae laboriosam. Iure sed est aut et consequatur iste sed exercitationem voluptatum. Eaque aspernatur aut et laboriosam dolore eos architecto.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.`;

const Container = styled.div`
  margin-top: 6.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1438px) {
    position: absolute;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
  }
`;


function Family() {
  return (
    <Image
      src={seanGuitarImg}
      alt="the musician tutor holding a classical guitar sitting on a stone garden bed in a well groomed park"
      width={4032}
      height={3024}
      placeholder="blur"
      layout="intrinsic"
      objectFit="cover"
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
          <ImageContainer>
            <Family />
          </ImageContainer>
          <TextContainer>
            <p>{AboutBlurb}</p>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default About;
