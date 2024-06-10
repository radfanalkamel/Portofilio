import React from 'react';
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiPhone } from 'react-icons/ti';
import classes from './AddButton.module.scss';

const AddButton = () => {
    return (
        <div className={classes.add}>
            <a href="https://twitter.com/radfanalkamel" target="_blank" rel="noopener noreferrer">
                <TiSocialTwitterCircular />
            </a>
            <a href="https://www.linkedin.com/in/radfan-alkamel-682662247/" target="_blank" rel="noopener noreferrer">
                <TiSocialLinkedinCircular />
            </a>
            <a href="tel:+966-53-520-4899" target="_blank" rel="noopener noreferrer">
                <TiPhone />
            </a>
            <a href="https://stackoverflow.com/users/25377286/radfan?tab=profile" target="_blank" rel="noopener noreferrer">
                <TiPhone />
            </a>
        </div>
    );
};

export default AddButton;
