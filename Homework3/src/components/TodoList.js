import { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, CardActions, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Reviews() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleDeleteReview = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    const handleAddReview = () => {
        if (!newComment.trim()) {
            alert("Комментарий не может быть пустым");
            return;
        }

        const newCommentObj = {
            id: comments.length + 1,
            text: newComment
        };

        setComments([...comments, newCommentObj]);
        setNewComment('');
    };

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            sx={{ m: 1, width: '54ch', marginTop: 2 }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Оставьте свой комментарий"
                multiline
                rows={4}
                sx={{ marginBottom: 2 }}
                variant="outlined"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddReview}>
                Добавить отзыв
            </Button>
            {comments.map((comment) => (
                <Card key={comment.id} sx={{ p: 1, marginTop: 3 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }}>
                            {comment.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleDeleteReview(comment.id)} startIcon={<DeleteIcon />}>Удалить</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
} 