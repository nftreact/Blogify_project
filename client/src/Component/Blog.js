import React , { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTab } from "../Redux/Redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import back from "../Assets/images/back.png";

export default function Blog({ setTab }) {
  const tabState = useSelector((state) => state.database.tab);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBlog() {
      try {
        fetch(`http://localhost:4000/blog/${id}`)
          .then((response) => response.json())
          .then((data) => setdata(data));
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
  }, []);

  const backNavigate = () => {
    navigate("/dashbord/home");
    dispatch(updateTab(4))
  };

  return (
    <>
      <img
        onClick={() => backNavigate()}
        className="w-[30px] h-[30px] ml-[20px] absolute top-[20px] left-[100px] cursor-pointer z-40"
        src={back}
      />

      <div
        dir="rtl"
        className="bg-[#fff] w-[90%] h-[80vh] absolute bottom-0 rounded-md drop-shadow-xl mb-[10px] right-[5%] overflow-auto"
      >
        <section className="px-[20px] py-[20px] ">
          <img
            className="w-[70%] m-auto h-[300px] object-cover rounded-md "
            src={data?.imgurl}
          />
          <p className="w-full px-[20px] py-[20px]">{data?.content}</p>
          <div
            className="w-full px-[20px] py-[20px]"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          />
        </section>
      </div>
    </>
  );
}
