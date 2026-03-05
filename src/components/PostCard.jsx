import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const imgSrc = `https://picsum.photos/200?random=${post.id}`;
  
  // Helper function to slice text
  const sliceText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="card">
      <img src={imgSrc} alt="Post cover" className="card-image" loading="lazy" />
      <div className="card-content">
        <p className="card-user">User ID: {post.userId}</p>
        <h3 className="card-title">Title : {sliceText(post.title, 20)}</h3>
        <p className="card-body">
          Body : {sliceText(post.body, 50)}{' '}
          <Link to={`/item/${post.id}`} className="read-more">Read More...</Link>
        </p>
      </div>
    </div>
  );
};

export default PostCard;