'use server';
import { WhereClause } from '@data-types/data-props';
import { PageInfo } from '@data-types/data-props';
import { QueryString } from '@data-types/data-props';
import { Post } from '@data-types/data-props';
import { CursorInfo } from '@data-types/data-props';
import { DataResponse } from '@data-types/data-props';
import { PostEdges } from '@data-types/data-props';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

type GraphQLError = {
    message: string;
    extensions?: {
        code?: string;
    };
};

type GraphQLResponse<TData> = {
    data?: TData | null;
    errors?: GraphQLError[];
};

const logWpGraphqlFailure = (details: Record<string, unknown>): void => {
    process.stderr.write(
        `${JSON.stringify({
            level: 'error',
            source: 'wp-graphql',
            ...details
        })}\n`
    );
};

const getQuery = async (postQuery: string, options?: { operationName: string; uri?: string }): Promise<Response> => {
    if (!WORDPRESS_API_URL) {
        logWpGraphqlFailure({
            operationName: options?.operationName,
            reason: 'missing_env',
            envVar: 'WORDPRESS_API_URL'
        });
        throw new Error('WordPress API is not configured');
    }

    const variables = {
        uri: options?.uri ?? ''
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
        logWpGraphqlFailure({
            operationName: options?.operationName,
            reason: 'http_error',
            status: res.status,
            statusText: res.statusText,
            uri: options?.uri
        });

        throw new Error('WordPress API request failed');
    }

    return res;
};

const parseGraphqlJson = async <TData>(
    res: Response,
    context: { operationName: string; uri?: string }
): Promise<TData> => {
    let json: GraphQLResponse<TData>;
    try {
        json = (await res.json()) as GraphQLResponse<TData>;
    } catch (error) {
        logWpGraphqlFailure({
            operationName: context.operationName,
            reason: 'invalid_json',
            uri: context.uri
        });
        throw new Error('WordPress API returned invalid JSON');
    }

    if (json.errors?.length) {
        logWpGraphqlFailure({
            operationName: context.operationName,
            reason: 'graphql_errors',
            uri: context.uri,
            errors: json.errors.map((e) => ({ message: e.message, code: e.extensions?.code }))
        });
        throw new Error('WordPress API returned GraphQL errors');
    }

    if (!json.data) {
        logWpGraphqlFailure({
            operationName: context.operationName,
            reason: 'missing_data',
            uri: context.uri
        });
        throw new Error('WordPress API returned no data');
    }

    return json.data;
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
                tag: "portfolio${', ' + filter.tag || ''}",
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
                featuredImage {
                  node {
                    altText
                    sourceUrl
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

    const res = await getQuery(postsQuery, { operationName: 'WPAllPostQuery' });
    const data = await parseGraphqlJson<DataResponse['data']>(res, { operationName: 'WPAllPostQuery' });

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

export const getPost = async (uri: string): Promise<Post | null> => {
    const postQuery: QueryString = `query WPPostQuery {
            post(id: "${uri}", idType: URI) {
                content(format: RENDERED)
                date
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                title
              }
            }`;

    const res = await getQuery(postQuery, { operationName: 'WPPostQuery', uri });
    const data = await parseGraphqlJson<{ post: Post | null }>(res, { operationName: 'WPPostQuery', uri });

    return data?.post ?? null;
};
