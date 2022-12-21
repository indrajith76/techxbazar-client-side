import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const AllUsers = () => {
  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(
        "https://techxbazar-server-side.vercel.app/allUsers"
      );
      const data = await res.json();
      return data;
    },
  });

  const makeAdminHandler = (email, name) => {
    fetch(
      `https://techxbazar-server-side.vercel.app/makeAdmin?email=${email}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${name} is now Admin`);
        refetch();
      });
  };

  const deleteUser = (email, name) => {
    const confirm = window.confirm(`Are you sure to delete ${name} account.`);
    if (confirm) {
      console.log(email);
      fetch(
        `https://techxbazar-server-side.vercel.app/deleteUser?email=${email}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`${name} account deleted successfully.`);
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
      <h2 className="text-3xl mb-3">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, idx) => (
              <tr key={user?._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.typeOfUser === "seller" && (
                    <span className="badge badge-outline badge-success font-semibold">
                      {user?.typeOfUser}
                    </span>
                  )}
                  {user?.typeOfUser === "buyer" && (
                    <span className="badge badge-outline badge-info font-semibold">
                      {user?.typeOfUser}
                    </span>
                  )}
                  {user?.typeOfUser === "admin" && (
                    <span className="badge badge-outline badge-primary font-semibold">
                      {user?.typeOfUser}
                    </span>
                  )}
                </td>
                <td>
                  <div className="flex gap-3 justify-end">
                    {user?.typeOfUser === "admin" ? (
                      ""
                    ) : (
                      <button
                        onClick={() =>
                          makeAdminHandler(user?.email, user?.name)
                        }
                        className="btn btn-info btn-sm text-white"
                      >
                        Make Admin
                      </button>
                    )}
                    <button
                      onClick={() => deleteUser(user?.email, user?.name)}
                      className="btn btn-error btn-sm"
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
    </div>
  );
};

export default AllUsers;
