import React from "react";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  console.log("Category", params);
  return <div>CategoryProduct</div>;
};

export default CategoryProduct;
