import React from 'react';
import '../../styles/Legal.css';

interface TermsProps {
    setActiveTab: (tab: string) => void;
}

const Privacy: React.FC<TermsProps> = ({setActiveTab}) => {
    return (
        <>
        <title>Privacy Policy - Hoosky</title>
        <meta name="description" content="Privacy Policy" />
        <div className="legal-page-wrapper">
            <div className="legal-page-container">
                <a className="homeNavigation" onClick={() => {setActiveTab('home')}}>Home <i className={'fa fa-chevron-right'}></i></a>
                <h1>Privacy Policy</h1>
                <div className="legal-conditions-container">
                    <h4 className="legal-description">This Privacy Policy explains how Hoosky Services ("we", "our", "us") collects, uses, stores, and protects customer information when using our website and services.</h4>
                    
                    <div className="term-item">
                        <h4 className="legal-title">1. Information We Collect</h4>
                        <h4 className="legal-description">We may collect the following types of data when you access or interact with Hoosky Services:.</h4>
                        <ul>
                            <li>
                                <p className="legal-description">
                                    <span className="description-label">Account Information:</span> Username, email address, and contact details provided during account creation or purchase.
                                </p>
                            </li>
                            <li>
                                <p className="legal-description">
                                    <span className="description-label">Payment Information:</span> Transaction details such as payment method, transaction ID, and billing information (processed securely by third-party payment processors; Hoosky Services does not store full payment credentials).
                                </p>
                            </li>
                            <li>
                                <p className="legal-description">
                                    <span className="description-label">Technical Data:</span> IP address, device information, browser type, and general usage analytics.
                                </p>
                            </li>
                            <li>
                                <p className="legal-description">
                                    <span className="description-label">Support Communications:</span> Messages or tickets submitted to our support team.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">2. How We Use Your Information</h4>
                        <h4 className="legal-description">We use collected information to:</h4>
                        <ul>
                            <li>
                                <p className="legal-description">Process and confirm orders and payments</p>
                            </li>
                            <li>
                                <p className="legal-description">Deliver purchased digital products and services</p>
                            </li>
                            <li>
                                <p className="legal-description">Provide customer support and security verification</p>
                            </li>
                            <li>
                                <p className="legal-description">Improve service quality, performance, and platform functionality</p>
                            </li>
                            <li>
                                <p className="legal-description">Prevent fraud, chargebacks, and unauthorized activity</p>
                            </li>
                        </ul>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">3. Data Protection & Security</h4>
                        <h4 className="legal-description">We take the protection of your data seriously. Hoosky Services implements security measures to prevent:</h4>
                        <ul>
                            <li>
                                <p className="legal-description">Unauthorized access</p>
                            </li>
                            <li>
                                <p className="legal-description">Data alteration</p>
                            </li>
                            <li>
                                <p className="legal-description">Disclosure or destruction of personal information</p>
                            </li>
                        </ul>
                        <h4 className="legal-description">Payment processing is handled through secure, trusted third-party providers. Hoosky Services never stores sensitive payment details such as full credit card numbers.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">4. Sharing of Information</h4>
                        <h4 className="legal-description">We do not sell or share your personal data with external parties except when neccessary to:</h4>
                        <ul>
                            <li>
                                <p className="legal-description">Process payments</p>
                            </li>
                            <li>
                                <p className="legal-description">Prevent fraudulent activity</p>
                            </li>
                            <li>
                                <p className="legal-description">Comply with legal obligations</p>
                            </li>
                            <li>
                                <p className="legal-description">Provide essential services (e.g., hosting or security tools)</p>
                            </li>
                        </ul>
                        <h4 className="legal-description">All third parties operate under confidentiality and data-protection standards.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">5. Cookies & Tracking Technologies</h4>
                        <h4 className="legal-description">Hoosky Services may use cookies or similar technologies to:</h4>
                        <ul>
                            <li>
                                <p className="legal-description">Improve user experience</p>
                            </li>
                            <li>
                                <p className="legal-description">Track performance and site analytics</p>
                            </li>
                            <li>
                                <p className="legal-description">Remember user preferences</p>
                            </li>
                        </ul>
                        <h4 className="legal-description">You can manage or disable cookies through your browser settings.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">6. Data Retention</h4>
                        <h4 className="legal-description">We retain user data only as long as necessary for:</h4>
                        <ul>
                            <li>
                                <p className="legal-description">Legal compliance</p>
                            </li>
                            <li>
                                <p className="legal-description">Security and fraud prevention</p>
                            </li>
                            <li>
                                <p className="legal-description">Service operation</p>
                            </li>
                        </ul>
                        <h4 className="legal-description">When data is no longer required, it is securely deleted.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">7. User Rights</h4>
                        <h4 className="legal-description">Depending on your region, you may have the right to:</h4>
                        <ul>
                            <li>
                                <p className="legal-description">Request access to your personal data</p>
                            </li>
                            <li>
                                <p className="legal-description">Request deletion or correction of data</p>
                            </li>
                            <li>
                                <p className="legal-description">Request a copy of stored information</p>
                            </li>
                        </ul>
                        <h4 className="legal-description">To exercise any of these rights, contact our support team.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">8. Changes To This Policy</h4>
                        <h4 className="legal-description">Hoosky Services may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of our services indicates acceptance of the updated terms.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">9. Contact Information</h4>
                        <h4 className="legal-description">For questions regarding this Privacy Policy or your data, please contact our support team through our official channels.</h4>
                    </div>

                    <hr></hr>
                    <div className="term-item-last">
                        <h4 className="legal-title">By using Hoosky Services, you agree to the collection and use of your information as outlined in this Privacy Policy</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Privacy;