import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './right.css'
import React from "react";

const Right = () => {
  return (
    <>
      <div className="fixed top-0">
      <div className="search-container scroll-hide p-6 font-[Chrip] sticky top-0 h-screen overflow-y-auto">
        <div className="search-bar text-[#6A6B6B]">
          <span className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="z-10 absolute left-3 top-1 text-[#ffffff6e]"
            />{" "}
            <input
              type="text"
              className="bg-[#585858]  text-[white] outline-none border-0 py-2 px-10 w-80 rounded-full max-lg:w-[22vw]"
              placeholder="Search"
            />
          </span>
        </div>
        <div className="premium-border text-[#ffffffe9] mt-6 p-3 w-80 max-lg:w-60">
          <h1 className="text-xl font-bold max-lg:text-lg">Try Premium for free today</h1>
          <h3 className="leading-5 text-sm my-2"> 
            Upgrade your experience with less ads, power tools, and more with
            Premium.
          </h3>
          <button className="bg-[#ffffffe9] px-5 py-2 rounded-full text-[black] font-semibold max-lg:px-3 max-lg:text-sm">Start free 14-day trial</button>
        </div>
        <div className="premium-second-part premium-border mt-6 p-4 w-80 max-lg:w-60 ">
          <div className="sec-1">
            <h1 className="text-2xl font-bold max-lg:text-lg">What&#39;s happening</h1>
            <div className="img-part mt-5 flex hover:bg-[#090909]">
              <img src="/src/assets/Images/preimg.jpeg" alt="" className="w-28 mr-2 max-lg:w-16"/>
              <h1 className="cgray1">Anyma at Sphere <br /><span className="cgray2">LIVE</span>
            </h1> 
            </div>
            <div className="hastagTag-part-1 mt-6">
              <h3 className="cgray2">Trending in India</h3>
              <h1 className="cgray1 tracking-wider">#KritiSanon</h1>
              <h3 className="cgray2">2,527</h3>
            </div>
            <div className="hastagTag-part-2 mt-6">
              <h3 className="cgray2">Trending in India</h3>
              <h1 className="cgray1 tracking-wider">#VidaamuyarchiTrailer</h1>
              <h3 className="cgray2">21.4K</h3>
            </div>
            <div className="hastagTag-part-3 mt-6">
              <h3 className="cgray2">Trending in India</h3>
              <h1 className="cgray1 tracking-wider">#RowdyRathor2</h1>
              <h3 className="cgray2">204.34M</h3>
            </div>
            <h1 className="mt-7 text-[#18A2F3] cursor-pointer">Show more</h1>
          </div>
        </div>
        <div className="Who-follow premium-border w-80 mt-6 p-3">
          <h1 className="text-xl tracking-wide font-extrabold">Who to Follow</h1>
          <div className="elon py-3 relative cursor-pointer">
            <div className="user-name flex items-start justify-between">
            <img src="/src/assets/Images/elonpro.jpg" className="rounded-full w-10" alt="" />
            <h1 className="text-sm">Elon Musk - Parody</h1><img src="/src/assets/Images/bluetick.png" alt="" className="w-5"/>
            <button className="bg-[#ffffffe9] px-4 py-1 rounded-full text-[black] font-semibold">Follow</button>
            <h2 className="text-[#ffffff82] absolute top-8 left-[3.3rem]">@elonmuskADO</h2>
            </div>
          </div>
          <div className="Cristiano Ronaldo py-3 relative cursor-pointer">
            <div className="user-name flex items-start justify-between">
            <img src="/src/assets/Images/o4L2z8Ay_400x400.jpg" className="rounded-full w-10" alt="" />
            <h1 className="text-sm">Cristiano Ronaldo
            </h1><img src="/src/assets/Images/bluetick.png" alt="" className="w-5"/>
            <button className="bg-[#ffffffe9] px-4 py-1 rounded-full text-[black] font-semibold">Follow</button>
            <h2 className="text-[#ffffff82] absolute top-8 left-[3.5rem]">@cristiano</h2>
            </div>
          </div>
          <div className="borren py-3 relative cursor-pointer">
            <div className="user-name flex items-start justify-between">
            <img src="/src/assets/Images/borren.jpeg" className="rounded-full w-10" alt="" />
            <h1 className="text-sm">Mr Borren - Parody</h1><img src="/src/assets/Images/bluetick.png" alt="" className="w-5"/>
            <button className="bg-[#ffffffe9] px-4 py-1 rounded-full text-[black] font-semibold">Follow</button>
            <h2 className="text-[#ffffff82] absolute top-8 left-12">@mrborrenDESI</h2>
            </div>
          </div>
          <div className="cardesigner py-3 relative cursor-pointer">
            <div className="user-name flex items-start justify-between">
            <img src="/src/assets/Images/borren.jpg" className="rounded-full w-10" alt="" />
            <h1 className="text-sm">Car Designer - Show</h1><img src="/src/assets/Images/bluetick.png" alt="" className="w-5"/>
            <button className="bg-[#ffffffe9] px-4 py-1 rounded-full text-[black] font-semibold">Follow</button>
            <h2 className="text-[#ffffff82] absolute top-8 left-12">@cardesigner</h2>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Right;
