import React from "react";
import {Abtbg,LogoEmp} from '../../../assets'
import Footer from "../../../components/user/footer";

function Aboutus() {
  return (
    <>
     <section className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-5 py-10 overflow-hidden">
        <div className="lg:col-span-2 mx-auto">
          <img loading="lazy" className="object-cover w-full h-full md:h-96 lg:h-full" src={Abtbg} alt="banner" />
        </div>
        <div className="lg:col-span-3 flex flex-col justify-center">

            <h1 className="text-5xl lg:text-[7rem] font-RedHatDisplayExtraBold uppercase mb-5 leading-none tracking-wider">About us</h1>

          <div className="flex flex-col gap-2 text-sm md:text-base">
            <p>The way companies do business is undergoing fundamental change. By realizing that they earn profits from their core businesses and not from non-core competencies, the trend to outsource non-core competencies is on the rise. This movement toward outsourcing is enabling companies to spend more time, effort and money on the core business focus.</p>
            <p>THREE SEASONS Facility Management Company
            (TSFM) is an integrated Facilities Management company offering an array of customized and flexible services to ensure the smooth running and functioning of your company without the hassle of you facing day-to-day complications.</p>
            <div className="w-full flex justify-start md:justify-end pt-5">
              <div className="h-1 md:h-2 w-20  bg-primaryclr"></div>
            </div>
          </div>
        </div>
     </section>
     <Footer/>
    </>
  );
}

export default Aboutus;
