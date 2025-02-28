import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Repos.scss";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los repositorios
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

  // Función para categorizar los repositorios
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
        } else if (repo.topics.includes("prueba")) {
          categories.pruebasTecnicas.push(repo);
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

  if (loading) {
    return <div className="loading">Cargando repositorios...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="repos">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Repositorios
      </motion.h2>

      {/* Cursos */}
      <div className="category">
        <h3>Cursos</h3>
        <div className="repoGrid">
          {cursos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="repoCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4>{repo.name}</h4>
              <p>{repo.description || "Sin descripción"}</p>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Websites */}
      <div className="category">
        <h3>Websites</h3>
        <div className="repoGrid">
          {websites.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="repoCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4>{repo.name}</h4>
              <p>{repo.description || "Sin descripción"}</p>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Playgrounds */}
      <div className="category">
        <h3>Playgrounds</h3>
        <div className="repoGrid">
          {playgrounds.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="repoCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4>{repo.name}</h4>
              <p>{repo.description || "Sin descripción"}</p>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Ver en GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Repos;