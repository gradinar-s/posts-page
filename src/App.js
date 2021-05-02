import "./App.css";

import Header from "./Components/Header/Header";
import Posts from "./Pages/Posts/Posts";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="container">
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
