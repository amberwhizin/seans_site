import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #dae5e7;
  @media (max-width: 1438px) {
    border-top: none;
  }
  z-index: 1;
`;

const FooterUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  /* border: 1px solid red; */
`;

const FooterLi = styled.li`
  margin-right: 4rem;
  display: flex;
  align-items: center;
  font-size: 27px;
  height: 4rem; 
  color: ${(props) => props.theme.colors.darkestGreen};
  /* border: 1px solid blue; */

  @media (max-width: 1438px) {
    margin: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
  }
`;

const TutoringFooter = ({ copy }) => {
  const { footerTutoring = [] } = copy;
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {!isTabletOrMobile && (
        <>
          <FooterUl>
            {footerTutoring.map((item) => {
              return <FooterLi key={item}>{item}</FooterLi>;
            })}
          </FooterUl>
        </>
      )}
    </Container>
  );
};

export default TutoringFooter;
