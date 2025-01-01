import React, { useState, useRef } from "react";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCalendar,
  faComment,
  faFaceSmile,
  faHeart,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { AiOutlineGif } from "react-icons/ai";
import {
  faArrowRotateBack,
  faArrowUpFromBracket,
  faChartColumn,
  faEllipsis,
  faFilter,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const Content = () => {
  const [btnchange, setBtnChange] = useState();
  const bgchange = useRef();
  const buttonVisiable = (val) => {
    setBtnChange(() => {
      if (bgchange.current) {
        if (val.target.value) {
          bgchange.current.style.color = "black"; // Change text color
          bgchange.current.style.backgroundColor = "white"; // Change background color
        } else {
          bgchange.current.style.color = "";
          bgchange.current.style.backgroundColor = "";
        }
      }
    });
  };
  return (
    <>
      <div className="content-container w-full h-screen">
        <div className="first-top-nav flex border-color">
          <div className="for-you-section for-hover">
            <h1 className="text-center">For you</h1>
          </div>
          <div className="following-section for-hover">
            <h1 className="text-center">Following</h1>
          </div>
        </div>
        <div className="second-send-post border-color">
          <div className="post-content pt-4 px-5">
            <div className="profile-img flex gap-3 items-center">
              <img
                src="/src/assets/Images/profile.jpg"
                alt="post-logo"
                className="w-10 rounded-full"
              />
              <h1 className="text-2xl font-light tracking-[1px] text-[#ffffff]">
                <input
                  value={btnchange}
                  onChange={buttonVisiable}
                  type="text"
                  className="border-none focus:placeholder:text-white outline-none bg-transparent"
                  placeholder="What is happening?"
                />
              </h1>
            </div>
            <div className="img-svg span-hover justify-between py-5 pl-12">
              <div className="post-send-icon flex gap-1">
                <FontAwesomeIcon className="post-icon" icon={faImage} />
                <AiOutlineGif className="text-4xl hover:bg-[#42b3ff3d] rounded-full p-2 text-[#42b3ff] cursor-pointer transition-all duration-500" />
                <FontAwesomeIcon className="post-icon " icon={faFilter} />
                <FontAwesomeIcon className="post-icon " icon={faFaceSmile} />
                <FontAwesomeIcon className="post-icon " icon={faCalendar} />
                <FontAwesomeIcon className="post-icon" icon={faLocation} />
              </div>
              <button
                ref={bgchange}
                className="px-6 py-2 text-sm cursor-pointer font-medium bg-[#cbcbcb96] rounded-full text-[#000000]"
              >
                {btnchange}Post
              </button>
            </div>
          </div>
        </div>
        <div className="third-main-content p-4 text-[#e7e7e7] border-color ">
          <div className="content-title relative flex items-start gap-1">
            <img
              src="/src/assets/Images/elonpro.jpg"
              alt=""
              className="rounded-full w-10 mr-2 max-sm:w-9"
            />
            <h2 className="span-hover gap-1 hover:underline cursor-pointer font-gilroy text-lg max-sm:text-[1rem]">
              Elon Musk - Parody
              <img
                src="/src/assets/Images/bluetick.png"
                className="cursor-pointer w-5"
                alt=""
              />
            </h2>
            <h3 className="text-[rgba(255,255,255,0.61)] text-lg cursor-pointer max-sm:text-[2vw]">
              @elonmusk ·
              <span className="hover:underline cursor-pointer">Dec 2h</span>
              <span>
                <FontAwesomeIcon
                  className="text-gray-500 absolute right-0 hover:bg-[#42b3ff2d]  rounded-full p-2 hover:text-[#42b3ffda] transition-all duration-500 cursor-pointer"
                  icon={faEllipsis}
                />
              </span>{" "}
            </h3>
          </div>
          <div className="content-description w-full flex justify-center">
            <h2 className="w-[85%] text-[1rem] tracking-tight leading-5 text-justify mb-4">
              A great way to end the year. Thank you to my teammates, staff, to
              everyone who has supported me along the way, and especially to my
              family. There is still more to come!
            </h2>
          </div>

          <div className="content-post w-full h-full">
            <div className="post-img p-4">
              <img
                src="/src/assets/Images/elon.jpeg"
                alt=""
                className=" w-[100%] rounded-2xl border-color"
              />
            </div>
          </div>
          <div className="like-section flex justify-between px-[1vw]">
            <div className="all-icon gap-5 flex w-[80%] text-[#ffffff9c] justify-around">
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="hover:bg-[#42b3ff2d] hover:text-[#42b3ffda] icon-hover"
                  icon={faComment}
                />
                <h6 className="text-hover">230</h6>
              </span>
              <span className="span-hover hover:text-[#00BA7C]">
                <FontAwesomeIcon
                  className="hover:bg-[#00ba7c33] hover:text-[#00BA7C] icon-hover"
                  icon={faArrowRotateBack}
                />
                <h6 className="text-hover">543</h6>
              </span>
              <span className="span-hover hover:text-[#ba0000]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#ba000033] hover:text-[#ba0000]"
                  icon={faHeart}
                />
                <h6 className="text-hover">12555</h6>
              </span>
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#42b3ff2d] hover:text-[#42b3ffda]"
                  icon={faChartColumn}
                />
                <h6 className="text-hover">43</h6>
              </span>
            </div>
            <div className="share-save-icon flex w-[10%] justify-between text-[#ffffff9c]">
              <FontAwesomeIcon className="ss-icon" icon={faBookmark} />
              <FontAwesomeIcon
                className="ss-icon"
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
        <div className="third-main-content p-4 text-[#e7e7e7] border-color ">
          <div className="content-title relative flex items-start gap-1">
            <img
              src="/src/assets/Images/profile.jpg"
              alt=""
              className="rounded-full w-10 mr-2 max-sm:w-9"
            />
            <h2 className="span-hover gap-1 hover:underline cursor-pointer font-gilroy text-lg  max-sm:text-[1rem]">
              Mufaddal Vohra
              <img
                src="/src/assets/Images/bluetick.png"
                className="cursor-pointer w-5"
                alt=""
              />
            </h2>
            <h3 className="text-[rgba(255,255,255,0.61)] text-lg cursor-pointer max-sm:text-[2vw]">
              @mufaddal_vohra ·
              <span className="hover:underline cursor-pointer">Dec 11h</span>
              <span>
                <FontAwesomeIcon
                  className="text-gray-500 absolute right-0 hover:bg-[#42b3ff2d]  rounded-full p-2 hover:text-[#42b3ffda] transition-all duration-500 cursor-pointer"
                  icon={faEllipsis}
                />
              </span>
            </h3>
          </div>
          <div className="content-description w-full flex justify-center">
            <h2 className="w-[85%] text-[1rem] tracking-tight leading-5 text-justify mb-4">
              DO YOU AGREE THAT DEMOCRATS ARE THE CANCER ON AMERICA? <br />{" "}
              <br />
              A. YES <br />
              B. NO
            </h2>
          </div>

          <div className="content-post w-full h-full">
            <div className="post-img p-4">
              <img
                src="/src/assets/Images/democratic.jpeg"
                alt=""
                className=" w-[100%] rounded-2xl border-color"
              />
            </div>
          </div>
          <div className="like-section flex justify-between px-[1vw]">
            <div className="all-icon gap-5 flex w-[80%] text-[#ffffff9c] justify-around">
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="hover:bg-[#42b3ff2d] hover:text-[#42b3ffda] icon-hover"
                  icon={faComment}
                />
                <h6 className="text-hover">690</h6>
              </span>
              <span className="span-hover hover:text-[#00BA7C]">
                <FontAwesomeIcon
                  className="hover:bg-[#00ba7c33] hover:text-[#00BA7C] icon-hover"
                  icon={faArrowRotateBack}
                />
                <h6 className="text-hover">53</h6>
              </span>
              <span className="span-hover hover:text-[#ba0000]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#ba000033] hover:text-[#ba0000]"
                  icon={faHeart}
                />
                <h6 className="text-hover">5045</h6>
              </span>
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#42b3ff2d] hover:text-[#42b3ffda]"
                  icon={faChartColumn}
                />
                <h6 className="text-hover">202</h6>
              </span>
            </div>
            <div className="share-save-icon flex w-[10%] justify-between text-[#ffffff9c]">
              <FontAwesomeIcon className="ss-icon" icon={faBookmark} />
              <FontAwesomeIcon
                className="ss-icon"
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
        <div className="third-main-content p-4 text-[#e7e7e7] border-color ">
          <div className="content-title relative flex items-start gap-1">
            <img
              src="/src/assets/Images/modi.jpg"
              alt=""
              className="rounded-full w-10 mr-2 max-sm:w-9"
            />
            <h2 className="span-hover gap-1 hover:underline cursor-pointer font-gilroy text-lg max-sm:text-[1rem]">
              Narendra Modi
              <img
                src="/src/assets/Images/bluetick.png"
                className="cursor-pointer w-5"
                alt=""
              />
            </h2>
            <h3 className="text-[rgba(255,255,255,0.61)] text-lg cursor-pointer max-sm:text-[2vw]">
              @narendramodi ·
              <span className="hover:underline cursor-pointer">Nov 23</span>{" "}
              <span>
                <FontAwesomeIcon
                  className="text-gray-500 absolute right-0 hover:bg-[#42b3ff2d]  rounded-full p-2 hover:text-[#42b3ffda] transition-all duration-500 cursor-pointer"
                  icon={faEllipsis}
                />
              </span>{" "}
            </h3>
          </div>
          <div className="content-description w-full flex justify-center">
            <h2 className="w-[85%] text-[1rem] tracking-tight leading-5 text-justify mb-4">
              Destacado esfuerzo por popularizar el Ayurveda en Paraguay.{" "}
              <span className="hover:border-b-2 border-[#42b3ffda] cursor-pointer text-[#42b3ffda]">
                #MannKiBaat
              </span>
            </h2>
          </div>

          <div className="content-post w-full h-full">
            <div className="post-img p-4">
              <video
                autoPlay
                controls
                src="/src/assets/Video/mannkibaat.mp4"
                alt=""
                className=" w-[100%] rounded-2xl border-color"
              ></video>
            </div>
          </div>
          <div className="like-section flex justify-between px-[1vw]">
            <div className="all-icon gap-5 flex w-[80%] text-[#ffffff9c] justify-around">
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="hover:bg-[#42b3ff2d] hover:text-[#42b3ffda] icon-hover"
                  icon={faComment}
                />
                <h6 className="text-hover">890</h6>
              </span>
              <span className="span-hover hover:text-[#00BA7C]">
                <FontAwesomeIcon
                  className="hover:bg-[#00ba7c33] hover:text-[#00BA7C] icon-hover"
                  icon={faArrowRotateBack}
                />
                <h6 className="text-hover">375</h6>
              </span>
              <span className="span-hover hover:text-[#ba0000]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#ba000033] hover:text-[#ba0000]"
                  icon={faHeart}
                />
                <h6 className="text-hover">10845</h6>
              </span>
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#42b3ff2d] hover:text-[#42b3ffda]"
                  icon={faChartColumn}
                />
                <h6 className="text-hover">4398</h6>
              </span>
            </div>
            <div className="share-save-icon flex w-[10%] justify-between text-[#ffffff9c]">
              <FontAwesomeIcon className="ss-icon" icon={faBookmark} />
              <FontAwesomeIcon
                className="ss-icon"
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
        <div className="third-main-content p-4 text-[#e7e7e7] border-color ">
          <div className="content-title relative flex items-start gap-1">
            <img
              src="/src/assets/Images/borren.jpg"
              alt=""
              className="rounded-full w-10 mr-2 max-sm:w-9"
            />
            <h2 className="span-hover gap-1 hover:underline cursor-pointer font-gilroy text-lg max-sm:text-[1rem]">
              Car Designer
              <img
                src="/src/assets/Images/bluetick.png"
                className="cursor-pointer w-5"
                alt=""
              />
            </h2>
            <h3 className="text-[rgba(255,255,255,0.61)] text-lg cursor-pointer max-sm:text-[2vw]">
              @cardesign ·
              <span className="hover:underline cursor-pointer">Aug 12h</span>
              <span>
                <FontAwesomeIcon
                  className="text-gray-500 absolute right-0 hover:bg-[#42b3ff2d]  rounded-full p-2 hover:text-[#42b3ffda] transition-all duration-500 cursor-pointer"
                  icon={faEllipsis}
                />
              </span>{" "}
            </h3>
          </div>
          <div className="content-description w-full flex justify-center">
            <h2 className="w-[85%] text-[1rem] tracking-tight leading-5 text-justify mb-4">
              You can pick one? 🎁 <br />
              <br /> A) Car <br /> B) $3,00,000
            </h2>
          </div>

          <div className="content-post w-full h-full">
            <div className="post-img p-4">
              <img
                src="/src/assets/Images/bmw.jpeg"
                alt=""
                className=" w-[100%] rounded-2xl border-color"
              />
            </div>
          </div>
          <div className="like-section flex justify-between px-[1vw]">
            <div className="all-icon gap-5 flex w-[80%] text-[#ffffff9c] justify-around">
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="hover:bg-[#42b3ff2d] hover:text-[#42b3ffda] icon-hover"
                  icon={faComment}
                />
                <h6 className="text-hover">650</h6>
              </span>
              <span className="span-hover hover:text-[#00BA7C]">
                <FontAwesomeIcon
                  className="hover:bg-[#00ba7c33] hover:text-[#00BA7C] icon-hover"
                  icon={faArrowRotateBack}
                />
                <h6 className="text-hover">763</h6>
              </span>
              <span className="span-hover hover:text-[#ba0000]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#ba000033] hover:text-[#ba0000]"
                  icon={faHeart}
                />
                <h6 className="text-hover">1955</h6>
              </span>
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#42b3ff2d] hover:text-[#42b3ffda]"
                  icon={faChartColumn}
                />
                <h6 className="text-hover">9453</h6>
              </span>
            </div>
            <div className="share-save-icon flex w-[10%] justify-between text-[#ffffff9c]">
              <FontAwesomeIcon className="ss-icon" icon={faBookmark} />
              <FontAwesomeIcon
                className="ss-icon"
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
        <div className="third-main-content p-4 text-[#e7e7e7] border-color ">
          <div className="content-title relative flex items-start gap-1">
            <img
              src="/src/assets/Images/borren.jpeg "
              alt=""
              className="rounded-full w-10 mr-2 max-sm:w-9"
            />
            <h2 className="span-hover gap-1 hover:underline cursor-pointer font-gilroy text-lg max-sm:text-[1rem]">
              Barron Trump - Parody
              <img
                src="/src/assets/Images/bluetick.png"
                className="cursor-pointer w-5"
                alt=""
              />
            </h2>
            <h3 className="text-[rgba(255,255,255,0.61)] text-lg cursor-pointer max-sm:text-[2vw]">
              {" "}
              @BarronTrumpoo ·
              <span className="hover:underline cursor-pointer">Jan 8h</span>
              <span>
                <FontAwesomeIcon
                  className="text-gray-500 absolute right-0 hover:bg-[#42b3ff2d]  rounded-full p-2 hover:text-[#42b3ffda] transition-all duration-500 cursor-pointer"
                  icon={faEllipsis}
                />
              </span>{" "}
            </h3>
          </div>
          <div className="content-description w-full flex justify-center">
            <h2 className="w-[85%] text-[1rem] tracking-tight leading-5 text-justify mb-4">
              Do you agree that Mayorkas should be impeached and indicted for
              failing to secure our border. <br /> <br /> A. YES <br /> B. NO
            </h2>
          </div>

          <div className="content-post w-full h-full">
            <div className="post-img p-4">
              <img
                src="/src/assets/Images/borren.jpeg"
                alt=""
                className=" w-[100%] rounded-2xl border-color"
              />
            </div>
          </div>
          <div className="pb-[10vw] like-section flex justify-between px-[1vw]">
            <div className="all-icon gap-5 flex w-[80%] text-[#ffffff9c] justify-around">
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="hover:bg-[#42b3ff2d] hover:text-[#42b3ffda] icon-hover"
                  icon={faComment}
                />
                <h6 className="text-hover">960</h6>
              </span>
              <span className="span-hover hover:text-[#00BA7C]">
                <FontAwesomeIcon
                  className="hover:bg-[#00ba7c33] hover:text-[#00BA7C] icon-hover"
                  icon={faArrowRotateBack}
                />
                <h6 className="text-hover">54343</h6>
              </span>
              <span className="span-hover hover:text-[#ba0000]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#ba000033] hover:text-[#ba0000]"
                  icon={faHeart}
                />
                <h6 className="text-hover">185555</h6>
              </span>
              <span className="span-hover hover:text-[#42b3ffda]">
                <FontAwesomeIcon
                  className="icon-hover hover:bg-[#42b3ff2d] hover:text-[#42b3ffda]"
                  icon={faChartColumn}
                />
                <h6 className="text-hover">343</h6>
              </span>
            </div>
            <div className="share-save-icon flex w-[10%] justify-between text-[#ffffff9c]">
              <FontAwesomeIcon className="ss-icon" icon={faBookmark} />
              <FontAwesomeIcon
                className="ss-icon"
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
