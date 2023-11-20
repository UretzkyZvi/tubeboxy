import React, { FormEvent, useEffect, useRef, useState } from "react";
import { CommentFormProps } from "./types";

import Picker, { EmojiClickData, EmojiStyle, Theme } from "emoji-picker-react";
import { Smile } from "lucide-react";

function useOutsideAlerter(ref: any, setOpen: Function) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(!open);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const CommentForm: React.FC<CommentFormProps> = ({ addComment }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState<{ emoji?: any }>();
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);
  useOutsideAlerter(wrapperRef, setOpen);
  useEffect(() => {
    if (chosenEmoji) {
      let newText = text + " " + chosenEmoji.emoji;
      setText(newText);
    }
  }, [chosenEmoji]);

  const onEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    event;
    setChosenEmoji(emojiObject);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      addComment({
        id: 1,
        text,
        author,
      });
      setText("");
      setAuthor("");
    }
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form onSubmit={handleSubmit} className="relative">
          <div className="overflow-hidden ">
            <div className="bg-slate-100 rounded-b-lg border rounded-t-lg">
              <input
                className="w-full border-b border-gray-300 bg-transparent   p-2 focus:border-blue-500 focus:outline-none"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Your name"
              />
              <textarea
                className="block w-full  resize-none bg-transparent   p-2   focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a comment..."
              />
              {/* Spacer element to match the height of the toolbar */}
              <div className="py-2" aria-hidden="true">
                {/* Matches height of button in toolbar (1px border + 36px content height) */}
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between rounded-b-lg border bg-slate-100 py-2 pl-3 pr-2">
              <div className="flex-shrink-0">
                <button
                  className="mt-2 rounded bg-blue-500 px-4 py-2 font-normal text-sm text-white hover:bg-blue-700"
                  type="submit"
                >
                  Post Comment
                </button>
              </div>
              <div className="flex items-center space-x-5">
                <div className="flex items-center">
                  <Smile className="h-4 w-4 text-gray-500" onClick={() => setOpen(!open)} />
                  {open ? (
                    <div
                      ref={wrapperRef}
                      className="absolute inset-y-12 right-40 h-96 w-48 font-light "
                    >
                      <Picker emojiStyle={EmojiStyle.NATIVE} theme={Theme.AUTO} onEmojiClick={onEmojiClick} />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
