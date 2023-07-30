import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    signUp(newUser.email, newUser.password)
      .then((res) => {
        toast.success("Successfully Registered");
        console.log(res);
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen my-5 flex justify-center items-center flex-col">
      <h1 className="text-center text-4xl font-bold my-5">Register</h1>
      <form onSubmit={handleRegister} className=" form-control">
        <div className="my-3">
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </label>
        </div>

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
            Already have an account? Please{" "}
            <Link to="/login" className="text-warning">
              Login
            </Link>
          </p>
        </div>

        <div className="my-3">
          <input
            type="submit"
            className="btn btn-active btn-accent"
            value="Register"
          />
        </div>
      </form>
      <Toaster />;
    </div>
  );
};

export default Register;
