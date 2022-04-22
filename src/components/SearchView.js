import Hero from "./Hero";

// TMDB API KEY = ca2a714966e558e6611341224c92c0ab
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=ca2a714966e558e6611341224c92c0ab&language=en-US&query=Star%20Wars&page=1&include_adult=false

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are seaching for ${keyword} `;

  console.log(searchResults, "are the search results");
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
