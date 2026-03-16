import React from 'react';
import '../../styles/Legal.css';
import { useNavigate } from 'react-router-dom';

// interface TermsProps {
//     setActiveTab: (tab: string) => void;
// }

const Terms: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
        <title>Terms & Conditions - Telvion</title>
        <meta name="description" content="Terms & Conditions" />
        <div className="legal-page-wrapper">
            <div className="legal-page-container">
                <a className="homeNavigation" onClick={() => {navigate('/')}}>Home <i className={'fa fa-chevron-right'}></i></a>
                <h1 className="MainLegalTitle">Terms & Conditions</h1>
                <div className="legal-conditions-container">
                    <h4 className="legal-description">Welcome to Telvion Systems ("we", "our", "us"). By accessing or using hooskyservices.xyz, you agree to these terms of Service. If you do not agree, please do not use our website or services.</h4>
                    
                    <div className="term-item">
                        <h4 className="legal-title">1. USE OF WEBSITE</h4>
                        <h4 className="legal-description">You agree to use our site lawfully and not harm other users' experience.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">2. PRODUCTS AND SERVICES</h4>
                        <h4 className="legal-description">We offer digital products/services as described. Prices and availability may change without notice.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">3. ORDERS & PAYMENT</h4>
                        <h4 className="legal-description">By ordering, you agree to pay the stated amount via our secure payment methods.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">4. REFUNDS & CANCELLATIONS</h4>
                        <h4 className="legal-description">By completing a purchase, the customer confirms the payment and acknowledges that no refunds of any kind are permitted. All sales are final due to the digital nature of our products, without exception.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">5. INTELLECTUAL PROPERTY</h4>
                        <h4 className="legal-description">All content is owned by Telvion Systems and protected by law.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">6. USER ACCOUNTS</h4>
                        <h4 className="legal-description">Keep your login details secure. You are responsible for activity on your account.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">7. LIABILITY LIMITATION</h4>
                        <h4 className="legal-description">Telvion Systems is not liable for indirect or consequential damages from using our services.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">8. INDEMNIFICATION</h4>
                        <h4 className="legal-description">You agree to hold Telvion Systems harmless from any claims arising from your violation of these terms.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">9. PRIVACY</h4>
                        <h4 className="legal-description">Your privacy matters. See our Privacy Policy for details on data use.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">10. CHANGES TO TERMS</h4>
                        <h4 className="legal-description">We may update these terms. Updates will be posted here with a new effective date.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">11. GOVERNING LAW</h4>
                        <h4 className="legal-description">These terms are governed by the laws of [Your jurisdiction].</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">12. CONTACT</h4>
                        <h4 className="legal-description">Questions? Reach us at:</h4>
                        <h4 className="legal-description">Discord:</h4>
                    </div>
                    <hr></hr>
                    <div className="term-item-last">
                        <h4 className="legal-title">Thank you for trusting Telvion Systems!</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Terms;