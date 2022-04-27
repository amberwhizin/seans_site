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
`;

const TextContainer = styled.div`
  border: 1px solid black;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  width: 800px;
  height: 700px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1438px) {
    text-align: center;
    font-size: 20px;
    width: 90%;
  }
`;

const Text = styled.div`
  padding: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  line-height: 40px;
  @media screen and (max-width: 1438px) {
    padding: 1rem;
    padding-left: 4rem;
    padding-right: 4rem;
    line-height: 35px;
  }
`;

const EmailBorder = styled.div`
  border: 1px solid black;
  background-color: rgb(205, 207, 238);
  text-align: center;
  margin-top: 9rem;
  padding: 1rem;
  font-size: 3rem;
  color: #323232;
  @media (max-width: 1438px) {
    margin: 2rem;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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
            <h1>{contact.title}</h1>
            <Text>
              {contact.blurb1}
              <br />
              <br />
              {contact.blurb2}
              <br />
              <br />
              {contact.blurb3}
            </Text>
            <EmailBorder>{contact.email}</EmailBorder>
          </TextContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <TextContainer>
            <h1>{contact.title}</h1>
            <Text>
              {contact.blurb1}
              <br />
              <br />
              {contact.blurb2}
              <br />
              <br />
              {contact.blurb3}
            </Text>
            <EmailBorder>{contact.email}</EmailBorder>
          </TextContainer>
        </>
      )}
    </Container>
  );
};
export default Contact;
