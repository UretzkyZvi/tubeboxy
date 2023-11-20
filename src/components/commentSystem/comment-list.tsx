import Comment from "./comment";
import { CommentListProps } from "./types";

 

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="h-full ">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};
export default CommentList;
