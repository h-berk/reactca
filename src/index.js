import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import TVShowPage from "./pages/tvShowDetailsPage";
import TVShowsPage from "./pages/tvShowsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import FavouriteTVShowsPage from "./pages/favouriteTVShowsPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import TVShowReviewPage from "./pages/tvShowReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TVShowsContextProvider from "./contexts/tvShowsContext";
import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddTVShowReviewPage from './pages/addTVShowReviewPage';
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import ActorsPage from "./pages/actorsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

  const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <ActorsContextProvider>
            <MoviesContextProvider>
            <TVShowsContextProvider>
              <Routes>
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/reviews/tvshows/:id" element={ <TVShowReviewPage /> } />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route exact path="/actors/favourites" element={<FavouriteActorsPage />} />
            <Route exact path="/tvshows/favourites" element={<FavouriteTVShowsPage />} />
            <Route exact path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
            <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/tvshows" element={<TVShowsPage />} />
            <Route path="/tvshows/:id" element={<TVShowPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/tvform" element={<AddTVShowReviewPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
            </TVShowsContextProvider>
            </MoviesContextProvider>
          </ActorsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);