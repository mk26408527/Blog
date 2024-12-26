'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

interface CommentSectionProps {
    postId: number;
    initialComments?: Comment[];
    userName: string;
}

export function CommentSection({ initialComments = [], userName }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: userName || 'Anonymous User', 
        content: newComment.trim(),
        createdAt: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleEditComment = (commentId: number) => {
    const commentToEdit = comments.find(comment => comment.id === commentId);
    if (commentToEdit) {
      setEditingCommentId(commentId);
      setEditedContent(commentToEdit.content);
    }
  };

  const handleSaveEdit = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId ? { ...comment, content: editedContent } : comment
    ));
    setEditingCommentId(null);
    setEditedContent('');
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="mt-8 space-y-6 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{comment.author}</h3>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {editingCommentId === comment.id ? (
                    <div className="mt-2 space-y-2">
                      <Input
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full"
                      />
                      <div className="flex space-x-2">
                        <Button onClick={() => handleSaveEdit(comment.id)} size="sm">Save</Button>
                        <Button onClick={() => setEditingCommentId(null)} variant="outline" size="sm">Cancel</Button>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-1">{comment.content}</p>
                  )}
                  {editingCommentId !== comment.id && (
                    <div className="mt-2 space-x-2">
                      <Button onClick={() => handleEditComment(comment.id)} variant="outline" size="sm">Edit</Button>
                      <Button onClick={() => handleDeleteComment(comment.id)} variant="destructive" size="sm">Delete</Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}