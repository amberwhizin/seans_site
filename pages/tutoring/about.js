import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
Hello, I'm Sean, a Tutor! My tutoring methods are too cool for school, but just cool enough for tutoring. 
 `;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
      src="/pics/sean_mel_.png"
      alt="the musician holding a classical guitar sitting on a stone garden bed in a well groomed park"
      width={15314 / X}
      height={19624 / X}
    />
  );
}

const ImageContainer = styled.div`
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: block;
  padding: 0;
  margin: 5rem;
`;
const HeaderContainer = styled.h1`
  margin: 0;
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
            <p>{AboutBlurb}</p>
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
