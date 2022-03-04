import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f4e9cd;
  @media (max-width: 1438px) {
    position: relative;
    margin-top: 2rem;
  }
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  
`;

const FooterLi = styled.li`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  /* padding-left: 4rem;
  padding-right: 4rem; */
  color: ${(props) =>
    props.theme.colors.lightBrown}; // why did these have ? on them?

  @media (max-width: 1438px) {
    margin: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

const FooterMusic = ({ copy }) => {
  const { footerMusic = [] } = copy;
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <FooterUl>
        {footerMusic.map((item) => {
          return <FooterLi key={item}>{item}</FooterLi>;
        })}
      </FooterUl>
    </Container>
  );
};

export default FooterMusic;
