import React from 'react'
import Logo from "../../assets/svg/logo.svg";
import { Link } from 'react-router-dom';

const Page = () => {

   const navItems = [{
      name: "Home",
      link: "/"
   }, {
      name: "Causes",
      link: "/causes",
   }, {
      name: "Events",
      link: "/events"
   }, {
      name: "Contact",
      link: "/contact"
   }, {
      name: "Blogs",
      link: "/blogs"
   }
   ];

   return (
      <div className='px-24 flex justify-between items-center'>
         <div>
            <img className='w-[170px] h-[100px]' src={Logo} alt="endeavor" />
         </div>
         <div className='flex gap-7'>
            {
               navItems.map((item, index) => (
                  <Link to={item.link} key={index}>{item.name}</Link>
               ))
            }
         </div>
      </div>
   )
}

export default Page; 