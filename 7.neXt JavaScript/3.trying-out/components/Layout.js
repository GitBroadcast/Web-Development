import Footer from "./footer/footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
