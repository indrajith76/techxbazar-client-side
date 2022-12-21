import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, googleSignIn, updateUserProfile, logOut } =
    useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const location = useLocation();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const [profilePhoto, setProfilePhoto] = useState("");

  const from = location?.state?.form?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignUp = (data) => {
    // const { email, name, password, userType, userImg } = data;
    createUser(data.email, data.password)
      .then((result) => {
        const successToast = toast.loading(
          "Loading... Please wait few seconds"
        );
        const image = data?.userImg[0];
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
              const user = {
                name: data.name,
                email: data.email,
                typeOfUser: data.userType,
                image: imgData.data.url,
              };

              setProfilePhoto(user.image);
              updateUserData(user);

              fetch("https://techxbazar-server-side.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.acknowledged) {
                    setCreatedUserEmail(user.email);
                    toast.success("Account created successfully.", {
                      id: successToast,
                    });
                    logOut()
                      .then(() => {})
                      .catch(() => {});
                  }
                });
            }
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message.slice(22, err.message.length - 2));
      });
  };

  const googleSignHandler = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const data = {
          name: user.displayName,
          email: user.email,
          userType: "buyer",
          image: user.photoURL,
        };
        const successToast = toast.loading(
          "Loading... Please wait few seconds"
        );
        const image = data?.image;
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
              const user = {
                name: data.name,
                email: data.email,
                typeOfUser: data.userType,
                image: imgData.data.url,
              };

              setProfilePhoto(user.image);
              updateUserData(user);

              fetch("https://techxbazar-server-side.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  setCreatedUserEmail(user.email);
                  toast.success("Account created successfully.", {
                    id: successToast,
                  });
                });
            }
          });
        setCreatedUserEmail(user.email);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message.slice(22, err.message.length - 2));
      });
  };

  // const saveUser = (data, successToast) => {
  //   let image;
  //   if (data?.userImg) {
  //     image = data?.userImg[0];
  //   } else {
  //     image = data?.image;
  //   }
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgData) => {
  //       if (imgData.success) {
  //         const user = {
  //           name: data.name,
  //           email: data.email,
  //           typeOfUser: data.userType,
  //           image: imgData.data.url,
  //         };

  //         setProfilePhoto(user.image);
  //         updateUserData(user);

  //         fetch("https://techxbazar-server-side.vercel.app/users", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(user),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.acknowledged) {
  //               setCreatedUserEmail(user.email);
  //               toast.success("Account created successfully.", {
  //                 id: successToast,
  //               });
  //             }
  //           });
  //       }
  //     });
  // };

  const updateUserData = (data) => {
    const profile = {
      displayName: data.name,
      photoURL: data.image,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="border w-96 mx-auto p-5 my-16 rounded-lg">
        <h2 className="text-3xl text-center mb-7 mt-2">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label htmlFor="name">Name</label>
          {errors?.name && (
            <small className="text-red-500 ml-3">
              * {errors?.name?.message}
            </small>
          )}
          <input
            {...register("name", { required: "Please fil the name field" })}
            type="text"
            id="name"
            className="w-full input input-bordered my-4"
          />
          <label htmlFor="email">Email</label>
          {errors?.email && (
            <small className="text-red-500 ml-3">
              * {errors?.email?.message}
            </small>
          )}
          <input
            {...register("email", { required: "Please fil the email field" })}
            type="email"
            id="email"
            className="w-full input input-bordered my-4"
          />

          <fieldset className="mb-3 border py-1 rounded-lg">
            <legend>User types</legend>
            <input
              {...register("userType")}
              type="radio"
              name="userType"
              className="ml-3"
              id="buyer"
              value="buyer"
              checked
            />
            <label htmlFor="buyer"> Buyer</label>
            <input
              {...register("userType", { required: true })}
              type="radio"
              name="userType"
              className="ml-5"
              id="seller"
              value="seller"
            />
            <label htmlFor="seller"> Seller</label>
          </fieldset>

          <input
            {...register("userImg", { required: true })}
            type="file"
            className="file-input file-input-primary w-full"
          />

          <label htmlFor="password">Password</label>
          {errors?.password && (
            <small className="text-red-500 ml-3">
              * {errors?.password?.message}
            </small>
          )}
          <input
            {...register("password", {
              required: "Please fil the password field",
              minLength: {
                value: 6,
                message: "Password should have at least 6 character",
              },
            })}
            type="password"
            id="password"
            className="w-full input input-bordered my-4"
          />
          <input
            type="submit"
            value="Sign Up"
            className="block btn btn-primary mx-auto my-5"
          />
        </form>
        <p>
          Have an account?{" "}
          <Link className="text-primary font-semibold" to="/login">
            Please Login
          </Link>
        </p>
        <button
          onClick={googleSignHandler}
          className="btn btn-outline btn-primary w-full mt-3 mb-5"
        >
          <FcGoogle className="text-2xl mr-2" /> Sign up With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
