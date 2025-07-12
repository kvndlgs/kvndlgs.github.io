import { useState, useEffect, FC } from 'react';
import { useNavigate } from "react-router-dom"
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from '@/api';


export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const { projects } = await getAllProjects();
            setProjects(projects)
        };
        fetchProjects();
    }, []);
    return (
        <div className="container">
            <button onClick={() => navigate(1)}> NEXT </button>
            <div>
                <h1> Projects </h1>
            </div>
            <div className="container">
                { projects.map((project) => {
                    <ProjectCard  
                      project={project}
                    />
                })}
            </div>
        </div>
    )
}