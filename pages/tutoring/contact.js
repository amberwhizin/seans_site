import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
   display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
`;

const Description = styled.p`
  margin: 0 auto;
  padding: 5rem;
  font-size: 2rem;
  @media (max-width: 1438px) {
    text-align: center;
    font-size: 20px;
    padding: 3rem;
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
          <Description>{contact.email}</Description>
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
