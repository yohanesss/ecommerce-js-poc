import React, { useEffect, useState } from "react";

import { Navbar, ProductListing, Cart } from "./components";
import { ContentWrapper, MainContainer } from "./global.style";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { commerce } from "./api/commerce";
import {
    ADD_TO_CART,
    FETCH_PRODUCTS,
    INIT_ADD_TO_CART,
    INIT_FETCH_PRODUCTS,
    UPDATE_CART,
} from "./reducers/Actions";

import useAppReducer from "./reducers/useAppReducer";
import useDebounce from "./hooks/useDebounce";

const App = () => {
    const { state, dispatch } = useAppReducer();
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedProductQty, setSelectedProductQty] = useState(null);
    const [selectedProductLineIdx, setSelectedProductLineIdx] = useState(null);

    const handleAddToCart = (productId, quantity, lineIdx) => {
        setSelectedProductId(productId);
        setSelectedProductQty(quantity);
        setSelectedProductLineIdx(lineIdx);
        debounceAddToCart();
    };

    const debounceAddToCart = useDebounce(async () => {
        dispatch({
            type: INIT_ADD_TO_CART,
            payload: { id: selectedProductLineIdx },
        });
        const { cart } = await commerce.cart.add(
            selectedProductId,
            selectedProductQty
        );
        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
    }, 500);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: INIT_FETCH_PRODUCTS });
            const { data } = await commerce.products.list();
            dispatch({
                type: FETCH_PRODUCTS,
                payload: data,
            });
        };

        const fetchCart = async () => {
            dispatch({
                type: UPDATE_CART,
                payload: await commerce.cart.retrieve(),
            });
        };

        fetchProducts();
        fetchCart();
    }, [dispatch]);

    const deleteItemFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);
        console.log("[response]", response);
        dispatch({
            type: UPDATE_CART,
            payload: response.cart,
        });
    };

    const changeCartItemQty = async (productId, qty) => {
        console.log("[productId, qty]", productId, qty);
        const response = await commerce.cart.update(productId, {
            quantity: qty,
        });
        dispatch({
            type: UPDATE_CART,
            payload: response.cart,
        });
    };

    const changeItemQtyFromCart = async (productId, qty) => {
        if (qty == 0) {
            deleteItemFromCart(productId);
        } else {
            changeCartItemQty(productId, qty);
        }
    };

    const { cart, products, inProcessAddToCartProducts } = state;

    return (
        <Router>
            <div>
                <Navbar cart={cart} />
                <ContentWrapper>
                    <MainContainer>
                        <Switch>
                            <Route exact path="/">
                                <ProductListing
                                    products={products}
                                    onAddToCart={handleAddToCart}
                                    inProcessAddToCartProducts={
                                        inProcessAddToCartProducts
                                    }
                                />
                            </Route>
                            <Route path="/cart">
                                <Cart
                                    cart={cart}
                                    handleChangeQty={changeItemQtyFromCart}
                                    handleDeleteItem={deleteItemFromCart}
                                ></Cart>
                            </Route>
                        </Switch>
                    </MainContainer>
                </ContentWrapper>
            </div>
        </Router>
    );
};

export default App;
