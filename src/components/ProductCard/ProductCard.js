import React from "react";
import { ProductCardContainer, ProductInfo } from "./ProductCard.style";
import placeholder from "../../assets/placeholder.png";

const ProductCard = ({
    product,
    onAddToCart,
    lineIdx,
    inProcessAddToCartProducts,
}) => {
    const {
        id,
        sku,
        name,
        description,
        formatted_with_symbol: price,
    } = product;
    const imageUrl = product.media.source || placeholder;
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <ProductInfo>
                <span>{sku}</span>
                <b>{name}</b>
                <b style={{ color: "indianred" }}>{price}</b>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <button
                    disabled={inProcessAddToCartProducts[lineIdx] || false}
                    onClick={() => onAddToCart(id, 1, lineIdx)}
                >
                    Add to Cart
                </button>
            </ProductInfo>
        </ProductCardContainer>
    );
};

export default ProductCard;
