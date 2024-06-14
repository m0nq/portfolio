import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: Request): Promise<NextResponse> => {
    const request = await req.json();

    const transporter: nodemailer.Transporter = nodemailer.createTransport({
        service: process.env.EMAIL_HOST,
        // host: process.env.EMAIL_HOST,
        // port: 465,
        // secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: request.email, // sender address
        to: process.env.EMAIL_SEND_TO, // receiver address
        subject: `Message from ${request.name} (${request.email})`, // Subject line
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
        console.log(error);
        return NextResponse.json(
            { success: false, errors: { message: error } },
            { status: 500 }
        );
    }
};
