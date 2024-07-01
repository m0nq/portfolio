import { WhereClause } from '@data-types/data-props';
import { PageInfo } from '@data-types/data-props';
import { QueryString } from '@data-types/data-props';
import { Post } from '@data-types/data-props';
import { CursorInfo } from '@data-types/data-props';
import { DataResponse } from '@data-types/data-props';
import { PostEdges } from '@data-types/data-props';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

const getQuery = async (postQuery: string, uri: string = ''): Promise<Response> => {
    const variables = {
        uri
    };

    const res = await fetch(
        `${WORDPRESS_API_URL}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            next: {
                revalidate: 60
            },
            body: JSON.stringify({ query: postQuery, variables })
        }
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res;
};

// Take a filter param to filter projects?
export const getPosts = async (
    first: number = 10,
    filter: WhereClause = {},
    cursorInfo?: CursorInfo
): Promise<{ posts: PostEdges[], pageInfo: PageInfo }> => {

    // Filter the list by projects
    const postsQuery: QueryString = `query WPAllPostQuery {
        posts(
            first: ${first},
            before: "${cursorInfo?.before || null}",
            after: "${cursorInfo?.after || null}",
            where: {
                orderby: {field: DATE, order: DESC},
                tag: "${filter.tag || ''}",
                categoryName: "${filter.category || ''}"
            }
        ) {
            pageInfo {
              hasNextPage
              endCursor
              hasPreviousPage
              startCursor
            }
            edges {
              post: node {
                categories {
                  nodes {
                    name
                  }
                }
                databaseId
                date
                excerpt(format: RENDERED)
                tags {
                  nodes {
                    name
                  }
                }
                title(format: RENDERED)
                uri
              }
            }
          }
        }`;

    const res = await getQuery(postsQuery);

    const { data }: DataResponse = await res.json();

    // There's a bug in WPGraphQL where it sometimes returns null values for both cursors
    // if (!data?.posts?.pageInfo?.hasNextPage && !data?.posts?.pageInfo?.hasPreviousPage) {
    //     return await getPosts();
    // }

    return {
        posts: data?.posts?.edges || [],
        pageInfo: data?.posts?.pageInfo || {
            hasNextPage: false,
            endCursor: null,
            hasPreviousPage: false,
            startCursor: null
        }
    };
};

export const getPost = async (uri: string): Promise<Post> => {
    const postQuery: QueryString = `query WPPostQuery {
            post(id: "${uri}", idType: URI) {
                content(format: RENDERED)
                date
                featuredImage {
                  node {
                    altText
                    sourceUrl
                    srcSet
                  }
                }
                title
              }
            }`;

    const res = await getQuery(postQuery, uri);

    const { data } = await res.json();

    return data?.post || {};
};
