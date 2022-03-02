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

const Services = () => {
  return (
    <Container>
      <h1>Services</h1>
      <p>Lessons</p>
      <p>Events</p>
      <p>Concerts</p>
    </Container>
  );
};

export default Services;
