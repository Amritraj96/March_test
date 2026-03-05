import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.posts);

  // If a user navigates directly to the detail page, ensure data is fetched
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="state-message spinner">Loading post details...</div>;
  }

  // Find the specific post by matching the ID from the URL params
  const post = items.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="state-message error">Post not found!</div>;
  }

  const imgSrc = `https://picsum.photos/600/400?random=${post.id}`;

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <div className="detail-card">
        <img src={imgSrc} alt="Post detail cover" className="detail-image" />
        <div className="detail-content">
          <h2>{post.title}</h2>
          <p className="detail-user">User ID: {post.userId}</p>
          <p className="detail-body">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;