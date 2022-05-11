import React from 'react'
import { useState, useEffect } from "react"
import CreateArticle from "../Component/CreateArticle"
import MyArticles from "../Component/MyArticles"
import EditUser from '../pages/EditUser';


export default function Dashbord() {
  const [tab, setTab] = useState(1)

  return (
    <>
      <section className="w-[100%] h-[100vh] bg-[#0000002c] m-auto absolute top-0 px-[80px] flex items-end justify-center  ">
        <section
          dir='rtl'
          className="w-[90%] h-[85vh] text-[#000000b6]  ">
          <p className="font-semibold">مدیریت پنل</p>
          <div className="w-[43%] mt-[10px] flex justify-between">
            <button
              onClick={() => setTab(1)}
              className={`${tab === 1 ? "bg-[#3c3a3a69] w-[150px] h-[40px] rounded-[8px] text-[#ffffffdc] text-[12px] hover:bg-[#3c3a3a69]" : "bg-[#D5D5D5] w-[150px] h-[40px] rounded-[8px] text-[12px] hover:bg-[#3c3a3a69]"} `}>ویرایش اطلاعات کاربر </button>
            <button
              onClick={() => setTab(2)}
              className={`${tab === 2 ? "bg-[#3c3a3a69] w-[150px] h-[40px] rounded-[8px] text-[#ffffffdc] text-[12px] hover:bg-[#3c3a3a69]" : "bg-[#D5D5D5] w-[150px] h-[40px] rounded-[8px] text-[12px] hover:bg-[#3c3a3a69]"} `}> ایجاد مقاله جدید </button>
            <button
              onClick={() => setTab(4)}
              className={`${tab === 4 ? "bg-[#3c3a3a69] w-[150px] h-[40px] rounded-[8px] text-[#ffffffdc] text-[12px] hover:bg-[#3c3a3a69]" : "bg-[#D5D5D5] w-[150px] h-[40px] rounded-[8px] text-[12px] hover:bg-[#3c3a3a69]"} `}>مقاله های من</button>
          </div>
          <section className={`${tab === 1 ? "" : "hidden"}`}>
            <EditUser />
          </section>
          <section className={`${tab === 2 ? "" : "hidden"}`}>
            <CreateArticle />
          </section>
          <section className={`${tab === 4 ? "" : "hidden"}`}>
            <MyArticles tab={tab} setTab={setTab} />
          </section>
        </section>
      </section>
    </>
  )
}
