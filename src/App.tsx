import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PodcastItem from './components/podcastItem';
import NotFound from './containers/notFound';
import PodcastList from './containers/podcastList';
import PodcastProvider, { PodcastContext } from './context/podcastContext';

function App() {
  return (
    <div className="App">
      <PodcastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PodcastList />} />
            <Route path="/podcast/:podcastId" element={<PodcastItem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PodcastProvider>
    </div>
  );
}

export default App;
