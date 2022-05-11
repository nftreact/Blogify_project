import React from 'react'
import Cookies from 'universal-cookie';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import blogyimg from "../Assets/images/blogyimg.png"
import LogOut from '../Component/LogOut';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../Redux/Redux"

function Layot() {
  const count = useSelector(state => state.database.value.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cookies = new Cookies();

  const logout = () => {
    cookies.remove("ut")
    navigate('/')
  }

  useEffect(() => {
    async function getUser() {
      const token = cookies.get("ut")
      try {
        const res = await fetch('http://localhost:4000/user/me', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            auth: `ut ${token}`

          },
          body: JSON.stringify({})
        })
        const data = await res.json()
        dispatch(setUser(data))
      } catch (error) {

      }
    }
    getUser()
  }, [])

  return (
    <>
      <section className="w-full h-[100vh] relative flex flex-col items-center">
        <nav className="w-full h-[70px] bg-[#0000003f] rounded-b-[10px] absolute top-0 z-20 flex justify-between px-[80px] ">
          <div className="w-[50%] h-[70px] flex items-center ">
            <div
              onClick={() => logout()}
              className="cursor-pointer">
              <LogOut />
            </div>
          </div>
          <div
            dir='rtl'
            className="w-[50%] h-[70px] flex items-center ">
            <img src={count.imgurl}
              className="rounded-[50%] w-[60px] h-[60px] object-cover"
            />
            <div className="mr-[15px] text-[#000000b6] text-[12px] font-semibold">
              <p>{count.name}</p>
              <p>{count.username}</p>
            </div>
          </div>
        </nav>
        <img src={blogyimg}
          className="w-full h-[100vh] blur-[8px] "
        />
        <div className=" absolute w-full h-[100vh] top-0 right-0 left-0 bottom-0 bg-[#0000003d] "></div>
        <section className="w-[100%] h-[100vh] bg-[#0000002c] m-auto absolute top-0 px-[80px] flex items-end justify-center  ">
        </section>
      </section>
      <Outlet />
    </>
  )
}

export default Layot