import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cuisine/:type" element={<Cuisine />}/>
          <Route path="/results/:search" element={<SearchResults/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
    </div>
  )
}

export default Pages