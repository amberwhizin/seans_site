import styled from 'styled-components';
import data from '../../data/subjectData.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  border: 2px solid orange;
`;

const SubjectContainer = styled.p`
  /* display: flex; */
  padding: 1rem;
  font-size: 4rem;
  font-family: cursive;
  border: 2px solid red;
  display: grid;
`;

const CourseContainer = styled.ul`
  display: flex;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid green;
  display: grid;
`;

function CourseItem({ courses, subject }) {
  // const subjectList = <p>{subject}</p>;
  const courseList = courses.map((course) => <li key={course}>{course}</li>);
  return (
    <SubjectContainer>
      {subject}
      <CourseContainer> {courseList}</CourseContainer>
    </SubjectContainer>
  );
}

function SubjectOfferings() {
  const courseItems = data.map((subject) => (
    <CourseItem
      key={subject.id}
      subject={subject.subject}
      courses={subject.courses}
    />
  ));
  return <div>{courseItems}</div>;
}

const Subjects = () => {
  return (
    <Container>
      <h1>subjects</h1>
      <SubjectOfferings />
    </Container>
  );
};

export default Subjects;
