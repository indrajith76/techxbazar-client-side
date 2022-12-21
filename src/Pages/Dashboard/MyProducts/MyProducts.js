import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loader from "../../../components/Loader/Loader";
import "./MyProducts.css";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myAllProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://techxbazar-server-side.vercel.app/myProducts?email=${user.email}`,
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

  const deleteHandler = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      fetch(`https://techxbazar-server-side.vercel.app/myProducts?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Successfully Deleted.`);
            refetch();
          }
        });
    }
  };

  const addAdvertiseHandler = (id) => {
    fetch(`https://techxbazar-server-side.vercel.app/myProducts?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`Advertise Added Successfully.`);
        refetch();
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-5 ml-5">
      {myAllProducts.length === 0 ? (
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
                      <div className="flex justify-end gap-3">
                        {product?.isAdvertise ? (
                          <span className="badge badge-outline font-semibold">
                            Advertised
                          </span>
                        ) : (
                          <button
                            onClick={() => addAdvertiseHandler(product._id)}
                            className="btn btn-xs btn-warning"
                          >
                            Add To Advertise
                          </button>
                        )}
                        <button
                          onClick={() => deleteHandler(product?._id)}
                          className="btn btn-xs btn-error"
                        >
                          Delete
                        </button>
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

export default MyProducts;
