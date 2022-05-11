import React from 'react'
import Cookies from 'universal-cookie';
import { useState } from "react"
import { Editor } from "@tinymce/tinymce-react";

export default function CreateArticle() {
    const cookies = new Cookies();
    const [data, setData] = useState("");
    const [content, setcontent] = useState("")
    const [img, setimg] = useState("")

    const submitBlogs = async () => {
        const token = cookies.get("ut")
        const res = await fetch('http://localhost:4000/blog/write', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                auth: `ut ${token}`
            },
            body: JSON.stringify({
                title: data,
                content: content,
                imgurl: img
            })
        })
            .then(() => {
                alert("مقاله شما با موفقیت آپلود شد");
            });
    }
    const handleUpdate = (data) => {
        setData(data);
    };
    return (
        <section className="w-full h-[65vh] mt-[20px] rounded-[8px] bg-[#fff] overflow-auto px-[15px] py-[15px]">
            <div className="flex w-full justify-between">
                <textarea
                    placeholder='لطفا عنوان مقاله خود را بنویسید'
                    className="w-[600px] h-[40px]  resize-none  border-2 placeholder:pt-[2px] text-[12px]  placeholder:text-[12px] pt-[8px] border-[#00000085] rounded-lg px-[20px]  "
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                />
                <button
                    className="bg-[#D5D5D5] w-[120px] h-[40px] rounded-[8px] text-[13px] font-semibold hover:bg-[#3c3a3a69] "
                    onClick={() => submitBlogs()}
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
    )
}
