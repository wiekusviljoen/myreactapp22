import Hero from "./Hero";

const movieCard = ({ movie }) => {
  const postUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="card">
      <img src={postUrl} className="card-img-top" alt={movie.original_title} />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>

        <a href="go to somewhere" class="btn btn-primary">
          Show details
        </a>
      </div>
    </div>
  );
};

// TMDB API KEY = ca2a714966e558e6611341224c92c0ab
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=ca2a714966e558e6611341224c92c0ab&language=en-US&query=Star%20Wars&page=1&include_adult=false

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword} `;

  const resultsHtml = searchResults.map((obj, i) => {
    return <movieCard movie={obj} key={i} />;
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
