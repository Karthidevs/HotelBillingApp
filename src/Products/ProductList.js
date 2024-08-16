import React, { useContext } from "react";
import { Context } from "../context/Context";

export const ProductList = ({ item }) => {
  const [state, dispatch] = useContext(Context);

  const clickHandler = () => {
    // add item to bill cart
    dispatch({ type: "item", payload: item });
  };

  const removeHandler = () => {
    // remove item to bill cart
    dispatch({ type: "remove", payload: item });
  };
  return (
    <div className="w-47 bg-gray-300 text-center box-border">
      <img
        className="w-full p-2 "
        src="popular-dish-img2.jpg"
        alt="offer img"
      />
      <p>{item.name}</p>
      <strong>&#x20B9;{item.price}</strong>
      <div className="flex justify-center">
        <button
          className="ml-5  w-14 bg-gray-600 text-center text-white "
          onClick={clickHandler}
        >
          Bill
        </button>
        <button
          onClick={() => removeHandler(item.id)}
          className="ml-5   w-20 bg-gray-600 text-center text-white "
        >
          Remove
        </button>
      </div>
    </div>
  );
};
