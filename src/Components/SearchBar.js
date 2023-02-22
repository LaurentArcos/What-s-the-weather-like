/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';

function SearchBar({ search, setSearch, fetchResults }) {
  return (
      <form onSubmit={(e) => {
            e.preventDefault();
            fetchResults();
          }}
        className='searchbar'
        >
        <TextField
          fullWidth
          value={search}
          label="Enter a city name"
          variant="outlined"
          placeholder="Search a city and find out what's the weather like there !"
          onChange={(event) => setSearch(event.target.value)}
          color="secondary"        
        >
        </TextField>
      </form>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
};

export default SearchBar;