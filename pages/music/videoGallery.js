import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';
import YoutubeEmbed from '../../components/YoutubeEmbed';

const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem; ;
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  @media (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0

    
   

  }
`;

const VideoGallery = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <h1>Video Gallery</h1>
      {!isTabletOrMobile && (
        <>
          <VideoContainer>
            <YoutubeEmbed embedId="dw_OuFkgq0c" width="560" height="315"/>
            <YoutubeEmbed embedId="w83rZNYYIK4" width="560" height="315"/>
          </VideoContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <VideoContainer>
            <YoutubeEmbed embedId="dw_OuFkgq0c" width="370" height="220"/>
            <YoutubeEmbed embedId="w83rZNYYIK4" width="370" height="220"/>
          </VideoContainer>
        </>
      )}
    </Container>
  );
};

export default VideoGallery;
