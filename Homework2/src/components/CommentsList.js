import { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDelete = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div className="comments-container">
            {comments.map((comment) => (
                <div key={comment.id} className="comment-card">
                    <p>{comment.text}</p>
                    <button onClick={() => handleDelete(comment.id)} className="delete-btn">
                        Удалить
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Comments;