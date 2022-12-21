import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../components/Loader/Loader";

const ReportedItems = () => {
  const { data: reports, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await fetch(
        `https://techxbazar-server-side.vercel.app/reports`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pl-5 py-5">
      <h2 className="text-3xl mb-5">Reports</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Id</th>
              <th>Seller Email</th>
              <th>Product Name</th>
              <th>Report Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="w-28 overflow-scroll">{report.productId}</div>
                </td>
                <td>{report.sellerEmail}</td>
                <td>
                  <div className="w-40 overflow-scroll">
                    {report.productName}
                  </div>
                </td>
                <td>
                  <div className="w-56 overflow-scroll">
                    {report.reportText}
                  </div>
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

export default ReportedItems;
