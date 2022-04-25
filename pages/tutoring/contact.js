import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      217deg,
      rgb(249, 249, 253),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgb(249, 249, 253), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgb(205, 207, 238), rgba(0, 0, 255, 0) 70.71%);
  @media only screen and (max-width: 900px) {
  }
`;
const TextContainer = styled.div`
  width: 800px;
  height: 400px;
  background-color: white;
  margin: 3rem;
  box-shadow: -0em 0 0.4em #d1d7e2, -0em 0 0.4em #d1d7e2;
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
  @media (max-width: 1438px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 375px) {
    margin: 1rem;
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
  font-size: 2rem;
  border: 1px solid rgb(205, 207, 238);
  padding: 1rem;
  color: #4f4f4f;
  margin-bottom: 15rem;
  @media screen and (max-width: 1438px) {
    margin-bottom: 39rem;
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 52rem;
  }
  @media only screen and (max-width: 414px) {
    margin-bottom: 15rem;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 375px) and (max-height: 812px) {
    margin-bottom: 12rem;
  }
`;

const Contact = ({ copy }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const { contact = {} } = copy;
  return (
    <Container id="contact">
      {!isTabletOrMobile && (
        <>
          <TextContainer>
            <h1 css={{ 'padding-left': '56px;' }}>{contact.title}</h1>
            <Content>
              {contact.blurb}
              <br />
              <br />
            </Content>
          </TextContainer>
          <EmailBorder>{contact.email}</EmailBorder>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <TextContainer>
            <h1 css={{ 'padding-left': '56px;' }}>{contact.title}</h1>
            <Content>
              {contact.blurb}
              <br />
              <br />
            </Content>
          </TextContainer>
          <EmailBorder>{contact.email}</EmailBorder>
        </>
      )}
    </Container>
  );
};
export default Contact;
