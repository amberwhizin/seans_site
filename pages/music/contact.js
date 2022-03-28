import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;

  @media (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  padding: 4rem;
  font-size: 2rem;
  @media (max-width: 1438px) {
    text-align: center;
    font-size: 1rem;
    padding: 3rem;
  }
`;

const EmailBorder = styled.p`
  border: 1px solid white;
  padding: 2rem;
  font-size: 2.5rem ;
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
          <Description>{contact.email}</Description>
        </>
      )}
    </Container>
  );
};
export default Contact;
