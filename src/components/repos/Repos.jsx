import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Repos.scss";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("playgrounds");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/GitHub/ReposShortFormated");
        if (!response.ok) {
          throw new Error("Error al obtener los repositorios");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const categorizeRepos = (repos) => {
    const categories = {
      cursos: [],
      websites: [],
      pruebasTecnicas: [],
      playgrounds: [],
      otros: [],
    };

    repos.forEach((repo) => {
      if (repo.topics && repo.topics.length > 0) {
        if (repo.topics.includes("course")) {
          categories.cursos.push(repo);
        } else if (repo.topics.includes("website")) {
          categories.websites.push(repo);
        } else if (repo.topics.includes("playground")) {
          categories.playgrounds.push(repo);
        } else {
          categories.otros.push(repo);
        }
      } else {
        categories.otros.push(repo);
      }
    });
    return categories;
  };

  const { cursos, websites, playgrounds } = categorizeRepos(repos);


  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  if (loading) {
    return <div className="loading">Cargando repositorios...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="servicios">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Repositorios
      </motion.h2>

      <div className="categoryNavigation">
        <button
          className={`categoryButton ${activeCategory === "cursos" ? "active" : ""}`}
          onClick={() => handleCategoryChange("cursos")}
        >
          Cursos
        </button>
        <button
          className={`categoryButton ${activeCategory === "websites" ? "active" : ""}`}
          onClick={() => handleCategoryChange("websites")}
        >
          Websites
        </button>
        <button
          className={`categoryButton ${activeCategory === "playgrounds" ? "active" : ""}`}
          onClick={() => handleCategoryChange("playgrounds")}
        >
          Playgrounds
        </button>
      </div>

      <div className="serviciosGrid">
        {activeCategory === "cursos" &&
          cursos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="servicioCard" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sin descripción"}</p>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton" 
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}

        {activeCategory === "websites" &&
          websites.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="servicioCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sin descripción"}</p>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton"
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}

        {activeCategory === "playgrounds" &&
          playgrounds.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="servicioCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sin descripción"}</p>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton"
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Repos;