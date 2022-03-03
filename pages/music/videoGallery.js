import styled from 'styled-components';
import YoutubeEmbed from '../../components/YoutubeEmbed';

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  &hover {
    
  }

`;

const VideoGallery = () => {
  return (
    <Container>
      <h1>Video Gallery</h1>
      <VideoContainer>
        <YoutubeEmbed embedId="dw_OuFkgq0c" />
        <YoutubeEmbed embedId="w83rZNYYIK4" />
      </VideoContainer>
    </Container>
  );
};

export default VideoGallery;
