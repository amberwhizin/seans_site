import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  text-align: center;
`;

const Description = styled.p`
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
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
        </>
      )}
      {isTabletOrMobile && (
        <>
          <h2>{contact.title}</h2>
          <p>{contact.insured}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </>
      )}
    </Container>
  );
};
export default Contact;
