import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, incrementLikes, incrementDislikes } from '../redux/moviesSlice';

export function Movie({ movie }) {
  const imageDemo = 'https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovie({id: movie.id}))
  }

  const handleLikes = () => {
    dispatch(incrementLikes({id: movie.id}));
  }

  const handleDislikes = () => {
    dispatch(incrementDislikes({id: movie.id}));
  }
  return (
    <div className="grid-card">
      <div className="grid-card__img">
        <img src={imageDemo} alt="Movie img" />
      </div>
      <div className="grid-card__details">
        <h4 className="grid-card__details--title">
          {movie.title}
        </h4>
        <p className="grid-card__details--likes">
          Likes: {movie.likes}
          <button className="small-button" onClick={handleLikes}>+</button>
        </p>
        <p className="grid-card__details--dislikes">
          Dislikes: {movie.dislikes}
          <button className="small-button" onClick={handleDislikes}>-</button>
        </p>
        <div className="grid-card__details--delete">
          <button className="big-button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}
