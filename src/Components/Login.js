import React from 'react'
import styled from 'styled-components'

const Login =()=>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CTAone alt="" src="/Assets/cta-logo-one.svg"/>
                    <Signin>GET ALL THERE</Signin>
                    <Description>Get Premier Access to Rays and the Last Dragon for an additional fee with a Disney+Subscription.As of 02/06/2021,the Price of Disney Plus and the Disney Bundle will increase by $1</Description>
                    <CTAtwo alt="" src="/Assets/cta-logo-two.png"></CTAtwo>
                </CTA>
                <Bgimage />
            </Content>
        </Container>
    )
}

const Container =styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;

const Content =styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-b0x;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const Bgimage =styled.div`
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    background-image: url("/Assets/login-background.jpg");
    z-index: -1;
`;

const CTA=styled.div`
    margin-bottom: 2vw;
    display: flex;
    flex-direction: column;
    max-width: 650px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const CTAone =styled.img`
    margin-bottom: 12px;
    max-width: 650px;
    min-height: 1px;
    width: 80vw;
`;

const Signin =styled.a`
    font-weight: bold;
    background-color: #0063e5;
    color: #f9f9f9;
    max-width: 650px;
    width: 80vw;
    margin-bottom: 12px;
    padding: 16.5px 0;
    letter-spacing: 1.5px;
    font-size: 18px;

    &:hover{
        background-color: #0483ee;
    }
`;

const Description =styled.p`
    color: hsla(0,0%,95.3%,1);
    font-size: 13px;
    margin: 0,0,24px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`;

const CTAtwo =styled.img`
    max-width: 580px;
    width: 80vw;
    margin-top:20px;
    display: inline-block;
    vertical-align: bottom;
`;

export default Login;


