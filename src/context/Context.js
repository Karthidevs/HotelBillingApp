import { createContext, useReducer } from "react";

const initalvalue = {
  // initial state values
  items: [],
  totalAmount: 0,
  gstAmount: 0,
  totalToPay: 0,
  cartopen: false,
  quantity: 0,
};

const reduce = (state, action) => {
  const totalAmt = state.totalAmount + action.payload.price;
  const gstamount = 18 / 100;
  const gstvalue = totalAmt * gstamount;
  const totalgstamount = gstvalue.toFixed(0);
  const tpay = totalAmt + Number(totalgstamount);
  if (action.type === "item") {
    // Add items to cart
    state.cartopen = true;
    // find item index for existing item
    const findindex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    // if findindex is less then 0 add item to cart
    if (findindex < 0) {
      return {
        items: [...state.items, action.payload],
        totalAmount: totalAmt,
        gstAmount: +totalgstamount,
        totalToPay: tpay,
        cartopen: state.cartopen,
      };
    }
    // existing item updated the quantity and amount
    let updatedItem = [...state.items];
    updatedItem[findindex] = {
      ...updatedItem[findindex],
      quantity: updatedItem[findindex].quantity + 1,
    };

    //add price based on quantity
    updatedItem[findindex].price =
      action.payload.price * updatedItem[findindex].quantity;

    return {
      items: updatedItem,
      totalAmount: totalAmt,
      gstAmount: +totalgstamount,
      totalToPay: tpay,
      cartopen: state.cartopen,
    };
  }
  // remove item in the cart
  else if (action.type === "remove") {
    const find = state.items.find((ite) => ite.id === action.payload.id);
    // find if the item not in cart the remove button not work
    if (!find) {
      // not in cart so return default value
      return {
        items: [...state.items],
        totalAmount: state.totalAmount,
        gstAmount: state.gstAmount,
        totalToPay: state.totalToPay,
        cartopen: state.cartopen,
      };
    }
    if (find) {
      // item in cart reduce quantity and price

      const findindex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItem = [...state.items];
      if (findindex >= 0) {
        updatedItem[findindex] = {
          ...updatedItem[findindex],
          quantity: updatedItem[findindex].quantity - 1,
        };
        updatedItem[findindex].price =
          updatedItem[findindex].price - action.payload.price;
      }
      // update the cart after the remove item
      const newItem = updatedItem.filter((item) => item.quantity !== 0);
      const totalAmt = state.totalAmount - action.payload.price;
      const gstamount = 18 / 100;
      const gstvalue = totalAmt * gstamount;
      const totalgstamount = gstvalue.toFixed(0);
      const tpay = totalAmt + Number(totalgstamount);
      return {
        items: newItem,
        totalAmount: totalAmt,
        gstAmount: totalgstamount,
        totalToPay: tpay,
        cartopen: state.cartopen,
      };
    }
  }
};
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const reduvalue = useReducer(reduce, initalvalue);
  return <Context.Provider value={reduvalue}>{children}</Context.Provider>;
};
