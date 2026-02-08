import React from 'react';
import '../../styles/Legal.css';

interface TermsProps {
    setActiveTab: (tab: string) => void;
}

const Refund: React.FC<TermsProps> = ({setActiveTab}) => {
    return (
        <>
        <title>Refund Policy - Hoosky</title>
        <meta name="description" content="Refund Policy" />
        <div className="legal-page-wrapper">
            <div className="legal-page-container">
                <a className="homeNavigation" onClick={() => {setActiveTab('home')}}>Home <i className={'fa fa-chevron-right'}></i></a>
                <h1>Refund Policy</h1>
                <div className="legal-conditions-container">
                    <h4 className="legal-description">Welcome to Hoosky Services ("we," "our," "us"). By accessing or using hooskyservices.xyz, you agree to these terms of Service. If you do not agree, please do not use our website or services.</h4>
                    
                    <div className="term-item">
                        <h4 className="legal-title">1. Acceptance of Terms</h4>
                        <h4 className="legal-description">By accessing or using Hoosky Services ("hooskyservices.xyz") and its services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, you must not use our Services. By making any purchase, you explicitly acknowledge that you have read, understood, and accepted these Terms, including the No Refunds Policy and all limitations of liability.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">2. Purchase of Digital Products and Licenses</h4>
                        <div className="spacer"></div>
                        <h5 className="legal-title">2.1 Payment:</h5>
                        <h4 className="legal-description">You agree to pay the full price for any product from Hoosky Services. Payments are securely processed via PayPal, SellAuth, or cryptocurrencies. Hoosky Services does not store any financial infomration.</h4>
                        <div className="spacer"></div>
                        <h5 className="legal-title">2.2 Delivery:</h5>
                        <h4 className="legal-description">Products will be delivered via email or directly to your Hoosky Services account after payment confirmation. Ensure your contact information is accurate; Hoosky Services is not responsible for delivery failures caused by incorrect information.</h4>
                        <div className="spacer"></div>
                        <h5 className="legal-title">2.3 No Refunds:</h5>
                        <h4 className="legal-description">All sales are final. By completing a purchase, you acknowledge and agree that no refunds, returns, or exchanges will be issued under any circumstances, including buyer error, technical issues, or product defects.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">3. Use of Products</h4>
                        <div className="spacer"></div>
                        <h5 className="legal-title">3.1 Authorized Use:</h5>
                        <h4 className="legal-description">Purchased products are for personal use only and cannot be transferred or resold without explicit written permission from Hoosky Services.</h4>
                        <div className="spacer"></div>
                        <h5 className="legal-title">3.2 Prohibited Use:</h5>
                        <h4 className="legal-description">Unauthorized sharing, resale, or distribution of products is strictly prohibited and may result in account termination, legal action, and permanent banning from Hoosky Services services.</h4>
                        <h4 className="legal-description"></h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">4. Cancellation Policy</h4>
                        <h4 className="legal-description">Hoosky Services reserves the right to cancel any order at its sole discretion. If an order is canceled by Hoosky Services, a refund may be issued only at Hoosky Services discretion. This does not contradict the No Refunds Policy for completed and delivered purchases.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">5. Services Provided</h4>
                        <h4 className="legal-description">Idk what to put here yet</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">6. Limitation of Liability</h4>
                        <h4 className="legal-description">Hoosky Services shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our products or services. This includes, without limitation, loss of data, loss of access, or misuse of purchased products.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">7. Privacy Policy</h4>
                        <h4 className="legal-description">Your privacy is important. Please review our <a onClick={() => {setActiveTab('privacy'); setTimeout(() => {window.scrollTo({top: 0, behavior: 'instant'});}, 0);}}>Privacy Policy</a> to understand how Hoosky Services collects, uses, and protects your information.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">8. Changes to Terms</h4>
                        <h4 className="legal-description">Hoosky Services reserves rthe right to modify these Terms at any time without prior notice. Continued use of our Services after such changes constitutes acceptance of the updated Terms. It is your responsibility to review these Terms regularly.</h4>
                    </div>
                    <div className="term-item">
                        <h4 className="legal-title">9. Acknolwedgement</h4>
                        <h4 className="legal-description">By making a purchase, you explicitly agree to all of the Terms outlined above, including the No Refunds Policy. You understand that all sales are final, and you waive any right to dispute or request reimbursement for purchased products.</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Refund;