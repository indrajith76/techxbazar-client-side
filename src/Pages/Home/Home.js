import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Home.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
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
        <div className="h-96 border-2 border-red-600">
        </div>
      </div>
      <div className="my-20">
        <h2 className="text-4xl">Product Categories</h2>
        <div className="h-96 border-2 border-red-600">
        </div>
      </div>
    </div>
  );
};

export default Home;
