import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyOrders = () => {
  const { data: myOrders } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/myOrders')
        const data = await res.json()
        return data;
    },
  });
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default MyOrders;
