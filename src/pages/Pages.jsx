import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence, animatePresence} from 'framer-motion';

function Pages() {
  let location = useLocation();
  return (
    <AnimatePresence mode="wait" >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/cuisine/:type" element={<Cuisine />}/>
          <Route path="/results/:search" element={<SearchResults/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default Pages