import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/fetchMoviesApi';

const Reviews = () => {
  const [review, setReviewMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId)
      .then(data => {
        setReviewMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              Author: <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Reviews not found</div>
      )}
    </>
  );
};

export default Reviews;
