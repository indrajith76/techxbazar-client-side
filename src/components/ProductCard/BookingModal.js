import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ product, setIsModalOn }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, resalePrice, sellerEmail } = product;

  const addBookingHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookProduct = {
      productId: _id,
      productName: form.productName.value,
      sellerEmail: form.email.value,
      price: form.price.value,
      sellerMobileNumber: form.phoneNumber.value,
      sellerLocation: form.location.value,
      buyerEmail: user.email,
    };

    fetch("https://techxbazar-server-side.vercel.app/myOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Booked successfully.");
          setIsModalOn(false);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name.slice(0, 22)}...</h3>
          <form onSubmit={addBookingHandler}>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full input input-bordered my-4"
              defaultValue={name}
              disabled
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full input input-bordered my-3"
              defaultValue={sellerEmail}
              disabled
            />
            <label htmlFor="price">Price</label>
            <input
              type="price"
              id="price"
              name="price"
              className="w-full input input-bordered my-3"
              defaultValue={resalePrice}
              disabled
            />
            <label htmlFor="location">Location</label>
            <input
              type="location"
              id="location"
              name="location"
              className="w-full input input-bordered my-3"
              required
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full input input-bordered my-3"
              required
            />
            <input
              type="submit"
              value="Add To Book"
              className="block btn btn-primary mx-auto my-3"
              disabled={!user && true}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
