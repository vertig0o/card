import "bulma/css/bulma.css";
import Course from "./Course";
import "./App.css";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/boostrap.png";
import Csharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate amet facilis incidunt at fugiat ducimus totam ad rerum? Blanditiis
              voluptatibus nemo et vitae facilis nesciunt,quaerat repellat porro aliquam. Pariatur. "
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate amet facilis incidunt at fugiat ducimus totam ad rerum? Blanditiis
              voluptatibus nemo et vitae facilis nesciunt,quaerat repellat porro aliquam. Pariatur. "
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Csharp Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate amet facilis incidunt at fugiat ducimus totam ad rerum? Blanditiis
              voluptatibus nemo et vitae facilis nesciunt,quaerat repellat porro aliquam. Pariatur. "
              />
            </div>
            <div className="column">
              <Course
                image={Kompleweb}
                title="Frontend"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptate amet facilis incidunt at fugiat ducimus totam ad rerum? Blanditiis
                voluptatibus nemo et vitae facilis nesciunt,quaerat repellat porro aliquam. Pariatur. "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
