import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1438px) {
    text-align: center;
  }
`;

const TextContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  width: 800px;
  height: 700px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1438px) {
    font-size: 20px;
    width: 90%;
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
    margin-top: 5rem;
    margin-bottom: 32.5rem;
  }
  @media screen and (max-width: 414px) {
    margin-top: 4rem;
    margin-bottom: 5.5rem;
    width: 95%;
  }
`;

const Text = styled.div`
  padding: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  line-height: 40px;
  @media screen and (max-width: 1438px) {
    padding: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    line-height: 35px;
  }
  @media screen and (max-width: 414px) {
    font-size: 20px;
  }
`;

const EmailBorder = styled.div`
  background-color: #f4e9cd;
  text-align: center;
  margin-top: 9rem;
  padding: 1rem;
  font-size: 3rem;
  color: black;
  @media (max-width: 1438px) {
    margin: 2rem;
    margin-top: 9rem;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    margin-top: 2rem;
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
