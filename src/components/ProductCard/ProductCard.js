import React from "react";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    location,
    discription,
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
    <div className="border p-5 pt-0">
      <div className="flex justify-center">
        <img src={image} className='' alt="" />
      </div>
      <h5>{name}</h5>
    </div>
  );
};

export default ProductCard;
