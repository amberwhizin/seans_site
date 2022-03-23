import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  text-align: center;
  padding-bottom: 7rem; //bottom
  /* border: 2px solid red; */
`;

const TextContainer = styled.div`
  /* border: 2px solid purple; */
  background-color: #ecf4f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  margin-top: 4rem;
  width: 55rem;
  box-shadow: 5px 5px 5px #cbdddb;
  @media (max-width: 1438px) {
    width: 20rem;
  }
`;

const Description = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1em;
  /* border: 2px solid orange; */
  background-color: #ecf4f5;
  height: 23vh;
  width: 50rem;
  line-height: 2;
  /* display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; // or this and the height is cut off? */
  /* line-clamp: 5; */
  overflow: hidden;
  white-space: pre-line;
  transition: all 0.3s ease-in-out;
  margin: 0; //
  display: flex;
  align-items: flex-start;
  ${(props) => {
    if (props.isReadMoreClicked) {
      return 'height: auto'; //or overflow:visible but text container doesnt expand
    }
  }};

  @media (max-width: 1438px) {
    height: 40vh;
    width: 20rem;
    line-height: 1.7;
    ${(props) => {
      if (props.isReadMoreClicked) {
        return 'height: auto';
      }
    }};
  }
`;

const ReadMoreButton = styled.button`
  color: darkgray;
  font-size: 0.9rem;
  margin-top: 6px;
  margin-right: 1.5rem;
  background-color: #ecf4f5;
  border: none;
  display: flex;
  align-self: end;
  :hover {
    color: grey;
  }
`;

let ButtonText = '';

const ExpandableSection = ({ children }) => {
  const [isReadMoreClicked, setReadMoreClicked] = useState(false);
  const toggleButton = () => setReadMoreClicked(!isReadMoreClicked);
  isReadMoreClicked ? (ButtonText = 'read less') : (ButtonText = 'read more');

  const truncate = (str, n) => {
    return str.length > n ? <>{str.slice(0, n)} &hellip;</> : str; //remove names or at .?
  }; 

  return (
    <>
      <TextContainer>
        <Description isReadMoreClicked={isReadMoreClicked}>
          {/* or truncate and the dots are at the bottom of children, can i add them at height 23? */}
          {/* {truncate(children, children.length - 1)}  */}
          {children}
        </Description>
        <ReadMoreButton onClick={toggleButton}>{ButtonText}</ReadMoreButton>
      </TextContainer>
    </>
  );
};

const Testimonials = () => {
  return (
    <Container>
      <h1>testimonials</h1>
      <ExpandableSection>
        {`“Our daughters have been receiving tutoring from Sean for the past 2
        years. His knowledge and expertise in Math and Science has helped them
        stay on top of their work and kept them on pace with the course
        curriculum. His friendly attitude and patience has given them so much
        confidence in their abilities. He has been able to assess their needs
        and scaffold the work to meet them where they are. He is reliable and
        always makes time for extra sessions if they have a big test or
        assignment due.” 
      -Jodi and Marcus`}
      </ExpandableSection>
      <ExpandableSection>
        {` “Sean has been my daughter’s AP Calculus teacher for the past two years.
        He is an amazing teacher and we are blessed to have him as her tutor.
        His conceptual approach in his teaching strategies has helped her not
        only learn the materials more fundamentally but also become a better
        learner and more confident in applying knowledge in different topics and
        subjects.”  
        -Nazila K`}
      </ExpandableSection>
      <ExpandableSection>
        {` “After failing my first calculus AB exam, my friend who was also
        struggling in calculus referred me to Sean. After starting tutoring
        sessions, I never received below an A on a test in AB. After starting
        BC, I initially struggled, but once I started tutoring with Sean again,
        I went from a B to an A in the class within a month. Although I still
        receive tutoring from Sean, I feel as though he has not only supported
        me as I learn new concepts, but provided me with the skills and interest
        in calculus necessary to be self-sufficient and independently receive a
        good grade in future math classes. In comparison to typical tutors, Sean
        doesn’t create dependent students; rather, he inspires students to enjoy
        math at a fundamental and conceptual level and develop the skills
        necessary to thrive independently in the future. Sean inspired me to
        think about math and calculus with a whole new perspective that I had
        never even considered before starting tutoring. He taught me how to
        apply concepts to basic facts of life that I’d never realized were
        intrinsically related to math, or in many ways, a product of it. Though
        I still feel like receiving tutoring from Sean is highly beneficial to
        my scores and understanding, I can also recognize the difference in my
        independent ability to retain, comprehend, and fundamentally understand
        new concepts since starting tutoring with Sean. He incited a passion and
        interest in mathematics that turned mundane, tedious, and seemingly
        incomprehensible concepts into fascinating ones. Besides calculus, Sean
        has also helped me in AP Physics. He has a wide variety of skills and
        knowledge that allows him to tutor various concepts and subjects. Sean
        is an all around intuitive, insightful, and smart individual who
        explains and elaborates concepts in ways no teacher has ever been able
        to do for me. I am appreciative of Sean not only because he’s a good
        teacher, but because he made me passionate about something I never
        thought I had the capacity to enjoy.” 
        -Tara K`}
      </ExpandableSection>
      <ExpandableSection>
        {`  “We are very happy with Sean’s support as a tutor for our kids. Sean has
        tutored both our sons since we moved from Europe during high school and
        they experienced gaps in their knowledge in maths and had some
        adjustment issues. Sean helped our oldest son with AP Calculus and our
        youngest with Algebra 2, Statistics and Physics. Besides the fact that
        they appreciated the clear and pleasant manner in which he explains the
        maths to them (he isn’t their first tutor so the kids have comparison),
        they also enjoyed meeting up with him online (Covid) and thanks to Sean
        getting them to cooperate with tutoring was never an issue. Sean is a
        pleasant, kind, smart and patient person who helped them understand the
        maths, finish their homework and, last but not least, grow more
        confidence, which in my opinion is where the actual learning starts. He
        makes maths doable and even enjoyable for them and based on the
        conversations I had with him about my boys, it is obvious he sincerely
        cares about them and he really wants them to do good in school and feel
        good about themselves. I highly recommend Sean as a tutor for any class
        he is interested in himself. Because he is totally capable of sharing
        his enthusiasm and knowledge.” 
        -Anonymous (contact available upon request)`}
      </ExpandableSection>

      <ExpandableSection>
        {`  “Three of our sons have worked with Sean for tutoring in Geometry,
        Algebra, Algebra II Honors and AP Calculus. Though all were strong
        students, Sean’s expertise was invaluable, especially during distance
        learning. He is enthusiastic, personable, and presents material from a
        fresh, relatable perspective. Whether your child is struggling, has
        missed concepts due to absence, or just needs material presented in an
        alternate fashion, Sean can help. He will build or restore the
        confidence required to excel in math. We have been extremely happy with
        our experience with him.” 
        -Shannon M`}
      </ExpandableSection>
      <ExpandableSection>
        {` “I have had a wonderful experience with Sean Keegan. When my classes
        moved online there was a disconnect between me and the material,
        especially in math. Sean Keegan was really able to help me and adapt in
        a way that my teachers could not. He is extremely knowledgeable, and
        makes learning new material simple and easy, whether in person or
        remote. I would definitely recommend!” 
        -Connor M`}
      </ExpandableSection>
    </Container>
  );
};

export default Testimonials;
