import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getPosts } from '@utils/api';

export const POST = async (req: NextRequest) => {
    const { first = 10, filter = {}, cursorInfo = {} } = await req.json();
    try {
        const data = await getPosts(first, filter, cursorInfo);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
};
