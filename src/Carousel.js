import { useState } from 'react';
import styled from 'styled-components/macro';
import { useSwipeable } from 'react-swipeable';

import Card from './Card';
import magicCard1 from './assets/magic_card1.png';
import magicCard2 from './assets/magic_card2.png';
import magicCard3 from './assets/magic_card3.png';
import magicCard4 from './assets/magic_card4.png';
import magicCard5 from './assets/magic_card5.png';

const StyledCarousel = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: inline-flex;

  button {
    &:enabled {
      cursor: pointer;
    }
    width: 10%;
    z-index: 1;
    background-color: black;
    color: #c9c7c8;
    border: none;
    box-shadow: 5px 0 25px 8px black;
  }

  .nextButton {
    box-shadow: -5px 0 25px 8px black;
  }
`;

const StyledCarouselInner = styled.div`
  height: 100%;
  width: 80%;
  display: inline-flex;
  transition: transform 0.5s;
  transform: ${({ activeCardIndex }) =>
    `translateX(-${activeCardIndex * 86.4}%)`};
`;

const StyledCarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 30.45px;
`;

const Carousel = () => {
  // This state represents the card currently being displayed in the carousel
  // with the value being the index of the card in the cards array
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [magicCard1, magicCard2, magicCard3, magicCard4, magicCard5];

  // Handler function for the next and previous buttons at the sides of the carousel
  const handleChangeActiveCard = (updatedIndex) => {
    if (!(updatedIndex < 0 || updatedIndex > 4)) {
      setActiveCardIndex(updatedIndex);
    }
  };

  // Handler functions to allow the user to swipe through the cards with touch based devices
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleChangeActiveCard(activeCardIndex + 1),
    onSwipedRight: () => handleChangeActiveCard(activeCardIndex - 1),
  });

  return (
    <StyledCarousel>
      {/* Previous button */}
      <button
        disabled={activeCardIndex === 0}
        onClick={() => handleChangeActiveCard(activeCardIndex - 1)}
      >
        {activeCardIndex !== 0 && (
          <span>
            <strong>{'<'}</strong>
          </span>
        )}
      </button>

      {/* Container for the current active card */}
      <StyledCarouselInner {...swipeHandlers} activeCardIndex={activeCardIndex}>
        {cards.map((card, index) => (
          <StyledCarouselItem key={card}>
            {/* Card component to display a card */}
            <Card
              isActive={activeCardIndex === index}
              className="card"
              cardImage={card}
            />
          </StyledCarouselItem>
        ))}
      </StyledCarouselInner>

      {/* Next button */}
      <button
        disabled={activeCardIndex === 4}
        className="nextButton"
        onClick={() => handleChangeActiveCard(activeCardIndex + 1)}
      >
        {activeCardIndex < 4 && (
          <span>
            <strong>{'>'}</strong>
          </span>
        )}
      </button>
    </StyledCarousel>
  );
};

export default Carousel;
