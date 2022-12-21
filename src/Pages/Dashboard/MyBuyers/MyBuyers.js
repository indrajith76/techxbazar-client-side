import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loader from "../../../components/Loader/Loader";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const { data: myBuyers, isLoading } = useQuery({
    queryKey: ["myBuyers"],
    queryFn: async () => {
      const res = await fetch(
        `https://techxbazar-server-side.vercel.app/myBuyers?email=${user?.email}`
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
      <h2 className="text-3xl mb-5">My Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Which Product Buy</th>
            </tr>
          </thead>
          <tbody>
            {myBuyers.map((buyer, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{buyer.buyerEmail}</td>
                <td>{buyer.productName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
