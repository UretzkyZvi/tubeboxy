import React, { useState } from "react";
import { ReplyProps } from "./types";

const Reply: React.FC<ReplyProps> = ({ reply, onReplySubmit }) => {
  const [author, setAuthor] = useState("");
  if (reply) {
    return (
      <div className="flex flex-col ">
        <div className="mb-2 text-sm text-gray-600 py-2 bg-slate-200 rounded-lg">
          <p className="mb-2 text-sm text-gray-600">{reply.author}</p>
          <p>{reply.text}</p>
        </div>
      </div>
    );
  }

  // Otherwise, we are in submit mode
  const [replyText, setReplyText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (replyText.trim() && onReplySubmit) {
      onReplySubmit({
        id: 33,
        text: replyText,
        author,
      });
      setAuthor("");
      setReplyText("");
    }
  };

  return (
    <div className="my-2 rounded-md border border-gray-300 p-4 ">
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="w-full border-b border-gray-300 bg-transparent   p-2 focus:border-blue-500 focus:outline-none"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
        />
        <textarea
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write your reply..."
        />
        <button
          className="mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Reply
        </button>
      </form>
    </div>
  );
};

export default Reply;
