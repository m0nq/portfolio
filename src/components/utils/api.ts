const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export type QueryString = string;

export type PostResult = {
    excerpt: string;
    date: string;
    databaseId: number;
    featuredImage: {
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

// Take a filter param?
export const getPosts = async (): Promise<PostResult[]> => {

    // Filter the list by projects
    // posts(first: 5, where: { tag: "projects" }) {
    const postsQuery: QueryString = `{
            posts {
                nodes {
                    date
                    excerpt
                    featuredImage {
                        node {
                            altText
                            link
                            mediaItemUrl
                            sourceUrl
                            srcSet
                        }
                    }
                title
                uri
                databaseId
            }
        }
    }`;

    const res = await fetch(
        `${WORDPRESS_API_URL}?query=${encodeURIComponent(postsQuery)}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store'
        }
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    const { data } = await res.json();

    return data?.posts?.nodes || [];
};
