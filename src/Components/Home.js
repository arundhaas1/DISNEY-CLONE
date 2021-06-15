import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import Newdisney from './Newdisney'
import Originals from './Originals'
import Trending from './Trending'

const Home=()=> {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <Newdisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container =styled.main`
   position: relative;
   min-height: calc(100vh-250px);
   overflow-x: hidden;
   display: block;
   top: 72px;
   padding: 0 calc(3.5vw+5px);
   /* height: 100%; */

    &:after{
     background-color: #040714;
      content :"";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
   
`;

export default Home;


