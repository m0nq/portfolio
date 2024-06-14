import nodemailer from 'nodemailer';

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export const transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    }
});

export const emailOptions = {
    from: email, // sender address
    to: email // receiver address
};
