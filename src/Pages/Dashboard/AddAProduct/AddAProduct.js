import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./AddAProduct.css";

const AddAProduct = () => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const { user } = useContext(AuthContext);
  const time = new Date();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const successToast = toast.loading("Loading... Please wait few seconds");
    let image = data?.productImg[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            name: data.productName,
            image: imgData.data.url,
            location: data.location,
            description: data.description,
            category: data.category,
            conditionType: data.conditionType,
            dateOfPost: time,
            mobileNumber: data.mobileNumber,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            sellerName: user.displayName,
            sellerImage: user.photoURL,
            sellerEmail: user.email,
            yearsOfUse: data.yearOfUse,
          };

          fetch("https://techxbazar-server-side.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              navigate("/dashboard/myproducts");
              toast.success("Product Added Successfully.", {
                id: successToast,
              });
            })
            .catch((err) => console.error(err));
        }
      });
  };

  return (
    <div className="pt-5 md:p-5 mb-16">
      <h2 className="text-3xl text-center">Add A Product</h2>
      <form
        className="md:w-3/5 mx-auto mt-10 p-5 border rounded-lg"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <label htmlFor="productName">Product Name</label>
        {errors?.productName && (
          <small className="text-red-500 ml-3">
            * {errors?.productName?.message}
          </small>
        )}
        <input
          {...register("productName", {
            required: "Please fil the productName field",
          })}
          type="text"
          id="productName"
          className="w-full input input-bordered my-4"
          placeholder="Enter the product name"
        />

        <label htmlFor="location">Location</label>
        {errors?.location && (
          <small className="text-red-500 ml-3">
            * {errors?.location?.message}
          </small>
        )}
        <input
          {...register("location", {
            required: "Please fil the location field",
          })}
          type="text"
          id="location"
          className="w-full input input-bordered my-4"
          placeholder="Enter the location"
        />

        <label htmlFor="category">Category</label>
        {errors?.category && (
          <small className="text-red-500 ml-3">
            * {errors?.category?.message}
          </small>
        )}
        <input
          {...register("category", {
            required: "Please fil the category field",
          })}
          type="text"
          id="category"
          className="w-full input input-bordered my-4"
          placeholder="Enter the category"
        />

        <label htmlFor="conditionType">Condition Type</label>
        {errors?.conditionType && (
          <small className="text-red-500 ml-3">
            * {errors?.conditionType?.message}
          </small>
        )}
        <select
          className="w-full select select-bordered my-4"
          {...register("conditionType", {
            required: "Please select condition type",
          })}
          name="conditionType"
          id="conditionType"
        >
          <option value="">Select Condition Type</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>

        <label htmlFor="mobileNumber">Mobile Number</label>
        {errors?.mobileNumber && (
          <small className="text-red-500 ml-3">
            * {errors?.mobileNumber?.message}
          </small>
        )}
        <input
          {...register("mobileNumber", {
            required: "Please fil the Mobile Number field",
          })}
          type="text"
          id="mobileNumber"
          className="w-full input input-bordered my-4"
          placeholder="Enter the mobile number"
        />

        <label htmlFor="originalPrice">Original Price</label>
        {errors?.originalPrice && (
          <small className="text-red-500 ml-3">
            * {errors?.originalPrice?.message}
          </small>
        )}
        <input
          {...register("originalPrice", {
            required: "Please fil the Original Price field",
          })}
          type="text"
          id="originalPrice"
          className="w-full input input-bordered my-4"
          placeholder="Enter the original price"
        />

        <label htmlFor="resalePrice">Resale Price</label>
        {errors?.resalePrice && (
          <small className="text-red-500 ml-3">
            * {errors?.resalePrice?.message}
          </small>
        )}
        <input
          {...register("resalePrice", {
            required: "Please fil the Resale Price field",
          })}
          type="text"
          id="resalePrice"
          className="w-full input input-bordered my-4"
          placeholder="Enter the Resale Price"
        />

        <label htmlFor="yearOfUse">Year Of Use</label>
        {errors?.yearOfUse && (
          <small className="text-red-500 ml-3">
            * {errors?.yearOfUse?.message}
          </small>
        )}
        <input
          {...register("yearOfUse", {
            required: "Please fil the Year Of Use field",
          })}
          type="text"
          id="yearOfUse"
          className="w-full input input-bordered my-4"
          placeholder="Enter the Year Of Use"
        />

        <input
          {...register("productImg", { required: true })}
          type="file"
          className="file-input file-input-primary w-full mb-3"
        />

        <label htmlFor="description">Description</label>
        {errors?.description && (
          <small className="text-red-500 ml-3">
            * {errors?.description?.message}
          </small>
        )}
        <textarea
          {...register("description", {
            required: "Please fil the description field",
          })}
          type="text"
          id="description"
          className="w-full input input-bordered my-4 pt-2"
          placeholder="Enter the description"
        ></textarea>

        <input
          type="submit"
          value="Add Product"
          className="block btn btn-primary mx-auto my-5"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
