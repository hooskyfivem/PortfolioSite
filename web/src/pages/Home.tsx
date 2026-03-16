// import React from 'react';
// import { useState } from 'react'
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
        <title>Home - Telvion Systems</title>
        <meta name="description" content="Home" />
        <div className={styles.PageContainer}>
            <div className={styles.IntroductionContainer}>
                <h3 className={styles.Title}> SOFTWARE & HOSTING SOLUTIONS </h3>
                <div className={styles.TaglineContainer}>
                    <h1 className={styles.TaglineTitle}>Systems that work.</h1>
                    <h1 className={styles.TaglineUndertitle}>Solutions that scale.</h1>
                </div>
                <h3 className={styles.PurposeText}>Premium apps, tools, and engineering solutions built for reliability</h3>
                {/* <div className={styles.IntroductionBadgesContainer}>
                    <span className={styles.IntroductionBadge}>React</span>
                    <span className={styles.IntroductionBadge}>Node.js</span>
                    <span className={styles.IntroductionBadge}>TypeScript</span>
                    <span className={styles.IntroductionBadge}>APIs</span>
                </div> */}
                <div className={styles.IntroductionDirectoryButtons}>
                    <span className={styles.DirectoryButton}>View Products</span>
                    <span className={styles.DirectoryButton}>Learn More <i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
            <div className={styles.ServicesContainer}>
                <h1>What We Offer</h1>
                <div className={styles.ServicesContainerGroup}>
                    <div className={styles.Service} onClick={() => {document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}}>
                        <div className={styles.ServicesLogo}><i className="fas fa-columns"></i></div>
                        <p className={styles.ServiceName}>Web Apps</p>
                        <p className={styles.ServiceDescription}>Custom web applications built for performance and scale</p>
                        <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span>
                    </div>
                    <div className={styles.Service} onClick={() => {document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}}>
                        <div className={styles.ServicesLogo}><i className="fas fa-cloud"></i></div>
                        <p className={styles.ServiceName}>Cloud Hosting</p>
                        <p className={styles.ServiceDescription}>Reliable, fast hosting with 99.9% uptime guarantee.</p>
                        <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span>
                    </div>
                    <div className={styles.Service} onClick={() => {document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}}>
                        <div className={styles.ServicesLogo}><i className="fas fa-layer-group"></i></div>
                        <p className={styles.ServiceName}>Automation</p>
                        <p className={styles.ServiceDescription}>Automate repetitive tasks, workflows, and processed with custom built, and reliable solutions.</p>
                        <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span>
                    </div>
                    <div className={styles.Service} onClick={() => {document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}}>
                        <div className={styles.ServicesLogo}><i className="fas fa-code"></i></div>
                        <p className={styles.ServiceName}>Custom Software</p>
                        <p className={styles.ServiceDescription}>Tailored software solutions to fit all of your business needs.</p>
                        <span className={styles.ServicesLearnMore}>Learn More <i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;