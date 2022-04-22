import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  /* background-color: #e9ecf1; */
  background: linear-gradient(217deg, rgb(249,249,253), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgb(249,249,253), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgb(205,207,238), rgba(0,0,255,0) 70.71%);
  
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
  border: 1px solid black;
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
