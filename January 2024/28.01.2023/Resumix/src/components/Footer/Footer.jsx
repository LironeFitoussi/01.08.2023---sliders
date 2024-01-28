import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Company</h3>
                        <ul className={styles.sectionLinks}>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#team">Our Team</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Products</h3>
                        <ul className={styles.sectionLinks}>
                            <li><a href="#wallet">Crypto Wallet</a></li>
                            <li><a href="#exchange">Crypto Exchange</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Connect</h3>
                        <ul className={styles.sectionLinks}>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/lirone-fitoussi-600959284/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/LironeFitoussi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerText}>
                    <p>© {currentYear} Cryptoc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
