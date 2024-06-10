const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export type QueryString = string;

export type CursorType = string | null;

export type PageInfo = {
    hasNextPage: boolean;
    endCursor: CursorType;
    hasPreviousPage: boolean;
    startCursor: CursorType;
}

export type WhereClause = {
    tag?: string;
    category?: string;
}

export type PostResult = {
    node: Post;
};

export type Post = {
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
    categories?: {
        nodes: {
            name: string;
        }[];
    };
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
export const getPosts = async (
    first: number = 10,
    cursorInfo?: { before?: CursorType, after?: CursorType },
    filter: WhereClause = {}
): Promise<{ posts: PostResult[], pageInfo: PageInfo }> => {

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
              node {
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

    const { data } = await res.json();

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
