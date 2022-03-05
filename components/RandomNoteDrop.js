import styled from 'styled-components';
import { useIsTabletOrMobile } from '../hooks';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const HiddenNotes = styled.h1`
  color: white;
  font-size: ${(props) => props.randomFontSize}px; // 80px - 150px
  position: fixed;
  /* opacity: ${(props) => (props.wasMusicClicked ? 1 : 0)}; */
  transition: transform ${(props) => props.fallSpeed}ms
    ${(props) => props.delaySpeed}ms; // 1000
  top: -300px;
  transform: ${(props) => {
    if (props.wasMusicClicked) {
      const bottom = props.isTabletOrMobile ? '180vh' : '140vh';
      return `translate(${props.verticalWidth}vw, ${bottom});`;
    }
    return `translate(${props.verticalWidth}vw, 0);`; // left right - -50 - 50
  }};
`;

const characters = ['♩', '♩', '♩', '♪', '♯', '♫', '♫', '♬', '♭', '𝄫', '𝄞'];

const RandomNote = ({ wasMusicClicked, delay }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const randomCharacter = characters[getRandomInt(0, characters.length)];
  let randomFontSize = getRandomInt(60, 180);
  const rightPercent = getRandomInt(0, 95);
  const verticalWidth = getRandomInt(-60, 60);
  let fallSpeed = getRandomInt(700, 1200);
  let delaySpeed = getRandomInt(0, 300) + delay;
  if (isTabletOrMobile) {
    randomFontSize = getRandomInt(30, 90);
    fallSpeed += 300;
  }
  return (
    <>
      <HiddenNotes
        wasMusicClicked={wasMusicClicked}
        randomFontSize={randomFontSize}
        rightPercent={rightPercent}
        verticalWidth={verticalWidth}
        fallSpeed={fallSpeed}
        delaySpeed={delaySpeed}
        isTabletOrMobile={isTabletOrMobile}
      >
        {randomCharacter}
      </HiddenNotes>
    </>
  );
};

const RandomNoteDrop = ({ wasMusicClicked }) => {
  const isTabletOrMobile = useIsTabletOrMobile();
  const length = isTabletOrMobile ? 8 : 12;
  const firstGroup = Array.from({ length }, (_, i) => (
    <RandomNote key={'key' + i} wasMusicClicked={wasMusicClicked} delay={0} />
  ));
  const secondGroup = Array.from({ length }, (_, i) => (
    <RandomNote
      key={'2key' + i}
      wasMusicClicked={wasMusicClicked}
      delay={300}
    />
  ));
  const thirdGroup = Array.from({ length }, (_, i) => (
    <RandomNote
      key={'3key' + i}
      wasMusicClicked={wasMusicClicked}
      delay={600}
    />
  ));
  const forthGroup = Array.from({ length }, (_, i) => (
    <RandomNote
      key={'4key' + i}
      wasMusicClicked={wasMusicClicked}
      delay={900}
    />
  ));
  const fifthGroup = Array.from({ length }, (_, i) => (
    <RandomNote
      key={'5key' + i}
      wasMusicClicked={wasMusicClicked}
      delay={1200}
    />
  ));
  return [
    ...firstGroup,
    ...secondGroup,
    ...thirdGroup,
    ...forthGroup,
    ...fifthGroup,
  ];
};

export default RandomNoteDrop;
