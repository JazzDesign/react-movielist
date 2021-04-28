import React from 'react';
import { Movie } from './Movie';
import { useSelector } from 'react-redux';
import { useState} from 'react';
import '../assets/styles/components/MovieList.scss';
import { Pagination } from '../components/Pagination';

const selectCategory = state => state.category;
export function MovieList({ movies }) {
  const categories = useSelector(selectCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  //Pagination
  const indexLastMovie = currentPage * moviesPerPage;
  const indexFirstMovie = indexLastMovie - moviesPerPage;
  const finalMovies = movies.filter((mo) => (categories.category === 'All') ? mo : mo.category === categories.category);
  const currentMovies = finalMovies.slice(indexFirstMovie, indexLastMovie);

  const handlePaginate = (action) => {

    if (currentPage > 1) {
      if (action === 'back') {
        setCurrentPage(currentPage - 1);
      }
    }
    if (currentPage < Math.ceil(finalMovies.length / moviesPerPage)) {
      if (action === 'next') {
        setCurrentPage(currentPage + 1);
        console.log('next');
      }
    }
  }

  return (
    <>
      <div className="grid">
        {currentMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      {(movies.length !== 0) &&
        <Pagination moviesPerPage={moviesPerPage} totalMovies={finalMovies.length} paginate={handlePaginate} />
      }
    </>
  )
}
