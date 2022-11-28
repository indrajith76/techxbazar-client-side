import React, { useState } from "react";
import { FaEllipsisH, FaCheckCircle } from "react-icons/fa";
import BookingModal from "./BookingModal";
import ReportModal from "./ReportModal";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    location,
    description,
    category,
    isVerified,
    conditionType,
    dateOfPost,
    mobileNumber,
    originalPrice,
    resalePrice,
    sellerName,
    sellerImage,
    yearsOfUse,
    isSold,
  } = product;
  const [isModalOn, setIsModalOn] = useState(true);

  return (
    <div className="card bg-base-100 shadow-xl border relative">
      <div className="dropdown dropdown-bottom dropdown-end absolute right-3 top-2">
        <label tabIndex={0} className="text-xl font-extrabold cursor-pointer">
          <FaEllipsisH />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 border rounded-box w-52"
        >
          <li>
            <label htmlFor="report-modal">Report Product</label>
          </li>
        </ul>
      </div>
      <figure>
        <img className="h-56" src={image} alt="" />
      </figure>
      <div className="p-5">
        <h2 className="card-title" title={name}>
          {name.slice(0, 50)}...
        </h2>
        <div className="w-full mt-2">
          <div className="flex justify-between items-center">
            <p>Posted Date : {dateOfPost.slice(0, 10)}</p>
            <p>
              Year Of Use :{" "}
              <span className="badge badge-primary">{yearsOfUse}</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Location : {location}</p>
            <p>
              Condition :{" "}
              <span className="badge badge-primary badge-sm">
                {conditionType}
              </span>
            </p>
          </div>
          <p>
            <small>
              {description.length > 170
                ? `${description.slice(0, 170)}...`
                : description}
            </small>
          </p>
          <div className="flex justify-between text-lg font-bold">
            <p>
              Original Price :{" "}
              <span className="text-primary">${originalPrice}</span>{" "}
            </p>
            <p>
              Resell Price :
              <span className="text-primary"> ${resalePrice}</span>
            </p>
          </div>
          <div className="flex gap-4 mt-4 items-center ml-1">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={sellerImage} alt="" />
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1">
                {sellerName}{" "}
                {isVerified && (
                  <p className="text-blue-500">
                    <FaCheckCircle />
                  </p>
                )}
              </p>
              <p className="font-semibold">Mobile : {mobileNumber}</p>
            </div>
          </div>
          {isSold ? (
            <span className="btn text-xl btn-disabled mt-3 w-full">
              Not Available
            </span>
          ) : (
            <label
              htmlFor="booking-modal"
              className="btn btn-primary mt-3 w-full"
            >
              Book Now
            </label>
          )}
        </div>
      </div>
      {isModalOn && (
        <ReportModal
          product={product}
          setIsModalOn={setIsModalOn}
        ></ReportModal>
      )}
      {isModalOn && (
        <BookingModal
          product={product}
          setIsModalOn={setIsModalOn}
        ></BookingModal>
      )}
    </div>
  );
};

export default ProductCard;
