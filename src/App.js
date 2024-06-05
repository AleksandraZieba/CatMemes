import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MemesGallery from "./components/MemesGallery/MemesGallery";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <MemesGallery />
      </Main>
    </div>
  );
}

export default App;
