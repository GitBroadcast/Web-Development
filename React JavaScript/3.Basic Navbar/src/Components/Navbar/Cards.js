const Cards = ({ name, url }) => {
  return (
    <div style={{ display: "inline", padding: "10px" }}>
      <a
        href={url}
        style={{
          textDecoration: "none",
          color: "white",
          fontFamily: "fantasy",
        }}
      >
        {name}
      </a>
    </div>
  );
};
export default Cards;
