import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = import.meta.env.HYGRAPH_URL;

const graphQLClient = new GraphQLClient(API_URL);

type Project = {
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

export function useGetProjects() {
    return useQuery<Project[]>('get-projects', async () => {
        const { projects } = await graphQLClient.request(gql`
            query {
              projects {
                id
                title
                thumbnail
                description
                tags
                category
                slug
              }
            }`);
            return projects
    });
}
