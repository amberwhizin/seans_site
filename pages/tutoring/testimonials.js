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
  padding: 1rem;
  font-size: 4rem;
  font-family: cursive;
`;

const Testimonials = () => {
  return (
    <Container>
      <h1>Testimonials</h1>
      <Description>Coming soon!</Description>
    </Container>
  );
};

export default Testimonials;
