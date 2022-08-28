import Popular from "../components/Popular";
import Favourites from "../components/Favourites";
import React from 'react'

function Home() {
  return (
    <div>
        <Favourites/>
        <Popular/>
    </div>
  )
}

export default Home