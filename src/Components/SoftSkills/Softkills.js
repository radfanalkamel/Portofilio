// SoftSkills.js

import React from 'react';
import styles from './SoftSkills.module.scss'; // Importing SCSS styles

const SoftSkills = () => {
    return (
        <>
            {/* First skill block */}
            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>حل المشكلات</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '100%' }} data-aos="fade-up">
                           <p>
                           100%
                            </p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>إدارة المشاريع</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '95%' }} data-aos="fade-up">
                        <p>
                           95%
                            </p> 
                        </div>
                    </div>
                </div>
            </div>

            {/* Second skill block */}
            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>التصميم</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '95%' }} data-aos="fade-up">
                        <p>
                           95%
                        </p> 
                        </div>
                    </div>
                </div>
            </div>

            {/* Second skill block */}
            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>الاهتمام بالتفاصيل</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '100%' }} data-aos="fade-up">
                        <p>
                           100%
                        </p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>مهارات التواصل</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '90%' }} data-aos="fade-up">
                        <p>
                            90%
                        </p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>المرونة</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '100%' }} data-aos="fade-up">
                        <p>
                           100%
                        </p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>حس المسؤولية</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '100%' }} data-aos="fade-up">
                        <p>
                           100%
                        </p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['Softskills']} data-aos="fade-right">
                <div className={styles['Softskills-description']} data-aos="fade-up">
                    <h2>المهارات الإبداعية</h2>
                    <div className={styles['progress']} data-aos="fade-right">
                        <div className={styles['progress-bar']} style={{ width: '90%' }} data-aos="fade-up">
                        <p>
                           90%
                        </p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoftSkills;
