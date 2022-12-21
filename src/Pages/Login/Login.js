import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { resetPassword, signIn, googleSignIn } = useContext(AuthContext);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  const [token] = useToken(loggedInUserEmail);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.form?.pathname || "/";

  const [isOnModal, setIsOnModal] = useState(true);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(
          `Login successfully. Congratulations ${user.displayName}.`
        );
        setLoggedInUserEmail(user.email);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message.slice(22, err?.message?.length - 2));
      });
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Password reset successfully. Please check your email.");
        setIsOnModal(false);
      })
      .catch((err) => console.error(err));
  };

  const googleSignHandler = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setLoggedInUserEmail(user.email);
        const data = {
          name: user.displayName,
          email: user.email,
          typeOfUser: "buyer",
          image: user.photoURL,
        };

        fetch("https://techxbazar-server-side.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Login successfully.");
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="border w-96 mx-auto p-5 my-16 rounded-lg">
        <h2 className="text-3xl text-center mb-7 mt-2">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor="email">Email</label>
          {errors?.email && (
            <small className="text-red-500 ml-3">
              * {errors?.email?.message}
            </small>
          )}
          <input
            {...register("email", { required: "Please fil the input field" })}
            type="email"
            id="email"
            className="w-full input input-bordered my-4"
            placeholder="Email"
          />

          <label htmlFor="password">Password</label>
          {errors?.password && (
            <small className="text-red-500 ml-3">
              *{errors?.password?.message}
            </small>
          )}
          <input
            {...register("password", {
              required: "Please fil the password field",
            })}
            type="password"
            id="password"
            className="w-full input input-bordered my-4"
            placeholder="Password"
          />

          <label htmlFor="resetPassword-Modal" className="cursor-pointer">
            Forget password?
          </label>
          <input
            type="submit"
            value="Login"
            className="block btn btn-primary mx-auto my-5"
          />
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="text-primary font-semibold" to="/signup">
            Create an account
          </Link>
        </p>
        <button
          onClick={googleSignHandler}
          className="btn btn-outline btn-primary w-full mt-3 mb-5"
        >
          <FcGoogle className="text-2xl mr-2" /> Sign in With Google
        </button>
      </div>

      {isOnModal && (
        <>
          <input
            type="checkbox"
            id="resetPassword-Modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="resetPassword-Modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Reset your password</h3>
              <form onSubmit={handleResetPassword}>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full my-3"
                  placeholder="Enter your email"
                  required
                />
                <input
                  type="submit"
                  value="Reset"
                  className="btn flex btn-primary mx-auto"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
