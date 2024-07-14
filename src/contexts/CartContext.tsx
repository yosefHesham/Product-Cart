/* eslint-disable no-case-declarations */
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define CartModel interface
export interface CartModel {
  color: string;
  size: string;
  title: string;
  price: number;
  quantity: number;
}

// Define Action types
type Action =
  | { type: "ADD_TO_CART"; payload: CartModel }
  | { type: "REMOVE_FROM_CART"; payload: { color: string; size: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { color: string; size: string; quantity: number };
    };

// Initial state
const initialState: CartModel[] = [];

// Context and Provider
interface CartContextType {
  cart: CartModel[];
  addToCart: (item: CartModel) => void;
  removeFromCart: (color: string, size: string) => void;
  updateQuantity: (color: string, size: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartModel[], action: Action): CartModel[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(
        (item) =>
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (existingItemIndex !== -1) {
        // If item already exists, update quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return updatedCart;
      } else {
        // If item does not exist, add it to cart
        return [...state, { ...action.payload }];
      }
    case "REMOVE_FROM_CART":
      return state.filter(
        (item) =>
          !(
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.color === action.payload.color && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartModel) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (color: string, size: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { color, size } });
  };

  const updateQuantity = (color: string, size: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { color, size, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
