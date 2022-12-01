# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: [Hasan Berk]

## Overview.
+ Firstly, I redid all the React Labs. I fixed any errors I previously encountered, and completed all exercises. I needed a good foundation before I added my own stuff. 


### New Pages.
+ List of Upcoming Movies.
+ List of Must Watch Movies.
+ List of Popular Movies.
+ List of TV Shows.
+ List of Favourite TV Shows
+ List of Popular Actors.
+ List of Favourite Actors.

### New Features.
 
+ Can add upcoming movies to your must watch list. Once added, they are tagged with a playlist icon.
+ Added a tv shows data model, where you can filter tv shows by name and/or genre. You can also view more information and tag them as favourites, as well as write reviews.
+ Actors data model added, Popular Actors page shows the current most popular actors, and their popularity score. You can favourite them, or see more information about them.
+ When actors are favourited, they also get tagged, and you can view them in the favourite actors page. 
+ When you want more information about an actor, it leads you to the actor details page, which has their biography, what they're known for, birthday and birthplace.
+ App has full caching support for all data models.

## Setup requirements.

+ May need to install npm before running the app locally after cloning from Git.

## TMDB endpoints.
##  Additional ones.
+ /tv/popular/ - popular tv shows
+ /tv/${id}/ - details of a tv show
+ /genre/tv/list/ - genres for a tv show
+ /tv/${id}/images/ - get the images for a tv show
+ /tv/${id}/reviews/ - get tv show reviews
+ /person/popular/ - get popular actors
+ /person/${id}/ - get details of an actor
+ /person/${id}/images/ - get the images of an actor

## App Design.

### Component catalogue.

New app features do not have storybook support.

### UI Design.

![ ](/src/images/newHomePage.png)

>New redesigned home page, with changes to the site header, and filter card. 

![ ](/src/images/movieDetails.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](/src/images/review.png)

>Shows the full review for a movie.

![ ](/src/images/upcomingMoviesPage.png)

>Shows the upcoming movies, as well as ones you added to your must watch list with the playlist add icon.

![ ](/src/images/mustWatchList.png)

>Shows the must watch list you added upcoming movies to.

![ ](/src/images/popularMovies.png)

>Shows a list of popular movies.

![ ](/src/images/tvShows.png)

>Shows a list of popular tv shows.

![ ](/src/images/tvShowDetails.png)

>Shows detailed information on a tv show. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](/src/images/favouriteTVShows.png)

>Shows a list of favourite tv shows selected by the user.

![ ](/src/images/popularActors.png)

>Shows a list of popular actors.


![ ](/src/images/actorDetails.png)

>Shows detailed information on an actor.

![ ](/src/images/favouriteActors.png)

>Shows a list of favourite actors selected by the user.

### Routing.

+ /reviews/:id - The user reviews for a movie or tv show. 
+ /actors/favourites - A list of favourite actors selected by the user.
+ /tvshows/favourites - A list of favourite TV Shows selected by the user.
+ /movies/mustwatch - A list of must watch movies selected by the user.
+ /movies/popular - A list of popular movies.
+ /actors/:id - A page of an actor's details, including a biography and other information about them.
+ /actors - A list of popular actors.
+ /tvshows - A list of popular TV Shows. 
+ /tvshows/:id - A page of a chosen TV Show's details. 
+ /movies/upcoming - A list of upcoming movies.
+ /reviews/tvform - A form to submit a review for a tv show.
