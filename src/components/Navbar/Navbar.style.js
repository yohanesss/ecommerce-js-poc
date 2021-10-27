import styled from "styled-components";
import { MainContainer } from "../../global.style";

export const NavbarContainer = styled.nav`
    padding: 10px;
    border-bottom: 1px solid gainsboro;
    box-shadow: 1px 1px 7px 0px gainsboro;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
`;

export const NavbarInnerContainer = styled(MainContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    font-size: 20px;
    display: flex;
    border: 1px solid black;
    width: fit-content;
    cursor: default;
`;

export const BlackBg = styled.div`
    background-color: black;
    color: white;
    padding: 5px;
`;

export const WhiteBg = styled.div`
    background-color: white;
    color: black;
    padding: 5px;
`;

export const CartIconContainer = styled.div`
    position: relative;
    padding-right: 10px;
`;

export const CartIconBadge = styled.span`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: -2.5px;
    right: 4px;
    padding: 5px;
    background-color: indianred;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
`;
