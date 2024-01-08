import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../Context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../Components/Loader/Loader";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const {loading, setLoading} = context;

  const singup = async ()=>{
    // console.log(name, email, password)
    setLoading(true);
    if (name === "" || email === "" || password === ""){
      return toast.error("All Fields are Required")
    }

    try {

      const users = await createUserWithEmailAndPassword(auth, email, password)
      console.log(users)

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time : Timestamp.now()
    }
    const userRef = collection(fireDB, "users")
    await addDoc(userRef, user);
    toast.success("Account Has Been Created, You Can Login Now", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setName(" ");
    setEmail(" ");
    setPassword(" ");
    setLoading(false);

    } catch (error){
      console.log(error);
      setLoading(false)
    }
  }
  return (
    <div className=" flex bg-gray-200 justify-center items-center h-screen">
      {loading && <Loader/>}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button className=" bg-yellow-400 w-full text-black font-bold  px-2 py-2 rounded-lg hover:bg-yellow-500" onClick={singup}>
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
