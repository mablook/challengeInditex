import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PodcastDetails from './components/podcastDetails/podcastDetails';
import PodcastEpisode from './components/podcastEpisode/podcastEpisode';
import DefaultPageContainer from './containers/defaultPageContainer/defaultPageContainer';
import NotFound from './containers/notFound';
import PodcastList from './containers/podcastList/podcastList';
import PodcastProvider from './context/podcastContext';

function App() {
  return (
    <div className="App">
      <PodcastProvider>

        <BrowserRouter>
          <Routes>
          <Route path="/" element={<DefaultPageContainer />} >
            <Route path="/" element={<PodcastList />} />
            <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={<PodcastEpisode />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PodcastProvider>
    </div>
  );
}

export default App;
