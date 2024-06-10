import React, { useEffect, useRef, useState } from 'react';
import styles from './ResumeExperienceEducation.module.scss';
import { Icon } from '@mui/material';

const ResumeExperienceEducation = () => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                if (progressBarRef.current) {
                    progressBarRef.current.style.width = width + '%';
                }
            }
        }, 30); // تغيير السرعة كما تريد
        return () => clearInterval(interval);
    }, []);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                setProgress(width);
                if (progressBarRef.current) {
                    progressBarRef.current.style.width = width + '%';
                }
            }
        }, 100); // تغيير السرعة كما تريد
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={styles.gridContainer}>
            <div className={`${styles.gridItem} ${styles.fullWidth}`}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>

            <div className={styles.Box}>

                <icon className={styles.Box_icon} >
                </icon>
                <p className={styles.Box_title}>
                    <div ref={progressBarRef} className={styles.progressBar}>


                    </div>
                    <div className={styles.progressText}>{progress}%</div>
                    Information Technology
                    <div className={styles.progressContainer}>
                        <div ref={progressBarRef} className={styles.progressBar}></div>
                    </div>
                </p>
            </div>
            <div className={styles.Box}>
                <p className={styles.Box_head}>
                    SoftIndex </p>
            </div>
        </div>
    );
};

export default ResumeExperienceEducation;
