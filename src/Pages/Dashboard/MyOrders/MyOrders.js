import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loader from "../../../components/Loader/Loader";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders, isLoading } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myOrders?email=${user?.email}`
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
      {myOrders?.length === 0 ? (
        <div className="w-60 h-60 flex items-center justify-center border-4 border-red-400 mx-auto rounded-full mt-[20vh]">
          <h2 className="text-4xl text-center font-bold text-red-400">
            No Products <br></br>Found
          </h2>
        </div>
      ) : (
        <>
          <h2 className="text-3xl mb-4">MyProducts</h2>
          <div className="overflow-x-auto scrollbar-style">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="w-40">Product Name</th>
                  <th>Seller Email</th>
                  <th>Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((order) => (
                  <tr>
                    <th>1</th>
                    <td>
                      <div className="w-56 overflow-scroll">
                        {order.productName}
                      </div>
                    </td>
                    <td>{order.sellerEmail}</td>
                    <td>${order.price}</td>
                    <td>
                      <div className="flex justify-end gap-5">
                        <button className="btn btn-sm btn-info text-white">Pay</button>
                        <button className="btn btn-sm btn-error">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
