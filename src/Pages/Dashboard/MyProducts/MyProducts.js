import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loader from "../../../components/Loader/Loader";
import "./MyProducts.css";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: myAllProducts, isLoading } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProducts?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-5 ml-5">
      <h2 className="text-3xl mb-4">MyProducts</h2>
      <div className="overflow-x-auto scrollbar-style">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="w-40">Name</th>
              <th>Date Of Post</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myAllProducts.map((product, idx) => (
              <tr key={product?._id}>
                <th>{idx + 1}</th>
                <td>
                  <p className="w-60 overflow-x-scroll">{product?.name}</p>
                </td>
                <td>{product?.dateOfPost.slice(0, 10)}</td>
                <td>${product?.resalePrice}</td>
                <td>
                  <span className="badge badge-outline font-semibold badge-success">
                    {product?.status === "sold" ? "Sold" : "Available"}
                  </span>
                </td>
                <td>
                  <div className="flex justify-center gap-3">
                    <button className="btn btn-xs btn-warning">
                      Add To Advertise
                    </button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
