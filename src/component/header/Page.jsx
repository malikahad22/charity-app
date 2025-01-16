import React from 'react'
import Logo from "../../assets/svg/logo.svg";
import Tabs from '../../ui-components/navbar/Tabs.js';

const Page = () => {

   const navItems = [{
      title: "Home",
      link: "/"
   }, {
      title: "Causes",
      link: "/causes",
   }, {
      title: "Events",
      link: "/events"
   }, {
      title: "Contact",
      link: "/contact"
   }, {
      title: "Blogs",
      link: "/blogs"
   }
   ];

   return (
      <div className=' px-32 flex justify-between items-center'>
         <div>
            <img className='w-[170px] h-[100px]' src={Logo} alt="endeavor" />
         </div>
         <div className='flex gap-7'>
            <Tabs propTabs={navItems} />
         </div>
      </div>
   )
}

export default Page; 