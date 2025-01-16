import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/util";
import { Link } from "react-router-dom";

const Tabs = ({
   propTabs,
   containerClassName,
   activeTabClassName,
   tabClassName,
   contentClassName
}) => {
   const [active, setActive] = useState(propTabs?.[0] || null);
   const [hoveredTab, setHoveredTab] = useState(null);

   const moveSelectedTabToTop = (idx) => {
      const newTabs = [...propTabs];
      const selectedTab = newTabs.splice(idx, 1);
      setActive(selectedTab[0]);
   };

   return (
      <div
         className={cn(
            "flex flex-row gap-2 items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
            containerClassName
         )}>
         {propTabs?.map((tab, idx) => (
            <Link
               key={tab.title}
               to={tab.link}
               onClick={() => {
                  moveSelectedTabToTop(idx);
               }}
               onMouseEnter={() => setHoveredTab(tab)}
               onMouseLeave={() => setHoveredTab(null)}
               className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-300",
                  tabClassName,
               )}
               style={{
                  transformStyle: "preserve-3d",
               }}>
               {active?.link === tab.link && (
                  <motion.div
                     layoutId="clickedbutton"
                     transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                     className={cn(
                        "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                        activeTabClassName
                     )} />
               )}

               {hoveredTab?.link === tab.link && (
                  <motion.div
                     layoutId="hoverbutton"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 bg-gray-100 dark:bg-zinc-900 rounded-full"
                     style={{ zIndex: -1 }}
                  />
               )}

               <div className="relative">
                  <span className="relative block text-black dark:text-white">
                     {tab.title}
                  </span>
                  <motion.div
                     initial={{ width: "0%" }}
                     animate={{
                        width: hoveredTab?.link === tab.link ? "100%" : "0%"
                     }}
                     transition={{ duration: 0.3 }}
                  />
               </div>
            </Link>
         ))}
      </div>
   );
};

export default Tabs;