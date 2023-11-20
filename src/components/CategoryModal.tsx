import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Category, Channel, ChannelUrl } from "~/data/type";
 

interface CategoryModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  selectedCategory: Category | undefined;
 
  selectedChannel:(channel:Channel)=>void;
}

const CategoryModal: FC<CategoryModalProps> = ({
  isModalOpen,
  closeModal,
  selectedCategory,
 
  selectedChannel
}) => {
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    null,
  );

  const handleChannelSelect = (channel: Channel) => {
 
    setSelectedChannelId(channel.id);
    selectedChannel(channel);
  };

  const getBackgroundColor = (index: number): string => {
    const colors = [
      "bg-red-200",
      "bg-green-200",
      "bg-blue-200",
      "bg-yellow-200",
    ];
    return colors[index % colors.length] ?? "bg-gray-200";
  };
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={isModalOpen}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-80"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-200 bg-opacity-75 backdrop-blur-3xl transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center   p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden px-4 pb-4 pt-5 text-left shadow-md transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2 ">
                    {selectedCategory && (
                      <div className="flex justify-center">
                        <ul
                          role="list"
                          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                          {selectedCategory.channels.map(
                            (channel: Channel, index: number) => (
                              <li
                                key={channel.id}
                                className={`flex flex-col items-center p-4 ${getBackgroundColor(
                                  index,
                                )} transform cursor-pointer rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg ${
                                  selectedChannelId === channel.id
                                    ? "ring ring-indigo-300 ring-offset-2"
                                    : ""
                                }`}
                                onClick={() => handleChannelSelect(channel)}
                                tabIndex={0} // Make it focusable
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  handleChannelSelect(channel)
                                }
                              >
                                <img
                                  src={channel.logo}
                                  alt={channel.title}
                                  className="mb-2 h-24 w-24 object-contain"
                                />
                                <p className="text-sm font-semibold text-gray-900">
                                  <span className="hover:text-blue-500">
                                    {channel.title}
                                  </span>
                                </p>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CategoryModal;
