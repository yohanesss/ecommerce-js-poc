import styled from "styled-components";

export const CartContainer = styled.div``;

export const CartItemContainer = styled.div`
    display: flex;
    margin-bottom: 10px;

    img {
        width: 100px;
        height: 100px;
    }
`;

export const QtyAdjusterContainer = styled.div`
    display: flex;
`;

export const QtyAdjusterButton = styled.button`
    border-radius: 5px;
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: bold;
    margin-top: 5px;
    margin-right: 5px;
    border: none;
    padding: 5px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartItemInfoContainer = styled.div`
    margin-left: 10px;
    font-weight: bold;
`;

export const CartItemProductName = styled.div`
    overflow: hidden;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
    line-height: 18px;
`;

export const CartItemProductSku = styled.div`
    color: grey;
    margin-bottom: 5px;
`;

export const CartItemProductQty = styled.div`
    font-size: 12px;
`;
