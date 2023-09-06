import { GraphQLClient, gql } from 'graphql-request';

export const graphcms = new GraphQLClient(String(process.env.REACT_APP_API));

export const QUERY_POSTS = gql`{
    posts() {
        date
        id
        slug
        title
        tags
        content { html }
    }
}`;

export const QUERY_PAGES = gql`{
    pages() {
        content { html }
          id
          slug,
          title,
          subtitle,
          coverImage { url }
    }
}`;
