import React from "react";
import { FaEllipsisH, FaCheckCircle } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    location,
    discription: description,
    category,
    isVerifiedSeller,
    conditionType,
    dateOfPost,
    mobileNumber,
    originalPrice,
    resalePrice,
    sellerName,
    yearsOfUse,
  } = product;

  return (
    <div className="card bg-base-100 shadow-xl border relative">
      <div className="dropdown dropdown-bottom dropdown-end absolute right-3 top-2">
        <label
          tabIndex={0}
          className="text-xl font-extrabold cursor-pointer"
        >
          <FaEllipsisH />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 border rounded-box w-52"
        >
          <li>
            <button className="">Report Product</button>
          </li>
        </ul>
      </div>
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="p-5">
        <h2 className="card-title" title={name}>
          {name.slice(0, 50)}...
        </h2>
        <div className="w-full mt-2">
          <div className="flex justify-between items-center">
            <p>Posted Date : {dateOfPost}</p>
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
            <small>{description}</small>
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
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1">
                {sellerName}{" "}
                {isVerifiedSeller && (
                  <p className="text-blue-500">
                    <FaCheckCircle />
                  </p>
                )}
              </p>
              <p className="font-semibold">Mobile : {mobileNumber}</p>
            </div>
          </div>
          <button className="btn btn-primary mt-3 w-full">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
