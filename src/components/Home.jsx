import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import PostCard from './PostCard';

const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="state-message spinner">Loading posts...</div>;
  }

  if (status === 'failed') {
    return <div className="state-message error">Error: {error}</div>;
  }

  return (
    <div className="post-grid">
      {items.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;