import { useState } from 'react';
import styled from 'styled-components/macro';

import magicCardBg from './assets/magic_card_bg.png';

const StyledCard = styled.div`
  @keyframes shakeCard {
    0% {
      transform: translate3d(0px, 0, 0);
    }

    80% {
      transform: translate3d(0px, 0, 0);
    }

    85% {
      transform: translate3d(-1px, 0px, 0);
    }

    90% {
      transform: translate3d(2px, 0, 0);
    }

    95% {
      transform: translate3d(-4px, 0px, 0);
    }

    100% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @keyframes zoomCard {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3) rotateY(90deg);
    }
    100% {
      transform: scale(1) rotateY(180deg);
    }
  }

  @keyframes glowCard {
    from {
      box-shadow: 0 0 90px #ccc;
    }
    to {
      box-shadow: 0 0 50px #fece67;
    }
  }

  ${({ isActive }) => isActive && `cursor: pointer;`}
  perspective: 600px;
  height: 225px;
  width: 161.49px;

  .unflipped .back {
    ${({ isActive }) =>
      isActive &&
      'animation: glowCard 2s infinite alternate, shakeCard 2s infinite;'}
  }

  .flipped {
    transform: rotateY(180deg);
    animation: zoomCard 0.5s;
  }

  div {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.5s;
    transform-style: preserve-3d;

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
    }

    .front {
      transform: rotateY(180deg);
    }

    .front,
    .back {
      ${({ isActive }) =>
        isActive && 'animation: glowCard 2s infinite alternate;'}
    }
  }
`;

const Card = ({ cardImage, isActive, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <StyledCard
      isActive={isActive}
      className={className}
      onClick={isActive ? handleFlip : undefined}
    >
      <div className={isFlipped ? 'flipped' : 'unflipped'}>
        <img className="back" src={magicCardBg} alt="Card Back" />
        <img className="front" src={cardImage} alt={cardImage} />
      </div>
    </StyledCard>
  );
};

export default Card;
