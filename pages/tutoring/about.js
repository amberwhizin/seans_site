import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanTutoringImg from '../../public/pics/sean_mel_.png';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
Sean has been tutoring full-time since 2019, with an emphasis on the math and sciences. His teaching style focuses on reducing intimidation and letting the student discover their own understanding of concepts. With over 2500 hours of experience as an instructor, Sean has found that tutoring online via virtual whiteboard makes math and science less intimidating for students. Rather than working within a traditional teacher-student hierarchy, Sean invites a collaborative approach to learning. The modern schooling system is too results-based, and often damages students' natural approach to learning. Once intimidation is reduced, students begin building their own understanding and confidence. `;

const AboutQuote = `My goal is to instill the joy of learning in students, so that they may one day become their own teachers.`

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
            <p><i><q>{AboutQuote}</q></i></p>
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
