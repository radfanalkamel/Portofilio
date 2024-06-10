import React from "react";
import classes from './SocialMediaContact.module.scss';
import {
    TiSocialLinkedinCircular,
    TiSocialTwitterCircular,
    TiPhone,
} from "react-icons/ti";
import { AiFillTwitterSquare, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGmail, BiLogoGoogle, BiLogoInstagram, BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";

const SocialMediaContact = () => {
    return (
        <div className={classes.me}>
             <p>
                  استقبل استفساراتكم عبر القنوات التالية : 
                </p>
            <ul>
                <li>
                    <a href="https://twitter.com/radfanalkamel" target="_blank" rel="noopener noreferrer">
                        <BiLogoWhatsapp size={40} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/radfanalkamel" target="_blank" rel="noopener noreferrer">
                        <BiLogoGmail size={40} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/radfanalkamel" target="_blank" rel="noopener noreferrer">
                        <BiLogoTwitter size={40} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/radfanalkamel" target="_blank" rel="noopener noreferrer">
                        <BiLogoInstagram size={40} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/radfan-alkamel-682662247/" target="_blank" rel="noopener noreferrer">
                        <TiSocialLinkedinCircular size={40} />
                    </a>
                </li>
                <li>
                    <a href="tel:+966-53-520-4899" target="_blank" rel="noopener noreferrer">
                        <TiPhone size={40} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialMediaContact;
