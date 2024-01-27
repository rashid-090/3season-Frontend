import React from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { ProfileLogo } from "../../../assets";
import useEmployeeData from "./useEmplyeeDetails";

function EmployeeDetail() {
  const handleGoBack = () => {
    window.history.back();
  };
  const {employeeData} = useEmployeeData();
  return (
    <>
      <div className="shadow-md m-2 md:m-10 bg-white p-4 pb-10 md:p-10 lg:mx-40 rounded-2xl capitalize flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <button onClick={handleGoBack} className="flex items-center gap-2">
            <IoArrowBackCircleSharp className="text-5xl text-gray-300 hover:text-gray-400 duration-200" />
          </button>
          <button className="bg-gray-300 hover:bg-secondaryclr  rounded-full duration-200 shadow-md text-white h-10 w-10 grid place-items-center text-sm md:text-base">
            <BiExport className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16">
            <img
              className="h-32 lg:h-40 w-32 lg:w-40 rounded-full hover:saturate-150 duration-200 cursor-pointer"
              src={ProfileLogo}
              alt="profile logo"
            />
            <div className="md:col-span-3 flex flex-col gap-2 justify-center">
              <h2 className="font-bold text-5xl">Rahul</h2>
              <p className="text-xl font-light">software developer</p>
              <span className="h-[.090rem] w-full bg-gray-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16 lowercase">
            <div className="text-base flex flex-col gap-1 justify-center">
              <span className="flex gap-3 items-center">
                <FaPhone className="text-xs" />
                <a href="#">+1239 123132</a>
              </span>
              <span className="flex gap-3 items-center">
                <MdEmail className="text-xs" />
                <a href="#">sample@gmail.com</a>
              </span>
              <span className="flex gap-3 items-center">
                <FaLocationDot className="text-xs" />
                <p>123 address, demo city</p>
              </span>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-bold uppercase text-2xl">About me</h4>
              <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                necessitatibus inventore similique dolores quam rem ipsam
                quaerat velit? Iure necessitatibus inventore similique dolores
                quam rem ipsam quaerat velit? Quae laudantium quod magnam
                excepturi unde nesciunt ad atque deserunt, aperiam consectetur
                aspernatur quo eos doloremque nam impedit iure laborum, voluptas
                ipsum officiis quibusdam. Earum laboriosam sit asperiores in
                nesciunt corporis nobis.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16 lowercase">
            <div className="flex flex-col gap-4 capitalize">
              <h4 className="font-bold uppercase text-2xl">Education</h4>
              <div>
                <p className="text-base font-bold tracking-wider">
                  Bachelor Degree
                </p>
                <p className="text-sm font-medium">Calicut Univercity</p>
                <span className="flex text-xs gap-2 font-medium">
                  <p>11-10-2022</p>-<p>11-10-2025</p>
                </span>
              </div>
              <div>
                <p className="text-base font-bold tracking-wider">
                  High school
                </p>
                <p className="text-sm font-medium">GHHS Calicut</p>
                <span className="flex text-xs gap-3 font-medium">
                  <p>11-10-2022</p>
                </span>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4 capitalize">
              <h4 className="font-bold uppercase text-2xl">WORK EXPERIENCE</h4>
              <div>
                <span className="flex text-xs gap-2 font-medium">
                  <p>11-10-2022</p>-<p>11-10-2025</p>
                </span>
                <p className="text-sm font-medium tracking-wider">
                  Company Name | location abc 123
                </p>
                <p className="text-lg font-bold">web developer</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, ea labore error molestias adipisci vero consequatur
                  dolor, perferendis doloremque nobis consectetur? Veniam
                  consequuntur est quaerat molestiae quisquam eligendi alias
                  tempore.
                </p>
              </div>
              <div>
                <span className="flex text-xs gap-2 font-medium">
                  <p>11-10-2022</p>-<p>11-10-2025</p>
                </span>
                <p className="text-sm font-medium tracking-wider">
                  Company Name | location abc 123
                </p>
                <p className="text-lg font-bold">web developer</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, ea labore error molestias adipisci vero consequatur
                  dolor, perferendis doloremque nobis consectetur? Veniam
                  consequuntur est quaerat molestiae quisquam eligendi alias
                  tempore.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16 lowercase">
            <div className="flex flex-col gap-4 capitalize">
              <h4 className="font-bold uppercase text-2xl">Language</h4>
              <div className="flex flex-col gap-2 text-sm font-medium tracking-widest">
                <p>English</p>
                <p>Arabic</p>
                <p>french</p>
                <p>spanish</p>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-bold uppercase text-2xl">skill</h4>
              <div className="flex flex-col gap-2 text-sm font-medium capitalize">
                <p>Accepting criticism</p>
                <p>Adaptability</p>
                <p>Attitude</p>
                <p>Communication</p>
                <p>Critical thinking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetail;
