const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export type QueryString = string;

export type PostResult = {
    excerpt?: string;
    content?: string;
    date: string;
    databaseId: number;
    featuredImage?: {
        node: {
            altText: string;
            link: string;
            slug: string;
            srcSet: string;
            sourceUrl: string;
        };
    };
    uri: string;
    title: string;
};

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
export const getPosts = async (): Promise<PostResult[]> => {
    // Filter the list by projects
    // posts(first: 5, where: { tag: "projects" }) {
    const postsQuery: QueryString = `query WPAllPostQuery {
            posts {
                nodes {
                    date
                    databaseId
                    excerpt
                    title
                    uri
                }
            }
        }`;

    const res = await getQuery(postsQuery);

    const { data } = await res.json();

    return data?.posts?.nodes || [];
};

export const getPost = async (uri: string): Promise<PostResult> => {
    const postQuery: QueryString = `query WPPostQuery {
            post(id: "${uri}", idType: URI) {
                content
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
