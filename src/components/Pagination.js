import React from 'react';
import '../assets/styles/components/Pagination.scss';

export function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <button className='pagination-button' onClick={() => paginate('back')}>Précédent </button>
      <ul className="pagination-list">
        {pageNumbers.map(num => (
          <li key={num}>
            {num}
          </li>
        ))}
      </ul>
      <button className='pagination-button' onClick={() => paginate('next')}>Suivant </button>
    </nav>
  )
}
