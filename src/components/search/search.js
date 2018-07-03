import React from 'react';
import { Input } from 'semantic-ui-react'
import './search.css';

export const SearchBar = ({value,onChange,placeholder}) => (
  <div className="SearchBar">
  <Input icon='search' placeholder={placeholder}
  value={value}
  onChange={onChange}
  />
  </div>
)
