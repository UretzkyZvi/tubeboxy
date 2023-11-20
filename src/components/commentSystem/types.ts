export interface Comment {
    id: number;
    text: string;
    author: string;
    replies?: Reply[];
}

export interface Reply {
    id: number;
    text: string;
    author: string;
}

export interface CommentFormProps {
    addComment: (comment: Comment) => void;
}

export interface CommentProps {
    comment: Comment;
}
export interface ReplyProps {
    onReplySubmit?: (replyComment: Comment) => void;
    reply?: Comment;
}

export interface CommentListProps {
    comments: Comment[];
}

export interface ReplyListProps {
    replies: Reply[];
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

// For the like system, we can have a simple state tracking likes count
export interface LikeProps {
    likes: number;
    onLike: () => void;
}
