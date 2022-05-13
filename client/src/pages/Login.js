import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import imageLogin from "../Assets/images/imageLogin.png";
import judge from "../Assets/images/judge.png";

export default function Login() {
  const [tab, setTab] = useState(1);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [usernameSignUp, setUsernameSignUp] = useState("");

  const SignUp = async () => {
    try {
      if (!usernameSignUp || !image || !name) {
        alert("please enter somthing");
        return;
      }
      const res = await fetch("http://localhost:4000/user/signup", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameSignUp,
          imgurl: image,
          name: name,
        }),
      });
      const { token } = await res.json();
      cookies.set("ut", token);
      setTab(1);
    } catch (error) {}
  };

  const Signin = async () => {
    try {
      if (!Username || !password) {
        alert("please enter somthing");
        return;
      }
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: Username,
          password: password,
        }),
      });
      const { token } = await res.json();
      cookies.set("ut", token);
      if (!token) {
        alert("لطفا حساب کاربری خود را ایجاد کنید");
      } else {
        navigate("/dashbord/home");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {/* sign in */}
      <section
        className={`${
          tab === 1
            ? "w-full h-[100vh] bg-[#000] flex justify-center  items-center text-[#fff]"
            : "hidden"
        }`}
      >
        <img src={judge} className="w-full h-[100vh]  absolute blur-xl " />
        <div className="absolute w-full h-[100vh] top-0 bottom-0 right-0 left-0 bg-[#0000009d]"></div>
        <img
          src={imageLogin}
          className=" w-[638px] h-[570px] absolute top-12 opacity-25 drop-shadow-2xl"
        />
        <p className="absolute top-[18%] text-[18px]">ورود به حساب کاربری</p>
        <input
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="placeholder:text-[14px] px-[10px] w-[320px] h-[45px] rounded-lg absolute top-[30%] border-[1px] border-[#F17119] outline-0  text-[#000]"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          className="placeholder:text-[14px] px-[10px] w-[320px] h-[45px] rounded-lg absolute top-[40%] border-[1px] border-[#F17119] outline-0 text-[#000]"
        />
        <button
          onClick={() => Signin()}
          className="bg-[#F17119] w-[320px] h-[45px] rounded-lg absolute top-[52%] font-normal"
        >
          {" "}
          ورود
        </button>
        <div className="absolute top-[62%] text-[12px] flex justify-end w-[320px]">
          <p
            onClick={() => setTab(2)}
            className="text-[#F17119] mr-[10px] cursor-pointer"
          >
            ثبت نام
          </p>
          <p className="opacity-80  text-[10px]">هنوز ثبت نام نکردی ؟ </p>
        </div>
        <p className="text-[#fff] opacity-50 text-[10px] absolute top-[67%] ml-[9rem]">
          username : فراهانی && password: 1111
        </p>
      </section>

      {/* sign up */}
      <section
        className={`${
          tab === 2
            ? "w-full h-[100vh] bg-[#000] flex justify-center items-center text-[#fff]"
            : "hidden"
        }`}
      >
        <img src={judge} className="w-full h-[100vh]  absolute blur-xl " />
        <div className="absolute w-full h-[100vh] top-0 bottom-0 right-0 left-0 bg-[#0000009d]"></div>
        <img
          src={imageLogin}
          className=" w-[638px] h-[570px] relative top-5 opacity-25 drop-shadow-2xl"
        />
        <p className="absolute top-[18%] text-[18px]">
          حساب کاربری خود را ایجاد کنید
        </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="placeholder:text-[14px] px-[10px] w-[320px] h-[45px] rounded-lg absolute top-[30%] border-[1px] border-[#F17119] outline-0  text-[#000]"
        />
        <input
          value={usernameSignUp}
          onChange={(e) => setUsernameSignUp(e.target.value)}
          placeholder="username"
          className="placeholder:text-[14px]  px-[10px] w-[320px] h-[45px] rounded-lg absolute top-[40%] border-[1px] border-[#F17119] outline-0 text-[#000]"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
          className="placeholder:text-[14px] px-[10px] w-[320px] h-[45px] rounded-lg absolute top-[50%] border-[1px] border-[#F17119] outline-0 text-[#000]"
        />
        <button
          onClick={() => SignUp()}
          className="bg-[#F17119] w-[320px] h-[45px] rounded-lg absolute top-[60%]  font-normal text-[14px]"
        >
          {" "}
          ثبت نام
        </button>
      </section>
    </>
  );
}
