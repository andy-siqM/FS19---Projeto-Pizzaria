import { styled } from "styled-components";
import Home from "../../pages/Home";


const Header = () => {
    return(
        <>
           <HeaderContainer>
               <HeaderLogo>LOGO</HeaderLogo>
               <HeaderBTN href="/login">Login</HeaderBTN>
           </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
   width: 100%;
   background-color: #bd0000;
   padding: 16px 60px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const HeaderLogo = styled.h1`
    font-size: 44px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderBTN = styled.a`
    display: block;
    height: 46px;
    line-height: 46px;
    padding: 0 26px;
    background-color: #FFFFFF;
    color: #bd0000;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
`;

export default Header;