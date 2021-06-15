import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Movies} from '../disneyPlusMoviesData'
// import styled from 'styled-components'

function Recommends () {
    return (
        <Container>
            <Title>
                <h4>Recommended for You</h4>
            </Title>
            <Content>
                <Wrap>
                    <Link to="/detailzero">
                        <img alt="" src={Movies[0].cardImg}/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/detailone">
                    <img alt="" src={Movies[1].cardImg}/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/detailtwo">
                    <img alt="" src={Movies[2].cardImg}/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to="/detailthree">
                    <img alt="" src={Movies[3].cardImg}/>
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

const Container=styled.div`
    padding: 0 0 26px;
    margin-bottom: 60px;
     background-color: #040714;

`;

const Title =styled.h4`
    display: flex;
    justify-content: flex-start;
    margin-left: 5px;
`;

const Content =styled.div `
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;

const Wrap=styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/69%)0px 26px 30px -10px,rgb(0 0 0/73%)0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid white;

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;

        &:hover{
            box-shadow: rgb(0 0 0/80%)0px 40px 58px -16px,rgb(0 0 0/72%)0px 30px 22px -10px;
            transform: scale(1.05);
            border: 3px solid white;
        }
    }
`;

export default Recommends ;
