import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTab } from "../Redux/Redux";
import CreateArticle from "../Component/CreateArticle";
import MyArticles from "../Component/MyArticles";
import EditUser from "./EditUser";
import Blog from "../Component/Blog";

export default function DashbordLayot() {
  const tabState = useSelector((state) => state.database.tab);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden">
        <Blog />
      </div>
      <section className="w-[100%] h-[100vh] bg-[#0000002c] m-auto absolute top-0 px-[80px] flex items-end justify-center  ">
        <section dir="rtl" className="w-[90%] h-[85vh] text-[#000000b6]  ">
          <p className="font-semibold">مدیریت پنل</p>
          <div className="w-[43%] mt-[10px] flex justify-between">
            <button
              onClick={() => dispatch(updateTab(4))}
              className={`${
                tabState === 4
                  ? "bg-[#3c3a3a69] w-[150px] h-[40px] rounded-[8px] text-[#ffffffdc] text-[12px] hover:bg-[#3c3a3a69]"
                  : "bg-[#D5D5D5] w-[150px] h-[40px] rounded-[8px] text-[12px] hover:bg-[#3c3a3a69]"
              } `}
            >
              مقاله های من
            </button>
            <button
              onClick={() => dispatch(updateTab(2))}
              className={`${
                tabState === 2
                  ? "bg-[#3c3a3a69] w-[150px] h-[40px] rounded-[8px] text-[#ffffffdc] text-[12px] hover:bg-[#3c3a3a69]"
                  : "bg-[#D5D5D5] w-[150px] h-[40px] rounded-[8px] text-[12px] hover:bg-[#3c3a3a69]"
              } `}
            >
              {" "}
              ایجاد مقاله جدید{" "}
            </button>
            <button
              onClick={() => dispatch(updateTab(1))}
              className={`${
                tabState === 1
                  ? "bg-[#3c3a3a69] w-[150px] h-[40px] rounded-[8px] text-[#ffffffdc] text-[12px] hover:bg-[#3c3a3a69]"
                  : "bg-[#D5D5D5] w-[150px] h-[40px] rounded-[8px] text-[12px] hover:bg-[#3c3a3a69]"
              } `}
            >
              ویرایش اطلاعات کاربر{" "}
            </button>
          </div>
          <section className={`${tabState === 1 ? "" : "hidden"}`}>
            <EditUser />
          </section>
          <section className={`${tabState === 2 ? "" : "hidden"}`}>
            <CreateArticle />
          </section>
          <section className={`${tabState === 4 ? "" : "hidden"}`}>
            <MyArticles />
          </section>
        </section>
      </section>
    </>
  );
}
