import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

export default function EditUser() {
  const user = useSelector((state) => state.database.value.user);
  const cookies = new Cookies();
  const token = cookies.get("ut");
  const [userimg, setuserimg] = useState("");
  const [name, setname] = useState("");

  useEffect(() => {
    setuserimg(user.imgurl);
    setname(user.name);
  }, [user]);

  const editUser = async () => {
    fetch("http://localhost:4000/user/edit", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${token}`,
      },
      body: JSON.stringify({
        data: {
          name: name,
          phoneNumber: "",
          imgurl: userimg,
        },
      }),
    });
    alert("پروفایل شما ادیت شد");
  };

  return (
    <section className="w-[50%] h-[65vh] mt-[20px] m-auto relative rounded-[8px] bg-[#ffffff56] overflow-auto px-[15px] py-[15px]">
      <div className="w-full flex justify-center">
        <img
          className="h-52 w-52 object-cover rounded-full mt-3"
          src={userimg}
        />
      </div>

      <div className="w-full flex justify-center text-[12px]">
        <div className="">
          <div className="mt-2 flex flex-col md:flex-row  w-[100%] justify-center items-center ">
            <label className="font-bold">تصویر پروفایل</label>
            <input
              className="outline-none rounded border text-[#2e3a3f] border-[#2e3a3f] mt-1 mr-2 w-[55vw] md:w-[300px] md:py-2 px-2 py-1 shadow-lg text-right placeholder:text-[10px]  md:placeholder:text-[12px] placeholder:text-right"
              placeholder="آدرس تصویر پروفایل خود را وارد کنید"
              value={userimg}
              onChange={(e) => setuserimg(e.target.value)}
            />
          </div>
          <div className="mt-2 justify-between flex md:flex-row w-[100%] justify-center items-center">
            <label className=" mr-10 font-bold">نام</label>
            <input
              className="outline-none rounded border text-[#2e3a3f] border-[#2e3a3f] mt-1 mr-2 w-[55vw] md:w-[300px] md:py-2 px-2 py-1 shadow-lg text-right placeholder:text-[10px]  md:placeholder:text-[12px] placeholder:text-right"
              placeholder="نام خود را وارد کنید"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-[12px] mt-[5px]">
        <button
          onClick={() => editUser()}
          className="flex w-[120px] px-2  h-9 bg-[#3c3a3ab9] text-[#ffffffdc] rounded drop-shadow-lg  justify-center items-center md:mt-2.5"
        >
          اعمال تغییرات
        </button>
      </div>
    </section>
  );
}
