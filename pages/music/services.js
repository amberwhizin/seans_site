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
  font-family: 'Cinzel Decorative', cursive;
  font-size: 3rem;
`;

const Services = () => {
  return (
    <Container>
      <h1>Services</h1>
      <Description>Coming soon!</Description>
      {/* <p>Lessons</p>
      <p>Events</p>
      <p>Concerts</p> */}
    </Container>
  );
};

export default Services;
