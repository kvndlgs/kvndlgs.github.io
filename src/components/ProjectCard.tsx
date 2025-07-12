import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useGetProjects } from '@/lib/useRequest';


export default function ProjectCard() {
    const { data, status } = useGetProjects();
 return (
    <>
        { status === "loading" ? (
            <p> loading.. </p>
        ): (
            data?.map((project) => {
                <Card key={project.id}>
                            <div>
        <img src={project.thumbnail.url} alt={project.title} />
        <div className='flex'>
            <h2> { project.title } </h2>
            <p> { project.description } </p>
            <small> { project.category } </small>
        </div>
        <Link to={`/projects/${project.slug}`}>
        </Link>
        <span> { project.tags }</span>
        </div>
                </Card>
            })
        )}
        </>
 );
}
