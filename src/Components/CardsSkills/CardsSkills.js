import React from 'react';
import classes from './CardsSkills.module.scss'; // تأكد من تحميل ملف الـ SCSS هنا

// استيراد الصورة
import cardImage from "../../Pages/img/Earth.jpg";

const CardsSkills = () => {
  return (
    <>
      <div className="infinite-bar"></div>

      <div className={classes.h1}>
        <h1>
          أعمالي
          
          </h1>
      </div>
      <div className={classes.cardsContainer}>
        {/* بطاقة أولى */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع أجير</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>

        {/* بطاقة ثانية */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع البيرق</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>

        {/* بطاقة ثالثة - تظهر فقط على الشاشات الكبيرة */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع فايلت</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>
      </div>
      <div className={classes.cardsContainer}>
        {/* بطاقة أولى */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع أجير</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>

        {/* بطاقة ثانية */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع البيرق</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>

        {/* بطاقة ثالثة - تظهر فقط على الشاشات الكبيرة */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع فايلت</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>
      </div>
      <div className={classes.cardsContainer}>
        {/* بطاقة أولى */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع أجير</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>

        {/* بطاقة ثانية */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع البيرق</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>

        {/* بطاقة ثالثة - تظهر فقط على الشاشات الكبيرة */}
        <div className={classes.card}>
          <div className={classes.cardimage}>
          <div className={classes.overlay}>
              <p>100٪</p>
            </div>
            <img src={cardImage} alt="Card Image" />
          </div>
          <div className={classes.cardcontent}>
            <h3>مشروع فايلت</h3>
            <p>وصف البطاقة يمكن أن يحتوي على نص هنا.</p>
            <button>اعرف أكثر</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsSkills;
