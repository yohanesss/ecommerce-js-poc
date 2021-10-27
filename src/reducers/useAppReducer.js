import { useReducer } from "react";
import {
    ADD_TO_CART,
    UPDATE_CART,
    FETCH_PRODUCTS,
    INIT_ADD_TO_CART,
    INIT_FETCH_PRODUCTS,
} from "./Actions";

const useAppReducer = () => {
    const initialState = {
        cart: [],
        products: [],
        inProcessAddToCartProducts: [],
        isLoadingProducts: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case INIT_FETCH_PRODUCTS:
                return {
                    ...state,
                    isLoadingProducts: true,
                };
            case FETCH_PRODUCTS:
                return {
                    ...state,
                    products: action.payload,
                    isLoadingProducts: false,
                };
            case INIT_ADD_TO_CART:
                const inProcessAddToCartProducts =
                    state.inProcessAddToCartProducts.slice();
                inProcessAddToCartProducts[action.payload.id] = true;
                return {
                    ...state,
                    inProcessAddToCartProducts,
                };
            case ADD_TO_CART:
                return {
                    ...state,
                    cart: action.payload,
                    inProcessAddToCartProducts: [],
                };
            case UPDATE_CART:
                console.log("called!", action.payload);
                const newState = {
                    ...state,
                    cart: action.payload,
                };
                console.log("[newState]", newState);
                return newState;
            default:
                throw new Error("Invalid action!");
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return { state, dispatch };
};

export default useAppReducer;
