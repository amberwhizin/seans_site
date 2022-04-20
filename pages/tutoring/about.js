import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanTutoringImg from '../../public/pics/sean_mel_.png';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = ` 
Odio molestiae repellat necessitatibus ut corporis earum repellendus. Sed doloribus quam corrupti eos. Atque voluptatum non corporis ipsa beatae laboriosam. Iure sed est aut et consequatur iste sed exercitationem voluptatum. Eaque aspernatur aut et laboriosam dolore eos architecto.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
Odio molestiae repellat necessitatibus ut corporis earum repellendus. Sed doloribus quam corrupti eos. Atque voluptatum non corporis ipsa beatae laboriosam. Iure sed est aut et consequatur iste sed exercitationem voluptatum. Eaque aspernatur aut et laboriosam dolore eos architecto.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.`;

const Container = styled.div`
  margin-top: 3.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1438px) {
    position: absolute;
    flex-direction: column;
    padding: 0;
    margin: 1rem;
  }
`;

function Family() {
  return (
    <Image
      src={seanTutoringImg}
      alt="two people with their arms on eachothers shoulders facing camera smiling. The background is lost of snow and trees"
      width={4700}
      height={5700}
      placeholder="blur"
      priority
    />
  );
}

const ImageContainer = styled.div`
  /* padding: 1rem; */
  margin-left: 4rem;
  @media only screen and (max-width: 1438px) {
    padding: 5px;
    margin: 5px;
  }
`;

//https://www.codesdope.com/blog/article/getting-notebook-paper-effect-with-css/
const TextContainer = styled.div`
  margin: 5rem;
  margin-right: 7rem;
  box-shadow: 5px 5px 5px 5px #cbdddb;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  ::before {
    content: '';
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 40px;
    background-color: #9b375e;
    opacity: 0.4;
  }
  @media only screen and (max-width: 1438px) {
    margin: 10px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 20px;
    line-height: 1.7;
    box-shadow: 2px 2px 2px 2px #cbdddb;
  }
`;

const HeaderContainer = styled.h1`
  margin-top: 1rem;
  padding-left: 56px;
  font-size: 3.5rem;
  color: #4c7371;
  @media (max-width: 820px) {
    text-align: center;
    margin-bottom: 0.5rem;
    padding: 0;
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  padding-top: 28px;
  padding-left: 56px;
  padding-right: 16px;
  line-height: 25px;
  letter-spacing: 1px;
  word-spacing: 5px;
  font-size: 18px;
  background-image: repeating-linear-gradient(
    white 0px,
    white 24px,
    white 24px,
    teal 25px
  );
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
            <Content>{AboutBlurb}</Content>
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
            <Content>{AboutBlurb}</Content>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default About;
