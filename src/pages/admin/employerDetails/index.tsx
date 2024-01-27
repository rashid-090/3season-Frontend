import React from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import useEmployer from "./useEmployer";

let compLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rFz0nmN-YbFfvy4KgjQhlnLy7sTJydp1cQ&usqp=CAU";

function EmployerDetail() {
  const { employerData } = useEmployer();
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 overflow-hidden">
        <div className="shadow-md m-5 md:m-10 bg-white p-5 md:p-10 lg:mx-40 rounded-2xl capitalize flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <NavLink
              to="/superAdmin/employer"
              className="flex items-center gap-2"
            >
              <IoArrowBackCircleSharp className="text-5xl text-gray-300 hover:text-gray-400 duration-200" />
            </NavLink>
            <button className="bg-gray-300 hover:bg-secondaryclr  rounded-full duration-200 shadow-md text-white h-10 w-10 grid place-items-center text-sm md:text-base">
              <BiExport className="text-xl" />
            </button>
          </div>
          <div className="flex gap-y-3 flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between">
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-2xl tracking-wide">
                <BsBuildingsFill />
                <h1 className="font-bold">{employerData?.name}</h1>
              </span>
              <span className="flex gap-2 items-center text-base">
                <FaUserTie />
                <p>{employerData?.fullName}</p>
              </span>
              <p className="text-xs font-medium">
               
              </p>
              <a href="#" className="text-xs font-normal lowercase">
              {employerData?.webUrl}
              </a>
            </div>
            <img
              className="h-28 w-fit object-cover"
              src={compLogo}
              alt="logo"
              loading="lazy"
            />
          </div>
          <div className="mt-5 flex flex-col gap-3 text-base font-normal">
            <h3 className="text-2xl font-semibold">Software Developer</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati in alias quas, sint ipsa nihil optio vitae incidunt,
              perferendis quis repellendus explicabo fuga deserunt voluptate
              error officiis itaque magnam harum ratione autem vel illum.
              Placeat, explicabo minima! Quos consequatur consequuntur vero
              placeat amet voluptates necessitatibus! Nostrum ad temporibus
              dolorem quidem nesciunt, sed consequuntur natus dolore fugit,
              officia quam nulla est. Quidem expedita sint suscipit nihil? Hic
              voluptatum et mollitia distinctio repellendus saepe cum vero
              beatae quo quidem consequatur ducimus atque, ex ratione velit
              totam dolorem molestiae dolores, ad corporis, sequi necessitatibus
              quis. Quisquam qui, totam sit tempora neque quo quasi.
            </p>
            <p>qualification: diploma or b tech in computer science</p>
            <p className="">Location: delhi 123 building etc...</p>
            <p className="font-semibold">Salary: 10k - 20k</p>
            <p className="font-semibold">experince: 2 years</p>
            <p className="font-semibold">gender: male</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:items-center font-semibold">
              <p className="">Posted Date: 11-12-2023</p>
              <p className="">close Date: 11-12-2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmployerDetail;
