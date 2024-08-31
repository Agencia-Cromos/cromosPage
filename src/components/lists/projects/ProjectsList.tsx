import { StyleProjectsList } from "./StyleProjectsList";
import { FaGithub } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { projects } from "../../../projects";

export function ProjectsList() {
  return (
    <StyleProjectsList>
      {projects.map((project, index) => (
        <li key={index}>
          <h2>{project.title}</h2>
          <div className="tech">
            <p>Tech:</p>
            <span>{project.technology}</span>
          </div>
          <p className="description">{project.description}</p>
          <div className="links">
            {project.layer === "back-end" ? (
              <a href={project.code} target="_blank">
                <FaGithub />
                GitHub Code
              </a>
            ) : (
              <>
                <a href={project.code} target="_blank">
                  <FaGithub />
                  GitHub Code
                </a>
                <a href={project.site} target="_blank">
                  <IoMdShareAlt />
                  Aplication
                </a>
              </>
            )}
          </div>
        </li>
      ))}
    </StyleProjectsList>
  );
}
