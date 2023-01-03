import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import TVShowPage from "./pages/tvShowDetailsPage";
import TVShowsPage from "./pages/tvShowsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import FavouriteTVShowsPage from "./pages/favouriteTVShowsPage"; // NEW
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
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
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";

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
          <AuthProvider>
          <AuthHeader />
          <ActorsContextProvider>
            <MoviesContextProvider>
            <TVShowsContextProvider>
              <Routes>
            <Route path="/reviews/:id" element={<PrivateRoute><MovieReviewPage /></PrivateRoute>} />
            <Route path="/reviews/:id" element={<PrivateRoute> <TVShowReviewPage /></PrivateRoute> } />
            <Route exact path="/movies/favourites" element={<PrivateRoute><FavouriteMoviesPage /></PrivateRoute>} />
            <Route exact path="/actors/favourites" element={<PrivateRoute><FavouriteActorsPage /></PrivateRoute>} />
            <Route exact path="/tvshows/favourites" element={<PrivateRoute><FavouriteTVShowsPage /></PrivateRoute>} />
            <Route exact path="/movies/mustwatch" element={<PrivateRoute><MustWatchMoviesPage /></PrivateRoute>} />
            <Route exact path="/movies/popular" element={<PrivateRoute><PopularMoviesPage /></PrivateRoute>} />
            <Route path="/movies/:id" element={<PrivateRoute><MoviePage /></PrivateRoute>} />
            <Route path="/actors/:id" element={<PrivateRoute><ActorPage /></PrivateRoute>} />
            <Route path="/actors" element={<PrivateRoute><ActorsPage /></PrivateRoute>} />
            <Route path="/tvshows" element={<PrivateRoute><TVShowsPage /></PrivateRoute>} />
            <Route path="/tvshows/:id" element={<PrivateRoute><TVShowPage /></PrivateRoute>} />
            <Route path="/movies/upcoming" element={<PrivateRoute> <UpcomingMoviesPage /></PrivateRoute>}/>
            <Route path="/reviews/form" element={<PrivateRoute><AddMovieReviewPage/></PrivateRoute>} />
            <Route path="/reviews/tvform" element={<PrivateRoute><AddTVShowReviewPage/></PrivateRoute>} />
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="*" element={ <PrivateRoute> <Navigate to="/" /></PrivateRoute> } />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            </Routes>
            </TVShowsContextProvider>
            </MoviesContextProvider>
          </ActorsContextProvider>
          </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));