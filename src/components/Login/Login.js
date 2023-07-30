import React, { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    signIn(userData.email, userData.password)
      .then((res) => {
        toast.success("Successfully Login");
        console.log(res);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 500);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen my-5 flex justify-center items-center flex-col">
      <h1 className="text-center text-4xl font-bold my-5">Login</h1>
      <form onSubmit={handleLogin} className="form-control">
        <div className="my-3">
          <label className="input-group">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="my-3">
          <p>
            Don't have an account? Please{" "}
            <Link to="/register" className="text-warning">
              Register
            </Link>
          </p>
        </div>
        <div className="my-3">
          <input
            type="submit"
            value="Login"
            className="btn btn-active btn-accent"
          />
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
