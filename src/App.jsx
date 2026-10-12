import vendors from "./data/vendors.js";
import Header from "./components/Header.jsx";
import MenuList from "./components/MenuList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const selectedVendor = vendors[0];
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2 className="section-title">Today's vendors</h2>
          <MenuList items={selectedVendor.menu} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
