import React from 'react';
import Reply from './reply';
import { ReplyListProps } from './types';

const ReplyList: React.FC<ReplyListProps> = ({ replies }) => {
  return (
    <div className="pl-8 border-l-2 ">
      {replies.map((reply, index)  => (
        <Reply key={index} reply={reply} />
      ))}
    </div>
  );
};

export default ReplyList;
