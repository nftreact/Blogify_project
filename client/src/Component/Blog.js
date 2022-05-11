import React from 'react'
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import back from "../Assets/images/back.png"

export default function Blog() {
  const { id } = useParams()
  const [data, setdata] = useState(null)


  useEffect(() => {
    async function getBlog() {
      try {
        fetch(`http://localhost:4000/blog/${id}`)
          .then(response => response.json())
          .then(data => setdata(data));
      } catch (error) {
        console.log(error);
      }
    }
    getBlog()
  }, [])

  return (
    <>
      <Link
        className="absolute top-[20px] left-[100px] cursor-pointer z-40"
        to="/dashbord/home">
        <img
          className="w-[30px] h-[30px] ml-[20px]"
          src={back} />
      </Link>
      <div
        dir='rtl'
        className="bg-[#fff] w-[90%] h-[80vh] absolute bottom-0 rounded-md drop-shadow-xl mb-[10px] right-[5%] overflow-auto">
        <section className="px-[20px] py-[20px] ">
          <img
            className="w-[70%] m-auto h-[300px] object-cover rounded-md "
            src={data?.imgurl} />
          <p className="w-full px-[20px] py-[20px]">{data?.content}</p>
          <div
            className="w-full px-[20px] py-[20px]"
            dangerouslySetInnerHTML={{ __html: data?.title }} />
        </section>

      </div>
    </>
  )
}
