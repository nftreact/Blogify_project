import React from 'react'
import { useState, useEffect } from "react"
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function MyArticles({ tab, setTab }) {
  const cookies = new Cookies();
  const [data, setdata] = useState([])
  const navigate = useNavigate();
  const token = cookies.get("ut")

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch('http://localhost:4000/blog/my-blogs', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            auth: `ut ${token}`

          },
          body: JSON.stringify({})
        })
        const data = await res.json()
        setdata(data)
        if (data.msg === "not logged in ") return navigate("/login")
      } catch (error) {
      }
    }
    getUser()
  }, [])

  if (!data) {
    navigate("/login")
    return
  }

  return (
    <section className="w-full h-[65vh] mt-[20px] rounded-[8px] bg-[#ffffffee] overflow-auto px-[15px] py-[15px]">
      <div >
        {data.map((item, i) => {
          return (
            <section
              className="bg-[#D5D5D5] rounded-[4px] cursor-pointer mb-[10px] hover:bg-[#3c3a3a69]  justify-between text-[#000000b6] px-[20px] h-[40px] flex items-center text-[12px] font-semibold">
              <div className="flex items-center">
                <p>{i + 1}</p>
                <p className="mr-[30px]">{item.content}</p>
              </div>
              <div className=" w-[150px] flex justify-between">
                <Link to={`editblog/${item._id}`}>
                  <p
                    onClick={() => setTab(3)}
                    className=""> ویرایش مقاله</p>
                </Link>
                <Link to={`blog/${item._id}`}>
                  <p>مشاهده</p>
                </Link>
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}
