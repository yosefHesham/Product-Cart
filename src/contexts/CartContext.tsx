/* eslint-disable no-case-declarations */
import React, { createContext, useReducer, ReactNode } from "react";

export interface CartModel {
  color: string;
  size: string;
  brand: string;
  title: string;
  price: number;
  quantity: number;
}

type Action =
  | { type: "ADD_TO_CART"; payload: CartModel }
  | { type: "REMOVE_FROM_CART"; payload: { color: string; size: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { color: string; size: string; quantity: number };
    }
  | { type: "UPDATE_CART_COUNT"; payload: number }
  | { type: "CHECKOUT" };

const initialState: {
  cart: CartModel[];
  itemsCounter: number;
} = {
  cart: [],
  itemsCounter: 0,
};

export interface CartContextType {
  cart: CartModel[];
  itemsCounter: number;
  addToCart: (item: CartModel) => void;
  removeFromCart: (color: string, size: string) => void;
  updateQuantity: (color: string, size: string, quantity: number) => void;
  checkout: () => void;
  updateCartCount: (quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const cartReducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      let newCart;
      if (existingItemIndex !== -1) {
        newCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newCart = [...state.cart, { ...action.payload }];
      }
      return {
        ...state,
        cart: newCart,
        itemsCounter: state.itemsCounter + action.payload.quantity,
      };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) =>
          !(
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
      const removedItem = state.cart.find(
        (item) =>
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      return {
        ...state,
        cart: filteredCart,
        itemsCounter: removedItem
          ? state.itemsCounter - removedItem.quantity
          : state.itemsCounter,
      };

    case "UPDATE_QUANTITY":
      const updatedCartWithQuantity = state.cart.map((item) =>
        item.color === action.payload.color && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const updatedQuantity = state.cart.reduce(
        (total, item) =>
          item.color === action.payload.color &&
          item.size === action.payload.size
            ? total + action.payload.quantity - item.quantity
            : total,
        0
      );
      return {
        ...state,
        cart: updatedCartWithQuantity,
        itemsCounter: state.itemsCounter + updatedQuantity,
      };

    case "UPDATE_CART_COUNT":
      return { ...state, itemsCounter: action.payload };

    case "CHECKOUT":
      return { cart: [], itemsCounter: 0 };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartModel) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (color: string, size: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { color, size } });
  };

  const updateQuantity = (color: string, size: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { color, size, quantity } });
  };

  const updateCartCount = (quantity: number) => {
    dispatch({ type: "UPDATE_CART_COUNT", payload: quantity });
  };
  const checkout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        itemsCounter: cartState.itemsCounter,
        addToCart,
        checkout,
        updateCartCount,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
