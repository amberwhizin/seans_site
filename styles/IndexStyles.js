import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// https://bennettfeely.com/clippy/
export const TutorContainer = styled.div`
  bottom: 0;
  position: fixed;
  overflow: hidden;
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* clip-path: polygon(100% 0, 0% 100%, 0 0); */
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

// https://bennettfeely.com/clippy/
export const MusicContainer = styled.div`
  top: 0;
  filter: grayscale(1);
  position: fixed;
  overflow: hidden;
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%); */
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
  @media screen and (max-width: 1438px) {
    /* clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%); */
    /* height: ${79 - 4 + 50 / 2}%; */
    /* bottom: 0; */
  }
`;

export const StyledTutor = styled.div`
  z-index: 100; //can only effect its parent el
  position: fixed;
  right: 7vw;
  top: 75vh;
  color: #343a40;
  font-family: 'Cutive Mono', monospace;
  font-size: 8.5rem;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
  @media screen and (max-width: 1438px) {
    font-size: 7.5rem;
    top: 1%;
  }
  @media screen and (max-width: 1000px) {
    font-size: 6.5rem;
  }
  @media screen and (max-width: 770px) {
    font-size: 5.5rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 4.5rem;
    top: 4%;
  }
  @media screen and (max-width: 530px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 200px) {
    font-size: 1.5rem;
  }
`;

export const StyledMusic = styled.div`
  z-index: 100; //can only effect its parent el
  position: fixed;
  bottom: 70vh;
  left: 4vw;
  color: #343a40;
  font-family: 'Metal Mania', cursive;
  font-size: 10rem;
  letter-spacing: 1rem;
  filter: blur(0);
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
  @media screen and (max-width: 1438px) {
    font-size: 7.5rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 6.5rem;
    top: 87%;
  }
  @media screen and (max-width: 770px) {
    font-size: 5.5rem;
    top: 85%;
  }
  @media screen and (max-width: 650px) {
    font-size: 4.5rem;
    top: 90%;
  }
  @media screen and (max-width: 530px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
    top: 88%;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 200px) {
    font-size: 1.5rem;
  }
`;

export const HomeLink = styled.a`
  text-decoration: none;
  font-size: 9rem;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Title = styled.div`
  display: block;
  z-index: 1;
  position: fixed;
  margin: 0;
  padding: 0;
  margin-top: 3rem;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-name: ${(props) => {
    if (props.wasTutoringClicked) {
      return 'rotate';
    }
    return;
  }};
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ImageContainerTutor = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;
export const ImageContainerMusic = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  opacity: 0.7;
  @media (max-width: 1438px) {
    filter: blur(2px);
  }
`;
