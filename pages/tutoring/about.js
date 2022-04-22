import styled from 'styled-components';
import Image from 'next/image';
import { useIsTabletOrMobile } from '../../hooks';
import seanTutoringImg from '../../public/pics/sean_mel_ copy.png';

const AboutTitle = `Sean Keegan`;

const AboutBlurb1 = `
’Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.

“Beware the Jabberwock, my son!
      The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
      The frumious Bandersnatch!”

He took his vorpal sword in hand;
      Long time the manxome foe he sought—
So rested he by the Tumtum tree
      And stood awhile in thought.`;

const AboutBlurb2 = `And, as in uffish thought he stood,
The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
And burbled as it came!

One, two! One, two! And through and through
The vorpal blade went snicker-snack!
He left it dead, and with its head
He went galumphing back.

“And hast thou slain the Jabberwock?
Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!”
He chortled in his joy.

’Twas brillig, and the slithy toves
Did gyre and gimble in the wabe:
All mimsy were the borogoves,
And the mome raths outgrabe.`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      217deg,
      rgb(249, 249, 253),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgb(249, 249, 253), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgb(205, 207, 238), rgba(0, 0, 255, 0) 70.71%);
  @media (max-width: 1438px) {
    position: absolute;
    flex-direction: column;
  }
`;

function Family() {
  return (
    <Image
      src={seanTutoringImg}
      alt="two people with their arms on eachothers shoulders facing camera smiling. The background is lost of snow and trees"
      width={3700}
      height={4100}
      placeholder="blur"
      layout="intrinsic"
      objectFit="cover"
      priority
    />
  );
}

//https://codepen.io/binarykiwi/pen/BbOoPy
const ImageContainer = styled.div`
  margin-left: 6rem;
  margin-right: 20px;
  opacity: 0.9;
  background-color: #e9ecf1; 
  @media only screen and (max-width: 1438px) {
    margin: 20px;
  }
`;

//https://www.codesdope.com/blog/article/getting-notebook-paper-effect-with-css/
const TextContainer = styled.div`
  background-color: white;
  margin: 8rem;
  margin-right: 7rem;
  margin-left: 20px;
  box-shadow: -0em 0 0.4em #d1d7e2, -0em 0 0.4em #d1d7e2;
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
    margin: 20px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 20px;
    line-height: 1.7;
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
  font-size: 20px;
  color: #4f4f4f;
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
            <Content>
              {AboutBlurb1} <br /><br />
              {AboutBlurb2}
            </Content>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <ImageContainer>
            <Family />
          </ImageContainer>
          <TextContainer>
          <HeaderContainer>{AboutTitle}</HeaderContainer>
            <Content>
              {AboutBlurb1} <br />
              <br />
              {AboutBlurb2}
            </Content>
          </TextContainer>
        </>
      )}
    </Container>
  );
};

export default About;
