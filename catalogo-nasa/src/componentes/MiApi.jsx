import React, { useEffect, useState } from "react";
import "../index.css";

export const MiApi = () => {
  //hooks
  const [nasa, setNasa] = useState([]);
  const [filtrar, setFiltrar] = useState("");

  //api
  const apiKey = "hBCrkTGo9cfEh78OKvGmQJx5CY6f0lKdSxZU4Frm";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=8`;
  //funcion para traer los datos de la api
  const mostrarDatos = async () => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
    setNasa(datos);
  };

  //funcion de busqueda
  const buscador = (e) => {
    setFiltrar(e.target.value);
  };

  //metodo de filtrado
  const filtrados = !filtrar
    ? nasa
    : nasa.filter(
        (dato) =>
          dato.title.toLowerCase().includes(filtrar.toLocaleLowerCase()) ||
          dato.date.includes(filtrar)
      );

  useEffect(() => {
    mostrarDatos();
  }, []);

  //renderización
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src="https://img.icons8.com/color/48/null/nasa.png" />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-bg-dark"
                  aria-current="page"
                  href="https://api.nasa.gov/"
                  target="_blank"
                >
                  Nasa APIs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-bg-dark"
                  href="https://github.com/Loreawum/prueba-react1"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-bg-dark"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i> YouTube
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                id="busqueda"
                onChange={buscador}
                value={filtrar}
                className="form-control me-2"
                type="text"
                placeholder="Búsqueda"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <div>
        {filtrados.map((nasa) => (
          <section key={nasa.title} className="d-flex justify-content-center">
            <div id="card-container" className="card my-3">
              <div className="card-body">
                <h5 className="card-title">{nasa.title}</h5>
                <p className="card-text">
                  <small className="text-muted">Fecha: {nasa.date}</small>
                </p>
              </div>
              <img
                src={nasa.url}
                className="card-img-bottom"
                alt={nasa.title}
              />
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Ver más
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{nasa.explanation}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default MiApi;
