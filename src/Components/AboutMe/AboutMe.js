import React, { useState, useEffect } from 'react';
import yemenFlag from '/Users/arkanaljwar/my-portfolio-main/src/Pages/img/rt45.png'; // تأكد من المسار الصحيح للصورة
import classes from "./AboutMe.module.scss";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Typewriter from '../../Components/Typewriter/Typewriter';
import SocialMediaContact from '../../Components/SocialMediaContact/SocialMediaContact'
import itsme from '/Users/arkanaljwar/my-portfolio-main/src/Pages/img/_DSC8478.png'; // تأكد من المسار الصحيح للصورة

const YemenFlag = () => (
    <img src={yemenFlag} alt="Yemen Flag" style={{ width: '20px', height: 'auto', marginLeft: '5px', marginTop: '10px' }} />
);

const Itsme = () => (
    <img src={itsme} alt="Yemen Flag" style={{ width: '100px', height: 'auto', marginLeft: '10px', marginTop: '10px' }} />
);


const ClickHandler = () => {
    window.location.href = "https://stackoverflow.com/users/25377286/radfan?tab=profile";
};

const MessageMe = () => {
    window.location.href = "https://wa.me/message/Z2FYQ6CEFTT4N1";
};

const AboutMe = () => {
    const [text, setText] = useState('مصمم'); // النص الحالي
    const [index, setIndex] = useState(0); // مؤشر لتتبع الكلمات
    const words = ['مطــــــور', 'مصمم']; // الكلمات التي سيتم تبديلها
    const delay = 2000; // تأخير بين تغيير الكلمات بالميلي ثانية (2 ثانية)

    useEffect(() => {
        const timer = setTimeout(() => {
            setText(words[index]); // تعيين النص إلى الكلمة الحالية
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length); // التبديل إلى الكلمة التالية
            }, delay);
        }, delay);

        return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء المكون
    }, [index]); // تتبع التغييرات في الفهرس

    
    return (
        <div className={classes.me}>
            <div className={classes.content}>
                <div className={classes.text}>
                   
                    <p> <span className={classes.liveDot}> </span> &nbsp;&nbsp;متوفر </p>
                    <br></br>
                    <hr>
                    </hr>
                    <h1>
                        أهلاً بك 👋
                        <br />
                        <b className={classes.bold}>أنا ردفان الكامل.</b>
                        <br />
                        <span className={classes.typing}>{text} ويب ..</span>
                    </h1>

                    <p style={{ color: 'gray' }}>
                        خريج بكالوريوس في تقنية المعلومات، ولدي شغف كبير لتعلم كل ما هو جديد في مجال التكنولوجيا.
                    </p>
                    <p>
                        <YemenFlag /> |  اليمن
                    </p>
                    <div className={classes.buttons}>
                        <button onClick={MessageMe} className={classes.message}>راسلني</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={MessageMe} className={classes.consultation}> استشارة مجانية </button>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://drive.google.com/file/d/1NHxoUyeKcIMBgq5ULvJlP3TJJTRC8z3x/view" target={"_blank"} rel="noopener noreferrer">
                            <button className={classes.cv} >السيرة الذاتية</button>
                        </a>
                        <SocialMediaContact />  
                    </div>
                </div>
            </div>            

        </div>
    );
};

export default AboutMe;
