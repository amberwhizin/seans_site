import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../hooks';

const AboutTitle = `Sean Chanel`;

const AboutBlurb = `
Hello! I’m Sean.

I’m a graduate of the Evergreen State College, where my focus was on native plants, organic farming and printmaking. Since graduating in 2013, I’ve kept my hands in the soil and followed the lead of the many wonderful mentors I’ve been lucky enough to know along the way. I’ve had the privilege to work on beautiful estates and gardens from Seattle to Olympia and between. In 2019, through the encouragement of coworkers and clients, I started my own landscaping business.\n

I offer garden designs that focus on enhancing the environment for my clients as well as pollinators and other wildlife. My goal as a designer is to bring the client's personality into a garden. Whether that’s an entire rainbow of phlox and echinacea or a monochromatic moon garden. I look forward to meeting each new challenge and seeing a project through. While my specialty is plant design, I’m happy to work with other local contractors to create the space you want to spend more time in.\n

When I’m not in my client’s gardens, I’m usually in mine with my toddler. When I’m home, you can find me knitting, sewing or remodeling my home and watching my favorite reality TV shows 90 Day Fiance or The Bachelor.`;

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
      src="/pics/sean_new_about_foto.jpeg"
      alt="the landscape artist standing next to a very large green plant"
      width={15500 / X}
      height={19000 / X}
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
