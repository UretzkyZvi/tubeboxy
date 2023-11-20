import { LikeProps } from "./types";

const Like: React.FC<LikeProps> = ({ likes, onLike }) => {
    return (
      <button onClick={onLike}>Like ({likes})</button>
    );
  };
  
  export default Like;
  