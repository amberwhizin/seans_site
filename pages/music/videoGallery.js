import styled from 'styled-components';
import YoutubeEmbed from '../../components/YoutubeEmbed';

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

const VideoGallery = () => {
  return (
    <Container>
      <h1>Video Gallery</h1>
      <YoutubeEmbed embedId="dw_OuFkgq0c" />
    </Container>
  );
};

export default VideoGallery;

