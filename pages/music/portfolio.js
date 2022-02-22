import styled from 'styled-components';
import Image from 'next/image';
import Central from '../public/pics/CentralStreetA.jpg';
import _5thAveB from '../public/pics/5thAveB.jpg';
import _5thAveC from '../public/pics/5thAveC.jpg';
import _5thAveD from '../public/pics/5thAveD.jpg';
import _5thAveE from '../public/pics/5thAveIMG_8708.jpg';
import { useIsTabletOrMobile } from '../hooks';

// TODO: Most of these components are the same as services.  Maybe we can make them shared?
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  padding: 2em;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  padding: 2rem;
  display: block;
`;

const ImageContainer = styled.div`
  margin-bottom: 1rem;
`;

const PortfolioImages = ({ src, alt }) => {
  const X = 3;
  return (
    <ImageContainer>
      <Image src={src} alt={alt} width={2035 / X} height={1570 / X} />
    </ImageContainer>
  );
};

const Portfolio = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      {isTabletOrMobile && <StyledH2>Gallery</StyledH2>}
      <PortfolioImages
        src={Central}
        alt="A beautiful landscape by Sean Baschy landscapes"
      />
      <PortfolioImages
        src={_5thAveB}
        alt="A beautiful landscape by Sean Baschy landscapes"
      />
      <PortfolioImages
        src={_5thAveC}
        alt="A beautiful landscape by Sean Baschy landscapes"
      />
      <PortfolioImages
        src={_5thAveD}
        alt="A beautiful landscape by Sean Baschy landscapes"
      />
      <PortfolioImages
        src={_5thAveE}
        alt="A beautiful landscape by Sean Baschy landscapes"
      />
    </Container>
  );
};
export default Portfolio;
