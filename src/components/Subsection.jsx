import React from 'react';
import styles from '../styles/Subsection.module.css';
import Image4 from '../assets/images/ettyfideleazvexphvukyunsplash-1@2x.png';
import Image5 from '../assets/images/jockewulcan0q7ylkgshpaunsplash-1@2x.png';
import Image6 from '../assets/images/image-3@2x.png';

const Subsection = ({ title, description, imageSrc, backgroundColor }) => {
    let image;
    if (imageSrc === 'image4') image = Image4;
    else if (imageSrc === 'image5') image = Image5;
    else if (imageSrc === 'image6') image = Image6;

    return (
        <section className={styles.subsection} style={{ backgroundColor }}>
            <div className={styles.text}>
                <h4>{title}</h4>
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

export default Subsection;
