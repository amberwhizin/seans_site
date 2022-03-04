import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f4e9cd;
  @media (max-width: 1438px) {
    position: fixed;
    margin-top: 2rem;
  }
`;

const FooterUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

const FooterLi = styled.li`
  padding-right: 4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  height: 5rem;
  color: ${(props) => props.theme.colors.lightBrown};

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
