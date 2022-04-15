import styled from 'styled-components';
import data from '../../data/subjectData.js';

const SubjectGrouping = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-evenly;
`;

const SubjectContainer = styled.div`
  height: auto;
  flex: 1;
  flex-basis: ${100 / 3}%;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    flex-basis: 100%;
  }
`;

const CourseContainer = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* border: 2px solid red; */
`;

function CourseItem({ courses, subject }) {
  // const subjectList = <p>{subject}</p>;
  const courseList = courses.map((course) => (
    <p
      key={course}
      css={{
        'font-family':
          'Helvetica, sans-serif-serif; font-weight: 100; white-space: pre; line-height: .4; padding: 7px;',
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
            'underline  #4c7371; text-decoration-thickness: 6%; text-underline-offset: 0.1em;  color: #4c7371; font-size: 3rem; margin-bottom: .5rem; margin-top: 2rem; font-family: futura-pt, sans-serif; font-weight: 100;',
        }}
      >
        {subject}
      </p>
      <CourseContainer>{courseList}</CourseContainer>
    </SubjectContainer>
  );
}

function SubjectOfferings() {
  return data.map((subject) => (
    <CourseItem
      key={subject.id}
      subject={subject.subject}
      courses={subject.courses}
    />
  ));
}

const Subjects = () => {
  return (
    <SubjectGrouping>
      <SubjectOfferings />
    </SubjectGrouping>
  );
};

export default Subjects;
