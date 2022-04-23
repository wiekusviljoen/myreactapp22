import Hero from "./Hero";

// TMDB API KEY = ca2a714966e558e6611341224c92c0ab
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=ca2a714966e558e6611341224c92c0ab&language=en-US&query=Star%20Wars&page=1&include_adult=false

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword} `;

  const resultsHtml = searchResults.map((obj, i) => {
    return <div key={i}>{obj.original_title}</div>;
  });

  console.log(searchResults, "are the search results");
  return (
    <>
      <Hero text={title} />
      {resultsHtml}
    </>
  );
};

export default SearchView;
