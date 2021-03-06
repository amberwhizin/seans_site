import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  align-items: center;
`;

const Description = styled.p`
  margin: 0 auto;
  padding: 4rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 1438px) {
    text-align: center;
    font-size: 20px;
    padding: 3rem;
  }
`;

const EmailBorder = styled.p`
  border: 1px solid white;
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
  @media (max-width: 1438px) {
    padding: 1rem;
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
          <h1>{contact.title}</h1>
          <Description>{contact.blurb}</Description>
          <Description>
            <EmailBorder>{contact.email}</EmailBorder>
          </Description>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <h1>{contact.title}</h1>
          <Description>{contact.blurb}</Description>
          <EmailBorder>{contact.email}</EmailBorder>
        </>
      )}
    </Container>
  );
};
export default Contact;