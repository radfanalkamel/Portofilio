import React from 'react';
import imagereactjs from '../img/reactjs.png';
import imagehtml from '../img/html.png';
import imagejavascript from '../img/javascript.png';
import imagescss from '../img/scss.png';
import imagephp from '../img/php.png';
import imageflutter from '../img/flutter.png';

import classes from "./Skills.module.scss";

const WebDevelopment = () => {
    window.location.href = "https://wa.me/message/Z2FYQ6CEFTT4N1";
};
const CloudDeployment = () => {
    window.location.href = "https://wa.me/message/Z2FYQ6CEFTT4N1";
};
const CreativeDesign = () => {
    window.location.href = "https://wa.me/message/Z2FYQ6CEFTT4N1";
};

const Imagereactjs = () => (
    <img src={imagereactjs} alt="React Js" />
);

const Imagehtml = () => (
    <img src={imagehtml} alt="HTML" />
);
const Imagejavascript = () => (
    <img src={imagejavascript} alt="Javascript" />
);
const Imagescss = () => (
    <img src={imagescss} alt="SCSS" />
);
const Imagephp = () => (
    <img src={imagephp} alt="PHP" />
);
const Imageflutter = () => (
    <img src={imageflutter} alt="Flutter" />
);

const Skills = () => {
    return (
        <div className={classes.me}>
            <div className={classes.containerskills}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <h1>
                            مهاراتي التقنية
                            <b className={classes.bold}></b>
                            <span></span>
                        </h1>
                        <p>
                            لدي مهارات تقنية في مجالات مثل تطوير البرمجيات وتصميم الويب والتصميم الجرافيكي. سأستخدم هذه المهارات لتصميم حلول برمجية مبتكرة وتقديم الدعم الفني اللازم لضمان سلامة واستمرارية العمليات الفنية.
                            <br>
                            </br>
                        </p>
                        <br></br>
                        <div className={classes.buttonsContainer}>
                            <button onClick={WebDevelopment} className={classes.WebDevelopment}>
                                <div className={classes.overlay}>
                                    <persen className={classes.persen}>85%</persen>
                                </div>
                                <div className={classes.imagereactjs}>
                                    <Imagescss />
                                </div>
                                SCSS
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={CloudDeployment} className={classes.WebDevelopment}>
                                <div className={classes.overlay}>
                                    <persen className={classes.persen}>95%</persen>
                                </div>
                                <div className={classes.imagereactjs}>
                                    <Imagehtml />
                                </div>
                                Html
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={CreativeDesign} className={classes.WebDevelopment}>
                                <div className={classes.overlay}>
                                    <persen className={classes.persen}>70%</persen>
                                </div>
                                <div className={classes.imagereactjs}>
                                    <Imagejavascript />
                                </div>
                                JavaScript
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={CreativeDesign} className={classes.WebDevelopment}>
                                <div className={classes.overlay}>
                                    <persen className={classes.persen}>70%</persen>
                                </div>
                                <div className={classes.imagereactjs}>
                                    <Imagereactjs />
                                </div>
                                React JS
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={CreativeDesign} className={classes.WebDevelopment}>
                                <div className={classes.overlay}>
                                    <persen className={classes.persen}>80%</persen>
                                </div>
                                <div className={classes.imagereactjs}>
                                    <Imagephp />
                                </div>
                                PHP
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={CreativeDesign} className={classes.WebDevelopment}>
                                <div className={classes.overlay}>
                                    <persen className={classes.persen}>65%</persen>
                                </div>
                                <div className={classes.imagereactjs}>
                                    <Imageflutter />
                                </div>
                                Flutter
                            </button>
                            &nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
