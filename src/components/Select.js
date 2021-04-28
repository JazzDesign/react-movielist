import React from 'react'
import '../assets/styles/components/Select.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../redux/categorySlice';

const selectCategory = state => state.category;
export function Select({ categories }) {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);

  const handleSelect = (e) => {
    console.log(e.target.value);
    dispatch(updateCategory(e.target.value))
  }
  return (
    <section>
      <h2>Your selection is: {category.category} </h2>
      <select
        name="select"
        onChange={handleSelect}
      >
        <option value="All">All</option>
        {categories.map(category => (
          <option key={category.id} value={category.category} >
            {category.category}
          </option>
        ))}
      </select>
    </section>
  )
}
