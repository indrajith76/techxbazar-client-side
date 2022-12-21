import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const AllBuyers = () => {
  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const res = await fetch(
        "https://techxbazar-server-side.vercel.app/allBuyers"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyers = (email) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      fetch(
        `https://techxbazar-server-side.vercel.app/allBuyers?email=${email}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Successfully Deleted Seller ${email}`);
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-5 ml-5">
      <h2 className="text-3xl mb-3">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, idx) => (
              <tr key={buyer._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={buyer.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBuyers(buyer.email)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
