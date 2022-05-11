import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../copySlick.css";
import "../copythemSlick.css";
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      blogData: [],
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
    fetch("http://localhost:4000/blog")
      .then((res) => res.json())
      .then((data) => this.setState({ blogData: data }));
  }

  render() {
    const { blogData } = this.state;
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div className="relative h-[100vh] overflow-hidden">
          <section
            dir="rtl"
            className="absolute top-0 bg-[#0000005e] h-[50px] w-full flex justify-center text-[#fff] items-center z-50"
          >
            <div className="w-[90%] flex justify-between ">
              <section className="w-[70%] flex text-[14px]">
                <div className="w-[300px] flex justify-between">
                  <p className="cursor-pointer">درباره ما</p>
                  <p className="cursor-pointer">تماس با ما</p>
                  <p className="cursor-pointer">سوالات متداول</p>
                </div>
              </section>
              <section dir="ltr" className="w-[8%] cursor-pointer">
                <Link to="login">
                  <p className="text-[14px]">ورود / ثبت نام</p>
                </Link>
              </section>
            </div>
          </section>

          <Slider
            {...settings}
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              zIndex: "10",
            }}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            {blogData.map((item) => {
              return (
                <div
                  key={item._id}
                  className=" relative w-full h-[100vh]  text-[#fff]"
                >
                  <div
                    dir="rtl"
                    className="absolute top-[100px] right-[100px] z-30"
                  >
                    <img
                      className="w-[70px] h-[70px] object-cover rounded-[50%]"
                      src={item?.creator.imgurl}
                    />
                    <p className="my-[15px]">
                      {item?.creator.name} {this.state.item?.creator.username}
                    </p>
                    <p>{item?.content}</p>
                  </div>
                  <div
                    dir="rtl"
                    className="w-[300px] h-[300px] rounded-md absolute top-[100px] right-[80px]  z-20"
                  ></div>
                  <img
                    className="w-full h-[100vh] object-cover absolute bg-[#000] "
                    src={item?.imgurl}
                  />
                  <div className=" absolute w-full h-[100vh] top-0 right-0 left-0 bottom-0 bg-[#0000004b] "></div>
                </div>
              );
            })}
          </Slider>
          <Slider
            style={{
              position: "absolute",
              bottom: "10px",
              width: "100%",
              zIndex: "10",
            }}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            infinite={true}
            autoplay={true}
            autoplaySpeed={1000}
            speed={3000}
          >
            {blogData.map((item) => {
              return (
                <div
                  key={item._id}
                  className="relative w-[300px] h-[160px] cursor-pointer "
                >



                  <Link to={`blog/${item?._id}`}>
                    <div className="bg-[#0000006b] w-[300px] h-[160px] absolute top-0 bottom-0 left-0 right-0 z-20 "></div>
                    <img
                      className="w-[300px] h-[160px] rounded-lg object-cover blur-[1.5px] drop-shadow-xl "
                      src={item?.imgurl}
                    />
                    <div className="absolute h-[160px] z-20 top-10 mr-2 ">
                      <div dir="rtl" className="w-[300px] mx-[-10px] ">
                        <img
                          className="w-[45px] h-[45px] object-cover  rounded-full"
                          src={item?.creator.imgurl}
                        />
                      </div>
                      <div className="mt-[10px] leading-6">
                        <p className="text-[#fff] text-[0.6rem] text-right">
                          نویسنده : {item?.creator.name}
                        </p>
                        <p className="text-[#fff] text-[0.6rem] text-right">
                          {item?.content}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}
