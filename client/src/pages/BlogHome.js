import React from 'react'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import blogyimg from "../Assets/images/blogyimg.png"
import { useParams, Link } from "react-router-dom";
import LogOut from '../Assets/svg/LogOut';
import back from "../Assets/images/back.png"


export default function BlogHome() {
 const { id } = useParams()
 const cookies = new Cookies();
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
  <section className="w-full h-[100vh] relative flex flex-col items-center">
   <nav className="w-full h-[70px] bg-[#0000003f] rounded-b-[10px] absolute top-0 z-20 flex justify-between px-[80px] ">
    <div className="w-[50%] h-[70px] flex items-center  ">
   
     <Link to="/">
      <img
       className="w-[30px] h-[30px] ml-[20px]"
       src={back} />
     </Link>
    </div>
    <div
     dir='rtl'
     className="w-[50%] h-[70px] flex items-center ">
     <img src={data?.creator.imgurl}
      className="rounded-[50%] w-[60px] h-[60px] object-cover"
     />
     <div className="mr-[15px] text-[#000000b6] text-[12px] font-semibold">
      <p>{data?.creator.name}</p>
      <p>{data?.creator.username}</p>
     </div>
    </div>
   </nav>
   <img src={blogyimg}
    className="w-full h-[100vh] blur-[8px] "
   />
   <div className=" absolute w-full h-[100vh] top-0 right-0 left-0 bottom-0 bg-[#0000003d] "></div>

   <div
    dir='rtl'
    className="bg-[#fff] w-[90%] h-[80vh] absolute bottom-0 rounded-md drop-shadow-xl mb-[10px] overflow-auto">
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
  </section>
 )
}