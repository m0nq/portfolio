import Link from 'next/link';

export const CatList = ({ postObject }: any) => {
    return (
        <div className="text-center">
            {postObject.categories.nodes.map((category: any) => (
                <Link key={category.name} href={category.link}>
                    {category.name}
                </Link>
            )).join(', ')}
        </div>
    );
};
