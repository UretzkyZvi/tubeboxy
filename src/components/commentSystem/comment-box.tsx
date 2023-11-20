import { useState } from "react";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import { Comment } from "./types";

const CommentBox: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  // Add error and loading states
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="h-full overflow-y-hidden">
      <div className="flex flex-col space-y-4 p-2">
        {error && <div>Error: {error}</div>}
        <h1 className="text-3xl font-bold">Discussion</h1>
        <CommentForm addComment={addComment} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="h-[40vh] overflow-y-auto">
            <CommentList comments={comments} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
