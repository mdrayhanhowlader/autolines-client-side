import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "./../../../hooks/useToken";

const Login = () => {
  const { user, logIn, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  // login handler
  const handleLogin = async (data) => {
    const email = data.email;
    const password = data.password;

    await logIn(email, password);
    setLoginUserEmail(email);
    reset();
  };

  // const googleLogin = async () => {
  //   await await googleSignIn();
  //   navigate(from, { replace: true });
  // };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const data = result.user;
        const user = {
          name: data.displayName,
          email: data.email,
          image: data?.photoURL,
          role: "Buyer",
        };

        fetch("https://autolines-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const email = user.email;
            setLoginUserEmail(email);
          });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <form className="w-full mx-auto" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              placeholder="Password"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="w-full max-w-xs">
            <input
              type="submit"
              className="btn btn-outline w-full max-w-xs mt-6"
              value="Login"
            />
            <div className="divider">OR</div>
            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full max-w-xs mt-4"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
