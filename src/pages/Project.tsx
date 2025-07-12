import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectBySlug } from '@/api';

interface ProjectProps {
    id: string;
    title: string;
    thumbnail: {
        url: string;
    };
    description: string;
    category: string;
    tags: [];
    slug: string;
}

const Project: React.FC = () => {
    const [project, setProject] = useState<ProjectProps | null>(null);
    const navigate = useNavigate();

    const { slug }: { slug: string } = useParams();

    useEffect(() => {
        const fetchProject = async (): Promise<void> => {
            const { project }: { project: ProjectProps } = await getProjectBySlug(slug);
            setProject(project);
        };
        fetchProject();
    }[slug]);

    return (
        <div>
            <button onClick={() => navigate(-1)}> previous </button>
         
        </div>
    )
}

export default Project;