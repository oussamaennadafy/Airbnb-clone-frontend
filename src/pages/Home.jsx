import AboveHeader from "../components/Home/AboveHeader";
import Filter from "../components/Home/Filter";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <div className="max-w-screen font-medium">
      <AboveHeader />
      <Header />
      <Filter />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
