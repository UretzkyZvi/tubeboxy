import { FC, Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Baby,
  ChevronDownIcon,
  Book,
  Drama,
  Newspaper,
  Store,
  Podcast,
} from "lucide-react";
import { Category, Channel } from "~/data/type";
import { useRouter } from "next/router";
import CategoryModal from "./CategoryModal";

interface MenuProps {
  categories: Category[];
}
const Menu: FC<MenuProps> = ({ categories }) => {
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

  const setIcons = (category: Category) => {
    switch (category.title) {
      case "News":
        return <Newspaper className="h-5 w-5" aria-hidden="true" />;
      case "Kids":
        return <Baby className="h-5 w-5" aria-hidden="true" />;
      case "Religious":
        return <Book className="h-5 w-5" aria-hidden="true" />;
      case "Entertainment":
        return <Drama className="h-5 w-5" aria-hidden="true" />;
      case "Shop":
        return <Store className="h-5 w-5" aria-hidden="true" />;
      case "Podcasts":
        return <Podcast className="h-5 w-5" aria-hidden="true" />;
      case "Arts":
        return <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />;
      case "Comedy":
        return <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />;
    }
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Categories</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
              {categories.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  onClick={() => openModal(item)}
                >
                  <div className="flex items-center space-x-2">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      {setIcons(item)}
                    </div>
                    <div>
                      <a className="font-semibold text-gray-900">
                        {item.title}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="bg-gray-50 px-8 py-6">
              <div className="flex items-center gap-x-3">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Enterprise
                </h3>
                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
                  New
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Empower your entire team with even more advanced tools.
              </p>
            </div> */}
            <CategoryModal
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              selectedCategory={selectedCategory}
              selectedChannel={setSelectChannel}
            />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Menu;
