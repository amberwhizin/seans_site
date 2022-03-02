import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
Odio molestiae repellat necessitatibus ut corporis earum repellendus. Sed doloribus quam corrupti eos. Atque voluptatum non corporis ipsa beatae laboriosam. Iure sed est aut et consequatur iste sed exercitationem voluptatum. Eaque aspernatur aut et laboriosam dolore eos architecto.
 
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
 
Et ut nulla. Nesciunt nam eos vel cumque laborum. Rem numquam incidunt ipsum sapiente.`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* music about page is having margin issues with the margin-top below- fix later */
  margin-top: 6rem;
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
      src="/pics/sean_website.jpeg"
      alt="the musician holding a classical guitar sitting on a stone garden bed in a well groomed park"
      width={11032 / X}
      height={10024 / X}
    />
  );
}

const ImageContainer = styled.div`
  /* padding-left: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 10px #420000 solid; */
`;

const TextContainer = styled.div`
  display: block;
  padding: 0;
  margin: 5rem;
`;

const Text = styled.p`
  font-family: 'Cinzel Decorative', cursive;
`;
const HeaderContainer = styled.h1`
  margin: 0;
  font-family: 'Metal Mania', cursive;
  font-size: 6rem;
  @media (max-width: 1438px) {
    text-align: center;
    margin-bottom: 0.5rem;
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
            <Text>{AboutBlurb}</Text>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <HeaderContainer>{AboutTitle}</HeaderContainer>
          <Family />
          <p>{AboutBlurb}</p>
        </>
      )}
    </Container>
  );
};
export default About;
