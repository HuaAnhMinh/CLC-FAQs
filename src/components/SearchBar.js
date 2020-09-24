import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';

import '../styles/components/SearchBar.scss';

const SearchBar = props => {
  return (
    <div className="search-bar">
      <Card>
        <CardActions>
          <TextField
            className="search-bar__input"
            variant="outlined"
            label="Tìm kiếm bài viết"
            autoComplete="off"
            size="small"
            value={props.searchPattern}
            onChange={(e) => props.changeSearchPattern(e.target.value)}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default SearchBar;