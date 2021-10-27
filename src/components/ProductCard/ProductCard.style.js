import styled from "styled-components";

export const ProductCardContainer = styled.div`
    margin: 10px;
    box-shadow: 1px 1px 5px 2px gainsboro;
    cursor: pointer;
    flex: 4;
    max-width: 250px;

    img {
        width: 100%;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    p {
        margin: 0;
        overflow: hidden;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 18px;
        font-weight: bold;
    }

    span,
    b {
        margin-bottom: 5px;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
