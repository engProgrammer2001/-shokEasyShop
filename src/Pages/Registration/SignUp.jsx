import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className=" flex bg-gray-200 justify-center items-center h-screen">
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button className=" bg-yellow-400 w-full text-black font-bold  px-2 py-2 rounded-lg hover:bg-yellow-500">
            Signup
          </button>
        </div>
        <div>
          <p className="  text-white mb-2">
            By continuing, you agree to Amazon's <br />
            <Link className=" text-yellow-400 font-bold" to={""}>
              Conditions of Use & Sale
            </Link>{" "}
            Please see our <br />{" "}
            <Link className=" text-yellow-400 font-bold" to={""}>
              Privacy Notice,
            </Link>{" "}
            our Cookies Notice and our <br />{" "}
            <Link className=" text-yellow-400 font-bold" to={""}>
              Privacy Notice,
            </Link>{" "}
          </p>
          <h2 className="text-white">
            <span className="font-bold">*</span> Have an account{" "}
            <Link className=" text-yellow-400 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
