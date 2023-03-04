import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App__header">
          <h1>Hello from App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
