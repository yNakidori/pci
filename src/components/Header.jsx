import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="./assets/images/flag-1@2x.png" alt="Flag" />
            </div>
            <nav className={styles.nav}>
                <div className={styles.navItem}>O QUE É?</div>
                <div className={styles.navItem}>ÍNDICES</div>
                <div className={styles.navItem}>INTEGRANTES</div>
            </nav>
        </header>
    );
};

export default Header;
