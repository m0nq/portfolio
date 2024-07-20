import Link from 'next/link';

import './offerings.styles.css';

export const Offerings = () => {
    return (
        <div className="offerings-container">
            <div>
                <p>
                    I create websites for businesses and creative professionals so they can focus on what they love.
                    Whether you need a clean and informative site or a dynamic platform with bells and whistles, I
                    can help you bring your vision to life.
                </p>
                <br />
                <p>Here&apos;s what I offer:</p>
                <br />
                <ul>
                    <li>
                        <span className="strong-emphasis">Simple & Effective Websites:</span> Looking for a quick and
                        cost-effective solution? Let&apos;s leverage the power of no-code builders to create a beautiful
                        and functional website showcasing your brand.
                    </li>
                    <li>
                        <span className="strong-emphasis">Customized with Power:</span> Need something more complex? My
                        expertise extends to custom layouts, animations, e-commerce functionalities, API integrations,
                        and database connections.
                    </li>
                    <li>
                        <span className="strong-emphasis">Always Up and Running:</span> Focus on what you do best while
                        I take care of your website&apos;s ongoing health. Choose from flexible monthly maintenance
                        plans to keep your site secure, updated, and performing optimally.
                    </li>
                    <li>
                        <span className="strong-emphasis">Get Found Online:</span> Enhance your website&apos;s
                        visibility with strategic SEO and Post-SEO optimization techniques, helping potential customers
                        discover your brand.
                    </li>
                    <li>
                        <span className="strong-emphasis">Spread the Impact:</span> Non-profit organizations and social
                        impact projects hold a special place in my heart. I offer special discounts to support your
                        mission and amplify your reach.
                    </li>
                </ul>
                <br />
                <h2>Let&apos;s chat!</h2>
                <br />
                <p>
                    I believe websites should be more than just online brochures. They should be powerful tools to
                    connect with your audience and drive results. Let&apos;s discuss your specific needs and create a
                    site that truly represents your brand and drives your goals.
                </p>
                <br />
                <p>
                    P.S. Check out my <span><Link href="/#projects">portfolio</Link></span> to see examples of my work!
                </p>
            </div>
        </div>
    );
};
