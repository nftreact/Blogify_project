import React from 'react'
import Cookies from 'universal-cookie';
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import back from "../Assets/images/back.png"



function EditBlog() {
  const cookies = new Cookies();
  const token = cookies.get("ut");
  const { id } = useParams();

  const [blog, setblog] = useState(null);
  const [data, setData] = useState("");
  const [content, setcontent] = useState("")
  const [img, setimg] = useState("")

  useEffect(() => {
    fetch(`http://localhost:4000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setblog(data);
        setData(data.title);
        setcontent(data.content);
        setimg(data.imgurl);
      });
  }, []);


  const handleUpdate = (data) => {
    setData(data);
  };

  return (
    <>
      <Link
        className="absolute top-[20px] left-[100px] cursor-pointer z-40"
        to="/dashbord/home">
        <img
          className="w-[30px] h-[30px] ml-[20px]"
          src={back} />
      </Link>
      <section className="w-[90%]  h-[72vh] absolute top-[120px] rounded-[8px] right-[5%] bg-[#fff] overflow-auto px-[15px] py-[15px]">
        <div className="flex w-full justify-between">
          <textarea
            placeholder='لطفا عنوان مقاله خود را بنویسید'
            className="w-[600px] h-[40px]  resize-none  border-2 placeholder:pt-[2px] text-[12px]  placeholder:text-[12px] pt-[8px] border-[#00000085] rounded-lg px-[20px]  "
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
          <button
            className="bg-[#D5D5D5] w-[120px] h-[40px] rounded-[8px] text-[13px] font-semibold hover:bg-[#3c3a3a69] "
          // onClick={() => submitBlogs()}
          >ثبت مقاله</button>
        </div>
        <textarea
          placeholder='لطفا آدرس اینترنتی عکس خود را در این قسمت قرار دهید'
          className="w-[600px] h-[40px] m-auto placeholder:pt-[2px] resize-none border-2 placeholder:text-[12px] text-[12px] pt-[8px] border-[#00000085] rounded-lg px-[20px]  "
          value={img}
          onChange={(e) => setimg(e.target.value)}
        />
        <Editor
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          init={{ height: "45vh", width: "100%", plugins: "wordcount", placeholder: "مقاله خود را دراین قسمت بنویسید" }}
          value={data}
          onEditorChange={handleUpdate}
        />
      </section>
    </>
  )
}

export default EditBlog