import AboveHeader from "../components/AboveHeader";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <div className="max-w-screen font-medium">
      <AboveHeader />
      <Header />
      <Filter />
      <Main />
    </div>
  );
}

export default Home;
