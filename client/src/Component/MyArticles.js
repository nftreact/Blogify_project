import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTab } from "../Redux/Redux";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

export default function MyArticles() {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const token = cookies.get("ut");

  useEffect(() => {
    async function getUserBlogs() {
      try {
        const res = await fetch("http://localhost:4000/blog/my-blogs", {
          method: "Post", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            auth: `ut ${token}`,
          },
          body: JSON.stringify({}),
        })
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            setdata(response);
          });
        if (data.msg === "not logged in ") return navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
    getUserBlogs();
  }, []);

  if (!data) {
    navigate("/login");
    return;
  }

  return (
    <>
      <section className="w-full h-[65vh] mt-[20px] rounded-[8px] bg-[#ffffffee] overflow-auto px-[15px] py-[15px]">
        <div>
          {data.map((item, i) => {
            return (
              <section
                key={i}
                className="bg-[#D5D5D5] rounded-[4px] cursor-pointer mb-[10px] hover:bg-[#3c3a3a69]  justify-between text-[#000000b6] px-[20px] h-[40px] flex items-center text-[12px] font-semibold"
              >
                <div className="flex items-center">
                  <p>{i + 1}</p>
                  <p className="mr-[30px]">{item.content}</p>
                </div>
                <div className=" w-[150px] flex justify-between">
                  <Link to={`editblog/${item._id}`}>
                    <p onClick={() => dispatch(updateTab(4))} className="">
                      {" "}
                      ویرایش مقاله
                    </p>
                  </Link>
                  <Link to={`blog/${item._id}`}>
                    <p>مشاهده</p>
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
