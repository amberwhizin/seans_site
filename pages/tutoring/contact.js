import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: linear-gradient(
      217deg,
      rgb(249, 249, 253),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgb(249, 249, 253), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgb(205, 207, 238), rgba(0, 0, 255, 0) 70.71%);
  @media only screen and (max-width: 1438px) {
    height: 92.9vh;
  }
`;
const Description = styled.div`
  margin: 0 auto;
  padding: 4rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  border: 1px solid black;
  @media (max-width: 1438px) {
    text-align: center;
    font-size: 20px;
    padding: 3rem;
  }
`;

const EmailBorder = styled.p`
  font-size: 2rem;
  border: 1px solid black;
  padding: 1rem;
  @media (max-width: 1438px) {
    border: 1px solid black;
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
          <h1 css={{ 'background-color': 'rgb(249,249,253);' }}>
            {contact.title}
          </h1>
          {/* <Description>{contact.blurb}</Description> */}

          <EmailBorder css={{ 'margin-top': '5rem' }}>
            {contact.email}
          </EmailBorder>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <h1 css={{ 'background-color': 'rgb(249,249,253)' }}>
            {contact.title}
          </h1>
          {/* <Description>{contact.blurb}</Description> */}
          <EmailBorder>{contact.email}</EmailBorder>
        </>
      )}
    </Container>
  );
};
export default Contact;
