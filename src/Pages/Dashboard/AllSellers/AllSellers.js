import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../components/Loader/Loader";

const AllSellers = () => {
  const { data: sellers, isLoading } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allSellers");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-5 ml-5">
      <h2 className="text-3xl mb-3">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) => (
              <tr key={seller._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={seller.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller?.verification ? (
                    <span className="badge badge-outline badge-info font-semibold">
                      Verified
                    </span>
                  ) : (
                    <button className="btn btn-sm btn-info text-white">Verify</button>
                  )}
                </td>
                <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
