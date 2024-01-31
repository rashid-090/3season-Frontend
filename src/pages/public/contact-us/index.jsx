import React, {useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Contactbg} from '../../../assets';
import { SlLocationPin } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram , FaWhatsapp } from "react-icons/fa";
import Footer from '../../../components/user/footer';
import { toast } from 'react-toastify';

// emailjs.sendForm('service_ek0w2so', 'template_anbds0b', form.current, 'falGGqCnuD4ZMOnFI')

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_ek0w2so';
    const templateId = 'template_anbds0b';
    const publicKey = 'falGGqCnuD4ZMOnFI';

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      user_subject: subject,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("The form was successfully submitted",response)
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        toast.error("Error sending email",error)
      });
  }

  return (
    <>
    <section className="w-full overflow-hidden">
      <div className='relative z-10'>
        <img className='object-cover h-40 md:h-52 lg:h-80 object-center w-full' src={Contactbg} alt="banner" />
        <div className='bg-gradient-to-b from-[#081d39dd] to-[#9e9e9e23] h-full absolute top-0 left-0 bottom-0 right-0'></div>
      </div>

      <div className='relative shadow-md w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-5 bg-white  mb-20 -mt-20 lg:-mt-32 z-20'>
          <div className='md:col-span-3 p-5 lg:p-10 flex flex-col gap-5'>
            <h1 className='text-xl font-RedHatDisplayMedium'>Send Message</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input required className='px-3 py-2 border-2 border-gray-200 w-full' type="text" placeholder='Your name' name='user_name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input required className='px-3 py-2 border-2 border-gray-200 w-full' type="email" placeholder='Email address' name='user_email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input required className='px-3 py-2 border-2 border-gray-200 w-full md:col-span-2' type="text" placeholder='Subject' name='user_subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <textarea  rows={5} className='px-3 py-2 border-2 border-gray-200 w-full md:col-span-2' placeholder='Message..' name='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button className='bg-primaryclr hover:bg-sky-600 duration-200 py-2.5 md:col-span-2 text-white font-RedHatDisplaySemibold text-base rounded-sm' type='submit'>Send</button>
            </form>
          </div>
          <div className='md:col-span-2 bg-primaryclr p-5 lg:p-10 text-white'>
            <h1 className='text-xl font-RedHatDisplayMedium '>Contact Information</h1>
            <div className='flex flex-col h-full gap-5 py-10'>
              <span className='flex items-center gap-5'>
                <SlLocationPin className='text-5xl'/>
                <p className='text-sm lg:text-base tracking-wider'>1309 Coffeen Avenue STE 1200, USA, Sheridan, Wyoming 82801</p>
              </span>
              <span className='flex items-center gap-5'>
                <IoIosMail className='text-2xl'/>
                <a href="mailto:Careers@threeseasonsglobal.com" className='text-sm hover:text-black duration-200 lg:text-base tracking-wider'>Careers@threeseasonsglobal.com</a>
              </span>
              <span className='flex items-center gap-5'>
                <IoIosMail className='text-2xl'/>
                <a href="mailto:Recruitments@threeseasonsglobal.com" className='text-sm hover:text-black duration-200 lg:text-base tracking-wider'>Recruitments@threeseasonsglobal.com</a>
              </span>
              {/* <span className='flex items-center gap-2'>
                <BsTelephone className='text-xl mr-4'/>
                <a href="tel:9846353801" className='text-sm hover:text-primaryclr duration-200 lg:text-base tracking-wider'>9846353801</a>
                <p>/</p>
                <a href="tel:9846353802" className='text-sm hover:text-primaryclr duration-200 lg:text-base tracking-wider'>9846353802</a>
              </span> */}
              <span className='flex gap-5 text-xl lg:text-2xl mt-5'>
                  <a href="https://www.linkedin.com/company/three-seasons-llc/" className='hover:-translate-y-1 duration-200' target='_blank'><FaLinkedin/></a>
                  <a href="https://www.facebook.com/Threeseasonsjobsabroad" className='hover:-translate-y-1 duration-200' target='_blank'><FaFacebook/></a>
                  <a href="https://api.whatsapp.com/send?phone=919846353801" className='hover:-translate-y-1 duration-200' target='_blank'><FaWhatsapp/></a>
                  {/* <a href="#" className='hover:-translate-y-1 duration-200' target='_blank'><FaTwitter/></a>
                  <a href="#" className='hover:-translate-y-1 duration-200' target='_blank'><FaInstagram/></a> */}
              </span>
            </div>
          </div>
      </div>
    </section>
    <Footer/>
  </>
  )
}

export default Contactus