import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanTutoringImg from '../../public/pics/sean_mel_ copy.png';

const AboutTitle = `Sean Keegan`;

const AboutBlurb = `
The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz.`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f6f9;
  /* background: linear-gradient(to right, white, #e9ecf1); */
  @media (max-width: 1438px) {
    position: absolute;
    flex-direction: column;
    padding: 0;
    margin: 0;
    margin: 1rem;
  }
`;

function Family() {
  return (
    <Image
      src={seanTutoringImg}
      alt="two people with their arms on eachothers shoulders facing camera smiling. The background is lost of snow and trees"
      width={7000}
      height={7600}
      placeholder="blur"
      priority
    />
  );
}

//https://codepen.io/binarykiwi/pen/BbOoPy
const ImageContainer = styled.div`
  margin-left: 5rem;
  margin-right: 20px;
  opacity: 0.9;
  @media only screen and (max-width: 1438px) {
    padding: 5px;
    margin: 5px;
  }
`;

//https://www.codesdope.com/blog/article/getting-notebook-paper-effect-with-css/
const TextContainer = styled.div`
  background-color: white;
  margin: 9rem;
  margin-right: 7rem;
  margin-left: 20px;
  /* box-shadow: 5px 5px 2px 2px #e9ecf1; */
  /* box-shadow: 60px -16px #c5cbdc; */
  /* box-shadow: 12px 12px 2px 1px #e9ebf2; */
  box-shadow: 3px 3px #dde0eb, -1em 0 .4em #dde0eb;
  padding-top: 10px;
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
    box-shadow: 2px 2px 2px 2px #e9ecf1;
  }
`;

const HeaderContainer = styled.div`
  background-color: white;
  font-family: futura-pt, sans-serif;
  font-weight: 100;
  margin-top: 1rem;
  padding-left: 56px;
  font-size: 3.5rem;
  color: #323232;
  @media (max-width: 820px) {
    text-align: center;
    margin-bottom: 0.5rem;
    padding: 0;
    margin-right: 1rem;
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  font-family: 'Open Sans', sans-serif;
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
