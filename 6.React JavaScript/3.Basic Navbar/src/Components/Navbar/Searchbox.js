const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Your Content Here."
        style={{
          borderRadius: "5px",
          padding: "10px",
          fontFamily: "fantasy",
          width: "250px",
          backgroundColor: "skyblue",
          border: "0px",
        }}
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default Searchbox;
