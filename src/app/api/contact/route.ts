import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { emailOptions } from '@utils/nodemailer';
import { transporter } from '@utils/nodemailer';

export const POST = async (req: Request): Promise<NextResponse> => {
    const request = await req.json();

    const mailOptions: nodemailer.SendMailOptions = {
        ...emailOptions,
        subject: `Portfolio Message from ${request.name}`, // Subject line
        text: request.message, // plain text body
        html: `<div>${request.message}</div>` // html body
    };

    try {
        const response: nodemailer.SentMessageInfo = await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { success: true, errors: null, response },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, errors: { message: error } },
            { status: 500 }
        );
    }
};
