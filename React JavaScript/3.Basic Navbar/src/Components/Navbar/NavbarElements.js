import Cards from "./Cards";

const NavbarElements = () => {
  const elements = ["Home", "Contacts", "About"];
  const url = ["Home", "Contacts", "About"];
  const blocks = elements.map((element, i) => (
    <Cards key={element} name={element} url={url[i]} />
  ));
  return <div style={{ padding: "10px" }}>{blocks}</div>;
};
export default NavbarElements;
