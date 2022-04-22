import Hero from "./Hero";

const SearchView = ({ keyword, searchResults }) => {
  const title = "You are seaching for ";

  console.log(searchResults, "are the search results");
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
