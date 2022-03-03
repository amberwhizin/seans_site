import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
`;

const Description = styled.p`
  padding: 1rem;
  font-size: 4rem;
  font-family: cursive;
`;

const Subjects = () => {
  return (
    <Container>
      <h1>Subjects</h1>
      <Description>Coming soon!</Description>
    </Container>
  );
};

export default Subjects;
