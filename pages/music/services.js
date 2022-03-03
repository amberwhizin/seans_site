import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  padding: 3em;
`;

const Description = styled.p`
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
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
