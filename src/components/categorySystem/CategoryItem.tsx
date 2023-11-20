import React, { FC } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { Category } from "~/data/type";
interface CategoryItemProps {
  category: Category;
  openModal: (category: Category) => void;
  isHovered: boolean;
  setHoveredItem: (index: number) => void;
  index: number;
}

const CategoryItem: FC<CategoryItemProps> = ({
  category,
  openModal,
  isHovered,
  setHoveredItem,
  index,
}) => {
  return (
    <>
      <motion.div
       
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => openModal(category)}
        onMouseEnter={() => setHoveredItem(index)}
        style={{ zIndex: isHovered ? 1 : 0 }}
      >
        <div className="px-4 ">
          <div className="flex h-48 w-36 border">
            <Image
              src={category.logo}
              alt={category.title}
              width={200}
              height={200}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CategoryItem;
