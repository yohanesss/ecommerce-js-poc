import React from "react";
import placeholder from "../../assets/placeholder.png";
import {
    CartContainer,
    CartItemContainer,
    CartItemInfoContainer,
    CartItemProductName,
    CartItemProductQty,
    CartItemProductSku,
    QtyAdjusterButton,
    QtyAdjusterContainer,
} from "./Cart.style";

const Cart = ({ cart, handleChangeQty, handleDeleteItem }) => {
    const { line_items } = cart;

    const renderCartItems = () =>
        line_items.map(({ id, image, name, sku, quantity }) => (
            <CartItemContainer id={id} key={id}>
                <img src={image?.url || placeholder} alt={name} />
                <CartItemInfoContainer>
                    <CartItemProductName>{name}</CartItemProductName>
                    <CartItemProductSku>{sku}</CartItemProductSku>
                    <CartItemProductQty>Qty: {quantity}</CartItemProductQty>
                    <QtyAdjusterContainer>
                        <QtyAdjusterButton
                            onClick={() => handleChangeQty(id, quantity + 1)}
                        >
                            +
                        </QtyAdjusterButton>
                        <QtyAdjusterButton
                            onClick={() => handleChangeQty(id, quantity - 1)}
                        >
                            -
                        </QtyAdjusterButton>
                    </QtyAdjusterContainer>
                </CartItemInfoContainer>
            </CartItemContainer>
        ));
    return (
        <CartContainer>
            <h1>Total Items: {line_items?.length}</h1>
            {line_items?.length > 0 && renderCartItems()}
        </CartContainer>
    );
};

export default Cart;
