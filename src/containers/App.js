import '../assets/styles/App.scss';
import { movies$ } from '../assets/data/movies';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addMovies } from '../redux/moviesSlice';
import { Select } from '../components/Select';
import { MovieList } from '../components/MovieList';


const selectMovies = state => state.movies;

function App() {
  const dispatch = useDispatch();


  const [loading, setLoading] = useState(false);
  const movies = useSelector(selectMovies);

  function getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }

  useEffect(() => {
      setLoading(true);
      movies$.then((movies) => {
        dispatch(addMovies(movies));
      });
      setLoading(false);
  }, [dispatch]);

  const getUniqueCategory = getUnique(movies, "category");





  return (
    <div className="App">
      <div className="app-wrapper">
        <h1>Movie List</h1>
        <Select categories={getUniqueCategory} />
        {!loading &&
          (movies.length !== 0) ? <MovieList movies={movies} /> : <h1>No more movies :(</h1>
        }

      </div>
    </div>
  );
}

export default App;
