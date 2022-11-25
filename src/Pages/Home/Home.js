import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Home.css";
import axios from "axios";

import { FaArrowRight } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((data) => {
      setCategories(data.data);
    });
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader></Loader>
  } 
  return (
    <div className="container mx-auto">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        className="h-[85vh] 2xl:h-[500px] z-0"
      >
        <div data-src="https://www.yugatech.com/wp-content/uploads/2019/03/x360convertible_yuga1.jpg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-4xl md:text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              <span className="text-white">Tech</span>{" "}
              <span className="text-primary">Exchange</span>{" "}
              <span className="text-white">Bazar</span>
            </h1>
            <p className="text-slate-300 mt-5">
              Tech Exchange Bazar is a reselling platform of laptops.<br></br>
              Where user can find their budget friendly laptops using this
              platform.
            </p>
          </div>
        </div>
        <div data-src="https://images.indianexpress.com/2020/08/laptop-FB.jpg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-4xl md:text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              <span className="text-white">Tech</span>{" "}
              <span className="text-primary">Exchange</span>{" "}
              <span className="text-white">Bazar</span>
            </h1>
            <p className="text-slate-300 mt-5">
              Tech Exchange Bazar is a reselling platform of laptops.<br></br>
              Where user can find their budget friendly laptops using this
              platform.
            </p>
          </div>
        </div>
        <div data-src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/08/hp_1.jpg?resize=738%2C320&ssl=1">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-4xl md:text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              <span className="text-white">Tech</span>{" "}
              <span className="text-primary">Exchange</span>{" "}
              <span className="text-white">Bazar</span>
            </h1>
            <p className="text-slate-300 mt-5">
              Tech Exchange Bazar is a reselling platform of laptops.<br></br>
              Where user can find their budget friendly laptops using this
              platform.
            </p>
          </div>
        </div>

        <div data-src="https://i.ytimg.com/vi/IoJmtYtN3YA/maxresdefault.jpg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-4xl md:text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              <span className="text-white">Tech</span>{" "}
              <span className="text-primary">Exchange</span>{" "}
              <span className="text-white">Bazar</span>
            </h1>
            <p className="text-slate-300 mt-5">
              Tech Exchange Bazar is a reselling platform of laptops.<br></br>
              Where user can find their budget friendly laptops using this
              platform.
            </p>
          </div>
        </div>
      </AutoplaySlider>
      <div className="my-20">
        <h2 className="text-4xl">Advertised Items</h2>
        <div className="h-96 border-2 border-red-600"></div>
      </div>
      <div className="my-20">
        <h2 className="text-4xl font-semibold mb-10">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 lg:mx-0">
          {categories.map((category) => (
            <Link to={`/category/${category._id}`} key={category._id}>
              <div className="border shadow-lg flex justify-center flex-col rounded-xl overflow-hidden p-5">
                <div className="flex justify-center h-64">
                  <img className="w-64 hover:w-72 duration-500" src={category.image} alt="" />
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-3xl">{category.name}</h4>
                  <h4 className="text-2xl">
                    <FaArrowRight />
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
