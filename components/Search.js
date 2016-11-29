import React from 'react';
import '../css/search.scss'

const Search = () => {
  return (
    <form className="search-form">
      <input type="text" autoFocus={focus} placeholder="Type to search" />
    </form>
  )
}
export default Search;
