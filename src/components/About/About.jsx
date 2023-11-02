import React from "react";
import aboutImg from "../../assets/images/car11.png";
import aboutCardImg from "../../assets/images/aboutCardImg.png";
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About image */}

          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            <div
              className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30] md:right-[-7%] 
                lg:right-[22%]"
            >
              {/* <img src={aboutCardImg} alt="" /> */}
            </div>
          </div>

          {/* ----About-Content---- */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
            <h2 className="heading">Proud to excel in parking solutions nationwide</h2>
            <p className="text__para">
            "Our mission is to simplify and enhance the parking experience, helping users find and secure parking spaces effortlessly while providing parking area owners with effective tools to manage their facilities efficiently."

 
            </p>
            <p className="text__para mt-[30px]">
            This adaptation reflects the new focus on parking management and the aim to make the parking process smoother for users and parking area owners. If you have more specific content or features from your previous project that you'd like to repurpose, please share them, and I can provide further adaptations.
            </p>
            <Link to="/" >
                <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
