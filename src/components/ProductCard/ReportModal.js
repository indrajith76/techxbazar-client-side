import React from "react";
import toast from "react-hot-toast";

const ReportModal = ({ product, setIsModalOn }) => {
  const { _id, name, sellerEmail } = product;
  const handleReport = (event) => {
    event.preventDefault();
    const form = event.target;
    const reportDoc = {
      productId: _id,
      productName: name,
      sellerEmail,
      reportText: form.report.value,
    };
    fetch("https://techxbazar-server-side.vercel.app/reports", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reportDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsModalOn(false);
        toast.success("Reported successfully");
      });
  };
  return (
    <div>
      <input type="checkbox" id="report-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="report-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">Report TO Admin</h3>
          <form onSubmit={handleReport}>
            <label htmlFor="productName">Product Name</label>
            <input
              name="productName"
              className="input input-bordered w-full"
              type="text"
              defaultValue={name}
              disabled
            />
            <textarea
              className="border-2 rounded-lg pl-3 pt-3 w-full my-5"
              name="report"
              rows="5"
              placeholder="Write you report"
            ></textarea>
            <input type="submit" value="report" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
