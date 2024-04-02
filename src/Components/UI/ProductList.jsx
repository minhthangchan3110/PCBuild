import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ data }) {
  return (
    <>
      {data.map((item) => (
        <ProductCard item={item} />
      ))}
    </>
  );
}
