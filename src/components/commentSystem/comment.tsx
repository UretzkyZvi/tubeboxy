import React, { useState } from "react";
import { CommentProps } from "./types";
import Reply from "./reply";
import ReplyList from "./reply-list";
import { Reply as IconReply } from "lucide-react";
import Avvvatars from "avvvatars-react";
import { Comment } from "./types";

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState(comment.replies || []);

  const handleReplySubmit = (replyComment: Comment) => {
    // Logic to submit a new reply
    const newReply = {
      id: replyComment.id++,
      text: replyComment.text,
      author: replyComment.author,
    };
    setReplies([...replies, newReply]);
    setShowReply(false);
  };

  return (
    <div className="mb-4 rounded-lg bg-slate-100 p-4 ">
      <div className="flex flex-col">
        <div className="flex">
          <div className="mr-2">
            <Avvvatars value={comment.author} size={28} style="character" />
          </div>
          <div>
            <div className="w-full rounded-md bg-gray-200 p-2">
              <p className="text-xs text-gray-500"> {comment.author}</p>
              <p className="text-sm text-gray-800">{comment.text}</p>
            </div>
            <div className="my-2">
              <button
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setShowReply(!showReply)}
              >
                {showReply ? (
                  "Cancel"
                ) : (
                  <>
                    <IconReply className="-ml-0.5 h-5 w-5" />
                    <p>Reply</p>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showReply && (
        <div className="py-2">
          <Reply onReplySubmit={handleReplySubmit} />
        </div>
      )}
      <div className="pl-8">
        <ReplyList replies={replies} />
      </div>
    </div>
  );
};

export default Comment;
