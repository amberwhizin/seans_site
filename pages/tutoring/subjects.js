import styled from 'styled-components';
import data from '../../data/subjectData.js';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* justify-content: center; */
  text-align: center;
  /* border: 2px solid orange; */
`;

const SubjectContainer = styled.div`
  /* display: flex; */
  padding: 0;
  margin: 0;
  font-size: 3rem;
  /* font-weight: bold; */
  /* font-family: cursive; */
  border: 2px solid red;
  /* margin-bottom: 7rem; */
  display: grid;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const CourseContainer = styled.div`
  display: flex;
  font-size: 2rem;
  /* font-family: Arial, Helvetica, sans-serif; */
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
  padding-bottom: 7rem; //bottom
`;

function CourseItem({ courses, subject }) {
  // const subjectList = <p>{subject}</p>;
  const courseList = courses.map((course) => (
    <p
      key={course}
      css={{
        'font-family':
          'Helvetica, sans-serif-serif; font-weight: 100; line-height: .7;',
      }}
    >
      {course}
    </p>
  ));
  return (
    <SubjectContainer>
      <p
        css={{
          'text-decoration':
            'underline  #4c7371; text-decoration-thickness: 6%; text-underline-offset: 0.1em;  color: #4c7371; font-size: 3rem; margin-bottom: 2.5rem; margin-top: 5rem; font-family: futura-pt, sans-serif; font-weight: 100;',
        }}
      >
        {subject}
      </p>
      <CourseContainer>{courseList}</CourseContainer>
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
      {/* <h1>subjects</h1> */}
      <SubjectOfferings />
    </Container>
  );
};

export default Subjects;
