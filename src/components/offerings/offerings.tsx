import './offerings.styles.css';

export const Offerings = () => {
    return (
        <div className="offerings-container">
            <div>
                <h2 className="strong-emphasis">Offerings</h2>
                <br />
                <p>
                    Reach out to me if you feel like you need:
                </p>
                <br />
                <ul>
                    <li>
                        <span className="strong-emphasis">An Informational Site:</span> Minimal turn-around time. A
                        great looking site that showcases your information and services
                    </li>
                    <li>
                        <span className="strong-emphasis">A Customized Site:</span> A site with a few more moving parts,
                        customizable to your unique needs. (e-commerce site, animations, unique layouts, tool or db
                        integrations, etc.)
                    </li>
                    <li>
                        <span className="strong-emphasis">Monthly Site Maintenance:</span> Ongoing management and
                        maintenance by a dedicated developer for continuous optimization and bug fixes for your site.
                        This is also offered as an add-on service for a customized site
                    </li>
                    <li>
                        <span className="strong-emphasis">Non-Profit Projects:</span> Discounted prices are offered for
                        non-profit and projects with social impact
                    </li>
                </ul>
            </div>
        </div>
    );
};
