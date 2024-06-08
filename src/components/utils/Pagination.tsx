import Link from 'next/link';

export const Pagination = ({ pageContext }: any) => {
    const { previousPagePath, nextPagePath } = pageContext;

    return (
        <nav className="flex my-12 mx-auto py-0 px-8 justify-center">
            <div className="m-4 grow-0 shrink-0 basis-96">
                {previousPagePath && <Link href={previousPagePath}>← Newer Posts</Link>}
            </div>

            <div className="m-4 grow-0 shrink-0 basis-96">
                {nextPagePath && <Link href={nextPagePath}>Older Posts →</Link>}
            </div>
        </nav>
    );
};
