import nodemailer from 'nodemailer';

export const transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: process.env.EMAIL_HOST,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const emailOptions = {
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL // receiver address
};
