import React from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { type PageProps } from 'gatsby';

import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import { findLink } from '@utils/find-link';

const Contact: React.FC<PageProps> = () => {
    return (
        <>
            <form method="POST" action="https://formspree.io/f/xdoqjkon" id="contact-form">
                <fieldset id="contact-form-group" className="contact-form">
                    <label htmlFor="full-name">Name</label>
                    <input type="text" name="name" id="full-name" placeholder="First and Last" required />
                    <label htmlFor="email-address">Email</label>
                    <input type="email" name="_replyto" id="email-address" placeholder="something@email.com"
                        required />
                    <label htmlFor="message">Message</label>
                    <textarea rows={5}
                        name="message"
                        id="message"
                        placeholder="Fashion axe fanny pack migas cliche kinfolk. Mukbang selfies palo santo post-ironic DIY. Tacos gochujang mumblecore whatever. Bicycle rights tousled tumblr DIY. Cray solarpunk master cleanse pug live-edge, helvetica XOXO. Pour-over fam bruh typewriter mixtape, thundercats twee listicle raw denim lomo yes plz XOXO artisan jean shorts. Quinoa ugh grailed jawn tumeric yr jianbing."
                        required />
                    <input type="hidden" name="_subject" id="email-subject"
                        value="Porfolio Contact Form Submission" />
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                </fieldset>
                <button type="submit" className="contact-send-btn">Send</button>
                {/*<input type="submit" value="Send" className="contact-send-btn"/>*/}
            </form>
        </>
    );
};

export default Contact;

export const Head = ({ data: { site: { siteMetadata } } }): ReactElement => {
    const title: string = findLink(siteMetadata.menuLinks, 'contact') || siteMetadata.title;

    return <title>{capitalizeFirstLetter(title)}</title>;
};

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                title
                menuLinks {
                    name
                }
            }
        }
    }
`;
