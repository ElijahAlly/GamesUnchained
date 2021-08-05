import React from 'react';
import Navbar from './components/navbar'
import GamesList from './components/games_list'
import FilterResults from './components/filter_results'
import './App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <section className='show-results'>
        <FilterResults />
        <GamesList />
      </section>
    </>
  );
}

export default App;
