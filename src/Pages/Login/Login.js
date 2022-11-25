import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
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
            type="text"
            id="password"
            className="w-full input input-bordered my-4"
          />

          <button>Forget password?</button>
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
        <button className="btn btn-outline btn-primary w-full mt-3 mb-5">
          <FcGoogle className="text-2xl mr-2" /> Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
