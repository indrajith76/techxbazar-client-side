import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Home.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

import { FaArrowRight } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

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

  const { data: advertiseItems, isLoading } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertiseProducts");
      const data = await res.json();
      return data;
    },
  }); 

  if (loading || isLoading) {
    return <Loader></Loader>;
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
      {advertiseItems.length > 0 && (
        <div className="my-20">
          <h2 className="text-4xl mb-10">Advertised Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advertiseItems.map((advertiseItem) => (
              <ProductCard
                key={advertiseItem?._id}
                product={advertiseItem}
              ></ProductCard>
            ))}
          </div>
        </div>
      )}
      <div className="my-20" id="categories">
        <h2 className="text-4xl font-semibold mb-10">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 lg:mx-0">
          {categories.map((category) => (
            <Link to={`/category/${category._id}`} key={category._id}>
              <div className="border shadow-lg flex justify-center flex-col rounded-xl overflow-hidden p-5">
                <div className="flex justify-center h-64">
                  <img
                    className="w-64 hover:w-72 duration-500"
                    src={category.image}
                    alt=""
                  />
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Find your best laptop
              <br className="hidden md:block" />
              form our {' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  best sellers
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Tech Exchange Bazar is a reselling platform of laptops.
Where user can find their budget friendly laptops using this platform.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  We are care about you
                </h6>
                <p className="text-sm text-gray-900">
                  You get best budget friendly products form this platform also best product.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm text-gray-900">
                  We are provide best verify seller in this plateform. every seller are friendly and seller best one.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://www.technopat.net/wp-content/uploads/2022/02/2021-macbook-pro-ekran-isinma-sorunu.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
