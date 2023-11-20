import { FC, ReactElement, useState } from "react";

interface AccordionItemProps {
  title: string;
  content: ReactElement;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center border-b">
      <button
        className="flex-none px-4 py-2 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div
        className={`flex-auto overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-w-xl" : "max-w-0"
        }`}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;