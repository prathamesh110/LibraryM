import React, { useState } from "react";
import topbg from "../assets/top-deco.png";
import bottombg from "../assets/bottom-deco.png";
import { BiLogIn } from "react-icons/bi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import { Link } from "react-router-dom";

const Login = () => {

    const initialState = {
        email: "",
        password: "",
        };

    const [formData, setformData] = useState(initialState);
    const navigate = useNavigate();
    const { email, password } = formData;
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const login = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            return toast.error("All fields are required");
        }

        // if (!validateEmail(email)) {
        // return toast.error("Please enter a valid email");
        // }
        navigate("/home")

        
    };

    const userData = {
        email,
        password,
    };

  return (
    <>
      <>
        <div className="w-full h-full">
          <div>
            <div className="absolute z-10 w-full h-full overflow-y-hidden">
              <div className=" grid grid-rows-2">
                <div className="flex justify-end">
                  <img
                    className="w-48 h-48 md:w-64 md:h-64"
                    src={topbg}
                    alt=""
                  ></img>
                </div>

                <div className="flex items-end  pt-48 md:pt-32 ">
                  <img
                    className="w-48 h-48 md:w-64 md:h-64"
                    src={bottombg}
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className="absolute z-20 w-screen h-screen">
              <div className="fixed w-full my-24  flex justify-center ">
                <div className="bg-[#9D8189] w-5/6 h-[70vh] md:h-[80vh] md:w-2/6 rounded-xl">
                  <div className="">
                    <div className="h-1/6 m-6 md:m-10 ">
                      <div className="flex justify-center">
                        <BiLogIn className="text-3xl md:text-5xl" color="white" />
                      </div>
                      <div className="flex justify-center">
                        <h2 className="text-white text-3xl md:text-5xl">Login</h2>
                      </div>
                    </div>
                    <div className="h-3/6">
                      <form onSubmit={login}>
                        <div className="grid grid-rows-3 ">
                            <div className="m-2 flex justify-center ">
                            <input
                                className="w-4/6 h-10 md:h-12 outline-none p-4"
                                type="email"
                                placeholder="Email"
                                
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            </div>
                            <div className="m-2 flex justify-center">
                            <input
                                className="w-4/6 h-10 md:h-12 outline-none p-4"
                                type="password"
                                placeholder="Password"
                                required
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            </div>
                            <div className="m-2 flex justify-center">
                            <button type="submit" className="bg-[#FFE5D9] w-4/6">
                                <h2 className="text-[#9D8189]">Login</h2>
                            </button>
                            </div>
                        </div>
                      </form>
                    </div>
                    <div className="h-2/6 md:my-4">
                      <div className="grid grid-rows-2">
                        <div className="text-white flex justify-center md:text-xl">
                          <Link to="/forgot">Forgot Password</Link>
                        </div>
                        <div className="flex justify-center md:text-xl">
                          <div>
                            <h2 className="text-white">
                              Don't have an account?
                            </h2>
                          </div>
                          <div className="text-white">
                            <Link to="/register">,Register</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
