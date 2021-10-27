import styled from "styled-components";

const XXS = 320;
const XS = 600;
// const S = 640;
const M = 768;
const L = 1024;
const XL = 1280;

export const MainContainer = styled.div`
    @media (max-width: ${XXS}px) {
        margin-left: 5px;
        margin-right: 5px;
    }
    @media (max-width: ${XS}px) {
        margin-left: 8px;
        margin-right: 8px;
    }
    @media (max-width: ${M}px) {
        margin-left: 10px;
        margin-right: 10px;
    }
    @media (min-width: ${M}px) and (max-width: ${L}px) {
        max-width: 728px;
        margin: auto;
    }
    @media (min-width: ${L}px) and (max-width: ${XL}px) {
        max-width: 964px;
        margin: auto;
    }
    @media (min-width: ${XL}px) {
        max-width: 1200px;
        margin: auto;
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 67px;
`;
