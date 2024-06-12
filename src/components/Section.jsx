import React from 'react';
import styles from '../styles/Section.module.css';
import Image1 from '../assets/images/image-1@2x.png';
import Image2 from '../assets/images/image-2@2x.png';
import Image3 from '../assets/images/image-3@2x.png';

const Section = ({ title, description, imageSrc, backgroundColor }) => {
    let image;
    if (imageSrc === 'image1') image = Image1;
    else if (imageSrc === 'image2') image = Image2;
    else if (imageSrc === 'image3') image = Image3;

    return (
        <section className={styles.section} style={{ backgroundColor }}>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            {image && (
                <div className={styles.image}>
                    <img src={image} alt={title} />
                </div>
            )}
        </section>
    );
};

export default Section;
