import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const categoryId = window.location.pathname.split("/")[2];

  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        `https://techxbazar-server-side.vercel.app/category/${categoryId}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(data.products);
  return (
    <div className="container mx-auto lg:max-w-screen-xl">
      <h2 className="text-3xl font-bold text-slate-700 my-8">
        Products of {data.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
