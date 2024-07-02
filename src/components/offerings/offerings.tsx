import './offerings.styles.css';

export const Offerings = () => {
    return (
        <div className="offerings-container">
            <div>
                <h2 className="strong-emphasis">Services</h2>
                <br />
                <p>
                    I make websites for creatives and professionals who need:
                </p>
                <br />
                <ul>
                    <li>
                        <span className="strong-emphasis">An Informational Site:</span> Minimal turn-around time. A
                        great looking site that showcases your information and services
                    </li>
                    <li>
                        <span className="strong-emphasis">A Customized Site:</span> A site with a few more moving parts,
                        customizable to your needs. (e-commerce, animations, unique layouts, api/tool/db integrations,
                        etc.)
                    </li>
                    <li>
                        <span className="strong-emphasis">Monthly Site Maintenance:</span> Ongoing management and
                        maintenance by a dedicated developer for continuous optimization and bug fixes. This is also
                        offered as an additional service for a customized site
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
