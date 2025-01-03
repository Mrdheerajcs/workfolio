import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_HOST} from "../ApiConfig/ApiConfig";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  // const projects = [
  //   { title: "E-Commerce Website", description: "React & Spring Boot" },
  //   { title: "Document Management System", description: "React & Java" },
  //   { title: "Rocket Chat Clone", description: "React & MongoDB" },
  // ];



  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_HOST}/projects/getAll`, {
      });
      setProjects(response.data.response);

    } catch (error) {
      console.error("Fetch documents error:", error.message);
    }
  };
  // console.log(projects);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section section id="projects" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
