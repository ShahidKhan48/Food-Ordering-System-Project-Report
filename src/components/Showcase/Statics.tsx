import React from "react";
import { motion } from "framer-motion";
import { foodItemsStatic } from "../../../types";

const StaticsImages: React.FC<foodItemsStatic> = ({ items }) => {
  return (
    <div className="w-full h-full absolute flex flex-col items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-4">
      {/* Top Row */}
      <div className="flex gap-4">
        {items.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              src={item.imgSrc}
              alt={item.title}
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              {item.title}
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              {item.desc}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">₵</span> {item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex gap-4">
        {items.slice(2, 4).map((item, index) => (
          <div
            key={index + 2}
            className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              src={item.imgSrc}
              alt={item.title}
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              {item.title}
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              {item.desc}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">₵</span> {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticsImages;
