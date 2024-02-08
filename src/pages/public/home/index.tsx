import { Link, useNavigate } from "react-router-dom";
import Categories from "../../../components/user/catogories";
import Jobsearch from "../../../components/user/jobSearch";
import Companys from "../../../components/user/companys";
import { callbackbg2,baaan,lp7 } from "../../../assets";
import Footer from "../../../components/user/footer";

function Home() {
  const navigate=useNavigate()
  return (
    <>

    <div>
      <img className=" w-full h-80 object-cover md:h-full" loading="eager" src={baaan} alt="banner" />
    </div>
  
    <div className="bg-[#BABABA] text-center pt-16 text-slclr -mt-28 lg:-mt-40">
        <h1 className="text-3xl px-4 md:text-5xl lg:text-6xl font-PoppinsBold capitalize">
          Fulfill your gap here...
        </h1>
        <p className="text-lg font-PoppinsMedium lg:pt-3">
          1000+ opportunities to explore
        </p>
      </div>
      <div className=" flex gap-5 py-5 lg:gap-10 justify-center w-full bg-[#BABABA]">
      <button onClick={() => navigate("/auth/employee-registration")} className="bg-slclr text-white shadow-md shadow-gray-500 rounded-3xl hover:bg-slclrhr text-sm md:text-base px-5 md:px-10 py-2 md:py-3 ">Find your next job</button>
      <button onClick={() => navigate("/auth/employer-registration")} className="bg-slclr text-white shadow-md shadow-gray-500 rounded-3xl hover:bg-slclrhr text-sm md:text-base px-5 md:px-10 py-2 md:py-3 ">Find your next hire</button>
    </div>
      {/* Job search */}
      <Jobsearch />

      {/* Categories */}
      <Categories />

      {/* Quotes */}
      <section style={{backgroundColor:"white"}}>
        <div className="flex flex-col-reverse lg:flex-row bg-white">
          <div className="basis-3/4 flex justify-center flex-col gap-3 bg-slclr text-white p-5 lg:p-20 lg:py-28" >
            <h1 className="group text-xl  lg:text-3xl font-extrabold">
              Beyond Resumes, Crafting Success
            </h1>
            <h1 className="text-lg lg:text-2xl font-bold">
              Redefining workforce pathway to excellence
            </h1>
            <p className="text-sm">
              Three Seasons Global Staffing Solutions LLC is a premier
              recruitment and workforce management agency dedicated to
              connecting top-tier talent with exceptional opportunities. With a
              commitment to excellence, we specialize in identifying and placing
              skilled professionals across diverse industries. Our seasoned team
              of recruitment experts is driven by a passion for fostering
              mutually beneficial partnerships, ensuring both clients and
              candidates thrive in their respective endeavours. Trust Three
              Seasons for strategic staffing solutions that elevate businesses
              and careers alike.
            </p>
            {/* <Link to="/jobs"> */}
              <button className="mt-2 border w-fit border-1 px-16 py-2 uppercase hover:bg-white duration-300 hover:text-black text-sm tracking-widest " onClick={()=>navigate("/jobs")}>
                find jobs
              </button>
            {/* </Link> */}
          </div>
          <div className="basis-1/4 relative overflow-hidden">
            <img
              className="duration-500 hover:scale-105 object-cover md:object-right h-[25rem] object-top md:h-52 lg:h-full w-full brightness-75"
              src={lp7}
              alt="quotes"
            />
          </div>
        </div>
      </section>

      {/* Company Logo*/}
      <Companys />

      {/* Testimonials */}
      {/* <Testimonials/> */}

      {/* Blogs */}

      {/* <section className='w-11/12 lg:w-9/12 mx-auto py-10 lg:pb-20'>
          <div className='relative'>
                  <div className='h-[.09rem] w-full bg-gray-200 z-[-1] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'></div>
                  <h1 className='text-base md:text-xl font-semibold tracking-widest text-center my-10 w-fit mx-auto bg-white px-5 uppercase'>Recent News</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 lg:gap-10'>
             {
                BlogData?.slice(0,3).map((data,index)=>{
                  return(
                  <div className='' key={index}>
                      <div className='w-full relative overflow-hidden'><img className='object-cover hover:scale-105 duration-300' src={data.image} alt="blog" /></div>
                      <div className='bg-gray-50 p-3 relative w-[90%] -m-5 mx-auto'>
                        <p className='uppercase text-[10px] font-bold text-gray-400 tracking-wide'>{data.date}</p>
                        <h4 className='py-1 text-lg font-bold text-gray-700 uppercase'>{data.title}</h4>
                        <p className='md:text-xs text-sm font-medium text-gray-700'>{data.desc.slice(0,280)} ...</p>
                        <Link><button className='text-xs duration-150 font-semibold capitalize text-secondaryclr hover:text-primaryclr mt-3 flex gap-1 items-center group'>Read More<MdKeyboardDoubleArrowRight className='text-black mt-[2px] group-hover:translate-x-1 duration-200'/></button></Link>
                      </div>
                  </div>
                  )
                })
             }
          </div>
      </section> */}
      <Footer/>
    </>
  );
}

export default Home;
