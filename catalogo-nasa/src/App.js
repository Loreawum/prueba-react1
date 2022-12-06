import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./componentes/MiApi";

function App() {
  return (
    <div className="App">
      <main className="vh-90">
        <MiApi />
      </main>
      <footer id="footer" className="sticky-bottom text-light d-flex">
        <a
          className="nav-link active text-light mx-5"
          aria-current="page"
          href="#"
        >
          Web developer: Cristopher San Martín
        </a>
      </footer>
    </div>
  );
}

export default App;
