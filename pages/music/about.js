import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
Odio molestiae repellat necessitatibus ut corporis earum repellendus. Sed doloribus quam corrupti eos. Atque voluptatum non corporis ipsa beatae laboriosam. Iure sed est aut et consequatur iste sed exercitationem voluptatum. Eaque aspernatur aut et laboriosam dolore eos architecto.
 
Nostrum earum at ut. Reiciendis omnis sint odio voluptatem veniam. Et adipisci velit ut et delectus autem est maiores voluptate. Voluptas magni dolor.
 
Et ut nulla. Nesciunt nam eos vel cumque laborum. Rem numquam incidunt ipsum sapiente.`;

const Container = styled.div`
  margin-top: 6.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 1438px) {
    position: absolute;
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
      width={12032 / X}
      height={10024 / X}
    />
  );
}

const TextContainer = styled.div`
  display: block;
  padding: 0;
  margin-right: 2rem;
  margin-left: 2rem;
`;

const Text = styled.p`
  font-family: 'Cinzel Decorative', cursive;
`;
const HeaderContainer = styled.h1`
  margin: 0;
  font-family: 'Metal Mania', cursive;
  font-size: 5rem;
  @media (max-width: 1438px) {
    text-align: center;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    font-size: 3.5rem;
  }
`;

const About = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <Family />
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
