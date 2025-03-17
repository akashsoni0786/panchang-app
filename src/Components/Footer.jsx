import { footerData } from '../Data';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {footerData.map((section, index) => (
                    <div key={index} className="footer-section">
                        <h3>
                            <img src={section.icon} alt="icon" />
                            {section.title}
                        </h3>
                        <ul>
                            {section.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="copyright">
                All rights reserved. Copyrights © www.department.com Privacy Policy
            </div>
        </footer>
    );
};

export default Footer;