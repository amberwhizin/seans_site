import styled from 'styled-components';
import Image from 'next/image';
import BeforeCentral from '../public/pics/CentralStreetC.jpg';
import AfterCentral from '../public/pics/CentralStreetB.jpg';
import BeforeTullis from '../public/pics/TullisStreetIMG_0381.png';
import AfterTullis from '../public/pics/TullisStreetIMG_0374.jpg';
import _5thAveMaintenance from '../public/pics/5thAveIMG_8708.jpg';
import _5thAveMaintenance_2 from '../public/pics/5thAveC.jpg';

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

const ServicesImage = ({ src, alt }) => {
  const X = 3;
  return (
    <ImageContainer>
      <Image src={src} alt={alt} width={2035 / X} height={1570 / X} />
    </ImageContainer>
  );
};

const ImageGrouping = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1438px) {
    padding: 0;
    flex-direction: column;
  }
`;

function Services() {
  return (
    <Container>
      <StyledH2>Design</StyledH2>
      <ImageGrouping>
        <ServicesImage
          src={BeforeTullis}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        <ServicesImage
          src={AfterTullis}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageGrouping>

      <StyledH2>Install</StyledH2>
      <ImageGrouping>
        <ServicesImage
          src={BeforeCentral}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        <ServicesImage
          src={AfterCentral}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageGrouping>

      <StyledH2>Maintenance</StyledH2>
      <ImageGrouping>
        <ServicesImage
          src={_5thAveMaintenance}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone"
        />
        <ServicesImage
          src={_5thAveMaintenance_2}
          alt="An image of a persons garden before it's redone. It's on a small hill with two rows of stone separating the hill where the plants will go."
        />
      </ImageGrouping>
    </Container>
  );
}

export default Services;
