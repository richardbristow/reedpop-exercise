import styled from 'styled-components/macro';

import Carousel from './Carousel';

import magicAdBg from './assets/magic_ad_bg.jpg';

const StyledApp = styled.div`
  width: 300px;
  height: 600px;
  position: relative;
`;

const StyledCardContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 30px;
  width: 278px;
  height: 238px;
  background-color: black;
`;

const App = () => (
  <StyledApp>
    <StyledCardContainer>
      <Carousel />
    </StyledCardContainer>
    <img
      src={magicAdBg}
      alt="magic ad background"
      useMap="#ad_background_map"
    />
    <map name="ad_background_map">
      <area
        shape="rect"
        coords="89,295,212,329"
        href="https://magic.wizards.com/en/products/throne-of-eldraine"
        target="_blank"
        alt="Find out more"
      />
    </map>
  </StyledApp>
);

export default App;
