import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const AllSellers = () => {
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://techxbazar-server-side.vercel.app/allSellers"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleVerify = (email, name) => {
    fetch(
      `https://techxbazar-server-side.vercel.app/verifySeller?email=${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${name} is new a verified seller`);
          refetch();
        }
      });
  };

  const handleDeleteSeller = (email, name) => {
    const confirm = window.confirm(`Are sure to delete seller ${name}?`);
    if (confirm) {
      fetch(
        `https://techxbazar-server-side.vercel.app/deleteSeller?email=${email}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Successfully Deleted Seller ${name}`);
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
              <tr key={seller?._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={seller?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>
                <td>
                  {seller?.isVerified ? (
                    <span className="badge badge-outline badge-info font-semibold">
                      Verified
                    </span>
                  ) : (
                    <button
                      onClick={() => handleVerify(seller?.email, seller?.name)}
                      className="btn btn-sm btn-info text-white"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <label
                    htmlFor="delete-confirm-modal"
                    onClick={() =>
                      handleDeleteSeller(seller?.email, seller?.name)
                    }
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </label>
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
