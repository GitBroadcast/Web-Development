import { useState } from "react";
import NavbarElements from "./NavbarElements";
import Searchbox from "./Searchbox";

const Navbar = () => {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const logSearch = () => {
    return console.log(searchField);
  };
  logSearch();

  return (
    <div
      style={{
        justifyContent: "space-around",
        display: "flex",
        padding: "15px",
      }}
    >
      <NavbarElements />
      <Searchbox searchChange={onSearchChange} />
    </div>
  );
};
export default Navbar;
