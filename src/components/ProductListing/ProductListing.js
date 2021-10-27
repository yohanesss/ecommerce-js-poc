import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductListingContainer } from "./ProductListing.style";

const ProductListing = ({
    products,
    onAddToCart,
    inProcessAddToCartProducts,
}) => {
    return (
        <ProductListingContainer>
            {products.map((prod, lineIdx) => (
                <ProductCard
                    product={prod}
                    key={prod.id}
                    lineIdx={lineIdx}
                    onAddToCart={onAddToCart}
                    inProcessAddToCartProducts={inProcessAddToCartProducts}
                />
            ))}
        </ProductListingContainer>
    );
};

export default ProductListing;
