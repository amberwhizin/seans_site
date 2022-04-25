import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';
import Image from 'next/image';
import seanTutoringImg from '../../public/pics/books_sean.jpeg';

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
//https://www.codesdope.com/blog/article/getting-notebook-paper-effect-with-css/
const TextContainer = styled.div`
  background-color: white;
  margin: 12rem;
  margin-right: 10rem;
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
  @media screen and (max-width: 1438px) {
    margin: 20px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 20px;
    line-height: 1.7;
    width: 90%;
  }
`;

const HeadingText = `Contact me!`;

const HeadingContainer = styled.div`
  background-color: white;
  font-family: futura-pt, sans-serif;
  font-weight: 100;
  margin-top: 1rem;
  padding-left: 56px;
  font-size: 3rem;
  color: #323232;
  @media (max-width: 820px) {
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding-top: 28px;
  padding-left: 56px;
  padding-right: 16px;
  padding-bottom: 50px;
  line-height: 25px;
  letter-spacing: 1px;
  word-spacing: 5px;
  font-size: 22px;
  color: #4f4f4f;
  background-image: repeating-linear-gradient(
    white 0px,
    white 24px,
    white 24px,
    teal 25px
  );
`;

const EmailBorder = styled.p`
  /* display: flex;
  justify-content: center; */
  font-size: 2rem;
  border: 1px solid rgb(205, 207, 238);
  background-color: rgb(249, 249, 253);
  padding: 1rem;
  margin-left: 3.5rem;
  margin-right: 2rem;
  color: #323232;
  opacity: 0.9;
  @media screen and (max-width: 1438px) {
    font-size: 17px;
    margin-right: 13px;
  }
`;

//https://codepen.io/binarykiwi/pen/BbOoPy
const ImageContainer = styled.div`
  margin-left: 9rem;
  margin-right: 20px;
  opacity: 0.9;
  background-color: #e9ecf1;
  @media screen and (max-width: 1438px) {
    margin: 20px;
  }
`;

//Photo by Sharon McCutcheon: https://www.pexels.com/photo/selective-focus-photo-of-pile-of-assorted-title-books-1148399/
function Books() {
  return (
    <Image
      src={seanTutoringImg}
      alt="two people with their arms on each others shoulders facing camera smiling. The background is lost of snow and trees"
      width={1000}
      height={1000}
      placeholder="blur"
      layout="intrinsic"
      objectFit="cover"
      priority
    />
  );
}

const Contact = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { contact = {} } = copy;
  return (
    <Container id="contact">
      {!isTabletOrMobile && (
        <>
          <ImageContainer>
            <Books />
          </ImageContainer>
          <TextContainer>
            <HeadingContainer>{HeadingText}</HeadingContainer>
            <Content>
              {contact.blurb}
            </Content>
              <EmailBorder>{contact.email}</EmailBorder>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <ImageContainer>
            <Books />
          </ImageContainer>
          <TextContainer>
            <HeadingContainer>{HeadingText}</HeadingContainer>
            <Content>
              {contact.blurb}
            </Content>
              <EmailBorder>{contact.email}</EmailBorder>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default Contact;
