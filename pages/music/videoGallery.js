import styled from 'styled-components';
import { useIsTabletOrMobile } from '../../hooks';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import concertData from '../../data/concertVideoData';
import otherData from '../../data/otherVideoData';

const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

const concertVideos = concertData.map((video) => (
  <YoutubeEmbed
    key={video.id}
    embedId={video.embedId}
    width="560"
    height="315"
  />
));

const otherVideos = otherData.map((video) => (
  <YoutubeEmbed
    key={video.id}
    embedId={video.embedId}
    width="560"
    height="315"
  />
));

const concertVideosMobile = concertData.map((video) => (
  <YoutubeEmbed
    key={video.id}
    embedId={video.embedId}
    width="370"
    height="220"
  />
));

const otherVideosMobile = otherData.map((video) => (
  <YoutubeEmbed
    key={video.id}
    embedId={video.embedId}
    width="370"
    height="220"
  />
));

const VideoGallery = () => {
  const isTabletOrMobile = useIsTabletOrMobile();
  return (
    <Container>
      <h1>Video Gallery</h1>
      {!isTabletOrMobile && (
        <>
          <h2>Concerts</h2>
          <VideoContainer>{concertVideos}</VideoContainer>
          <h2>Other Performances</h2>
          <VideoContainer>{otherVideos}</VideoContainer>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <h2>Concerts</h2>
          <VideoContainer>{concertVideosMobile}</VideoContainer>
          <h2>Other Performances</h2>
          <VideoContainer>{otherVideosMobile}</VideoContainer>
        </>
      )}
    </Container>
  );
};

export default VideoGallery;
