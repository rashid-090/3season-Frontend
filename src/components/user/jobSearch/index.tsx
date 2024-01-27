import React, { useState } from 'react';
import Select from 'react-select';
import { IoIosSearch } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'Accounting', label: 'Accounting' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
];

interface JobsearchProps {}

const Jobsearch: React.FC<JobsearchProps> = () => {
  const navigate=useNavigate()
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <section className="bg-white text-black pt-10">
        <div className="w-11/12 lg:w-9/12 mx-auto relative bg-slate-100">
          <form className="grid grid-cols-1 md:grid-cols-5 grid-flow-row md:grid-flow-col p-8 md:p-5 lg:p-10 gap-5 shadow-xl">
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full p-[.33rem] caret-primaryclr pl-6 text-gray-700"
                type="search"
                placeholder="Search Keywords"
              />
              <label className="text-xs font-medium text-gray-500">
                Search keywords e.g. web design
              </label>
              <IoIosSearch className="absolute top-3 left-1 text-gray-400" />
            </div>
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full p-[.33rem] caret-primaryclr pl-6"
                type="search"
                placeholder="Search Locations"
              />
              <IoLocationOutline className="absolute top-3 left-1 text-gray-400" />
            </div>
            <button className="bg-primaryclr font-RedHatDisplaySemibold tracking-wider hover:bg-sky-600 duration-200 uppercase text-white w-20% h-fit px-4 xl:px-8 p-[.4rem] shadow-md rounded-sm" onClick={()=>navigate("/jobs")}>
              Find Job
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Jobsearch;
