import React, { useState } from "react";
import categories from "../Data/data.json";
import { Button } from "@mui/material";
import { ProductList } from "./ProductList";

export const Products = ({ CategoriesItem }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2  w-full p-3 ">
        {CategoriesItem === "Chicken" &&
          categories.Chicken.map((item) => (
            <ProductList key={item.id} item={item} />
          ))}
        {CategoriesItem === "Mutton" &&
          categories.Mutton.map((item) => (
            <ProductList item={item} key={item.id} />
          ))}
        {CategoriesItem === "Fish" &&
          categories.Fish.map((item) => (
            <ProductList item={item} key={item.id} />
          ))}
        {CategoriesItem === "Prawn" &&
          categories.Prawn.map((item) => (
            <ProductList item={item} key={item.id} />
          ))}
        {CategoriesItem === "Other" &&
          categories.Other.map((item) => (
            <ProductList item={item} key={item.id} />
          ))}
      </div>
    </>
  );
};
