import { FC, useEffect, useState } from "react";
import { Category, Channel } from "~/data/type";
import CategoryItem from "./CategoryItem";
import { useRouter } from "next/router";
import CategoryModal from "../CategoryModal";

interface CategoryMenuProps {
  categories: Category[];
}
const CategoryMenu: FC<CategoryMenuProps> = ({ categories }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(-1);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectChannel, setSelectChannel] = useState<Channel>();
  const openModal = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };
  const toggleMobileModal = () => {
    setIsMobileModalOpen(!isMobileModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectChannel) {
      if (selectChannel.podcastMode) {
        router.push(`/channel/${selectChannel.id}?podcastMode=true`);
      } else {
        router.push(`/channel/${selectChannel.id}`);
      }
    }
  }, [selectChannel]);
  return (
    <>
      {/* Desktop View */}
      <div className="hidden   sm:flex sm:flex-row">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            category={category}
            openModal={openModal}
            isHovered={hoveredItem === index}
            setHoveredItem={setHoveredItem}
            index={index}
          />
        ))}
      </div>

      {/* Mobile View Button */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden">
        <button
          className="w-full bg-blue-500 py-2 text-center text-white"
          onClick={toggleMobileModal}
        >
          Categories
        </button>
      </div>

      {/* Mobile Modal */}
      {isMobileModalOpen && (
        <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 shadow-lg ">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              openModal={openModal}
              isHovered={hoveredItem === index}
              setHoveredItem={setHoveredItem}
              index={index}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <CategoryModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedCategory={selectedCategory}
        selectedChannel={setSelectChannel}
      />
    </>
  );
};
export default CategoryMenu;
