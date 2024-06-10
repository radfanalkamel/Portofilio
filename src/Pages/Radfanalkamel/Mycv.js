import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Mycv.module.scss';
import myphoto from '/Users/arkanaljwar/my-portfolio-main/src/Pages/img/_DSC8478.JPG';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaLanguage, FaFlag, FaHistory, FaBirthdayCake, FaWeibo, FaSearchLocation, FaInfo, FaGithub, FaVoicemail, FaMailBulk, FaAmilia, FaGoogle } from 'react-icons/fa';
import SoftSkills from '../../Components/SoftSkills/Softkills';

const Mycv = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الانميشن بالمللي ثانية
      once: false // جعل الانميشن يحدث مرة واحدة فقط
    });
  }, []);
  // Define your theme object
  const theme = {
    primary: 'yourPrimaryColor',
    secandrycolor: 'yourSecondaryColor',
    light: 'yourLightColor',
    borderRadius: 10,
  };

  return (
    <>
      <h4>
        يمكنني إنشاء حلول متكاملة وسلسة.
        <br>
        </br>
        <h5>
          المعلومات الشخصية :
        </h5>
      </h4>
      <div className={styles['about-me']} data-aos="fade-right">
        <div className={styles['about-me__content']} data-aos="fade-up" >
          <div className={styles['about-me__image']} data-aos="fade-right" >
            <div className={styles['about-me__overlay']} data-aos="fade-up" >
              <p>خبره 5 سنوات </p>
            </div>
            <img /*src={myphoto}*/ alt="اسمك" />
          </div>
          <div className={styles['about-me__details']} data-aos="fade-up">
            <h1>ردفان صادق عبدالله الكامل</h1>
            <p>
              أهلاً! أنا خريج بكالوريوس في تقنية المعلومات، ولدي شغف كبير لتعلم كل ما هو جديد في مجال التكنولوجيا. أسعى دائمًا إلى تطوير مهاراتي ومعرفتي من خلال الخبرات العملية والمشاريع المختلفة. أعتقد أن التعلم المستمر هو مفتاح النجاح في هذا المجال سريع التطور.
            </p>
            <div className={styles['contact-info']} data-aos="fade-up">
              <p><span className={styles['icon']}><FaPhoneAlt /></span> <strong>جوال :</strong>0535204899</p>
              <p><span className={styles['icon']}><FaWhatsapp /></span> <strong>واتساب :</strong> 0535204899</p>
              <p><span className={styles['icon']}><FaFlag /></span> <strong>الجنسية :</strong> يمني</p>
              <p><span className={styles['icon']}><FaEnvelope /></span> <strong> العنوان :</strong> المملكة العربية السعودية - مكة المكرمة</p>
              <p><span className={styles['icon']}><FaLanguage /></span> <strong> اللغات :</strong> العربية ، الإنجليزية ( متوسط )</p>
              <p><span className={styles['icon']}><FaBirthdayCake /></span> <strong>الميلاد :</strong> 1999 </p>
              <p><span className={styles['icon']}><FaInfo /></span> <strong> الموقع :</strong> radfank.dev </p>
              <p><span className={styles['icon']}><FaGithub /></span> <strong> </strong> radfanalkamel </p>
            </div>
          </div>
        </div>

      </div>
      <div className={styles['timeline']} data-aos="fade-up">
        <h2>الخبرات العلمية</h2>
        <ul>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2018 - 2022</div>
            <div className={styles['timeline-description']}>
              <h3>بكالوريوس تقنية المعلومات</h3>
              <p>
                جامعة العلوم والتكنولوجيا
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles['timeline']} data-aos="fade-up">
        <h2>الخبرات العملية</h2>
        <ul>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2016 - 2018</div>
            <div className={styles['timeline-description']}>
              <h3> مصمم غرافيك | وكالة فن القلم للدعاية والإعلان </h3>
              <p>
                العمل على جميع برامج أدوبي | فوتوشوب ، اليستريتور ، ادوبي انديزاين ...إلخ.
                <br></br>
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2019 - 2023</div>
            <div className={styles['timeline-description']}>
              <h3>
                مطور ومصمم ويب | شركة سوفت اندكس
              </h3>
              <p>
                تطوير مواقع الكترونية - تصميم واجهات المستخدم - تصميم اعلانات - تسويق إلكتروني.
                <br></br>
                Php, Laravel, Reactjs, Html, Scss, Javascript ,

              </p>
            </div>
          </li>

          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023 - إلى الآن</div>
            <div className={styles['timeline-description']}>
              <h3>مصصم ويب | شركة جوار للاستثمار</h3>
              <p>
                wordpress, Html, Scss, Php, Javascript، أتمتة العمليات الإلكترونية
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023 - إلى الآن</div>
            <div className={styles['timeline-description']}>
              <h3>مصصم غرافيك | مؤسسة بيك وان للمقاولات العامة</h3>
              <p>
                تصاميم إعلانية - تسويق إلكتروني - تقارير.
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023 - إلى الآن</div>
            <div className={styles['timeline-description']}>
              <h3>تسويق إلكتروني | مؤسسة ألتا للخدمات العقارية</h3>
              <p>
                الخطط التسويقية - تصاميم الهويات الإعلانية
                تصاميم الشعارات - إدارة حسابات مواقع التواصل الإجتماعي
                <br>
                </br>
                إدارة الحملات الإعلانية
                تقارير الحملات الإعلانية - خدمة عملاء
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024 - إلى الآن</div>
            <div className={styles['timeline-description']}>
              <h3>مدير مشروع | شركة ذرى الرقمية لتقنية المعلومات</h3>
              <p>
                إدارة مشروع تقني ( تطبيق موبايل - تطبيق ويب )
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2022 - إلى الآن</div>
            <div className={styles['timeline-description']}>
              <h3>عمل حر</h3>
              <p>
                تقديم حلول تقنية للشركات والمؤسسات الناشئة.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles['timeline']} data-aos="fade-up">
        <h2>الدورات التدريبية</h2>
        <ul>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2019</div>
            <div className={styles['timeline-description']}>
              <h3> تطوير المواقع | جامعة العلوم والتكنولوجيا </h3>
              <p>
                دورة اساسيات PHP,Laravel
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> أردوينو | جامعة العلوم والتكنولوجيا </h3>
              <p>
                التعرف على مكونات الأردوينو وطريقة عملها.
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> Reactjs | جامعة العلوم والتكنولوجيا </h3>
              <p>
                دورة متقدمة
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> Java | جامعة العلوم والتكنولوجيا </h3>
              <p>
                دورة متقدمة
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> Laravel | جامعة العلوم والتكنولوجيا </h3>
              <p>
                اساسيات + API
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> Dart 1+2+3 | منصة سطر التعليمية </h3>
              <p>
                اساسيات لغة Dart
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> Html | منصة سطر التعليمية </h3>
              <p>
                اساسيات لغة Html
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> Flutter 101 | منصة سطر التعليمية </h3>
              <p>
                اساسيات Flutter
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> Git | منصة سطر التعليمية </h3>
              <p>
                التعامل مع Git
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> React 101 | منصة سطر التعليمية </h3>
              <p>
                اساسيات ReactJs
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> مسار تطوير تطبيقات Flutter | منصة سطر التعليمية </h3>
              <p>
                طريقة بناء التطبيقات باستخدام Flutter
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> كورسات أخرى متنوعة |  يوتيوب  </h3>
              <p>
                php, javascript, scss, Laravel, ReactJs, html, python, java
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles['timeline']}>
        <h2>الإنجازات والمشاريع</h2>
        <ul>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2020</div>
            <div className={styles['timeline-description']}>
              <h3> تطبيق عيادة النفسية </h3>
              <p>
                يتكون التطبيق من عدة تطبيقات :
                <br></br>
                - تطبيق إدارة المرضى
                <br></br>
                - تطبيق مختبرات الدم
                <br></br>
                - تطبيق المختبر النفسي
                <br></br>
                - تطبيق صيدلية
                <br></br>
                - تطبيق الدكتور
                <br></br>
                اللغات المستخدمة : html, css, javascript, php,
                <br></br>
                قواعد البيانات : Mysql
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> موقع البيرق للساعات </h3>
              <p>
                موقع الكتروني يقدم منتجات رجالية مثل الساعات والإكسسوارات
                <br></br>
                اللغات المستخدمة : html, css, javascript, php,
                <br></br>
                قواعد البيانات : Mysql
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> تطوير نظام صيدلية </h3>
              <p>
                اضافة الاصناف والتعديل والحذف عليها + تنبيهات انتهاء المنتجات
                <br></br>
                اللغات المستخدمة : html, css, javascript, php,Laravel
                <br></br>
                قواعد البيانات : Mysql
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2021</div>
            <div className={styles['timeline-description']}>
              <h3> تطوير سلسلة مواقع عرب داون </h3>
              <p>
                تحسينات واجهات الموقع + تطوير BackEnd
                <br></br>
                اللغات المستخدمة : html, css, javascript, php, Laravel
                <br></br>
                قواعد البيانات : Mysql
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023</div>
            <div className={styles['timeline-description']}>
              <h3> تصميم موقع تعريفي لشركة استثمار </h3>
              <p>
                موقع تعريفي متكامل + أتمتة عملية تسجيل المستخدمين
                <br></br>
                اللغات المستخدمة : html, css, javascript, wordpress, Zapiar , Sheet
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023</div>
            <div className={styles['timeline-description']}>
              <h3> موقع مؤسسة عقارية </h3>
              <p>
                موقع تعريفي + إدارة عقارات + مدونة
                <br></br>
                اللغات المستخدمة : html, css, javascript, wordpress
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023</div>
            <div className={styles['timeline-description']}>
              <h3> تصميم نموذج بطاقات أسعار </h3>
              <p>
                بطاقات أسعار ( باقات )
                <br></br>
                اللغات المستخدمة : html, css, javascript
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023</div>
            <div className={styles['timeline-description']}>
              <h3> آلة حاسبة </h3>
              <p>
                آلة حاسبة مبسطة
                <br></br>
                اللغات المستخدمة : html, css, Javascript,
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2023</div>
            <div className={styles['timeline-description']}>
              <h3> متجر ترفية | اشتراكات وخدمات إلكترونية </h3>
              <p>
                متجر لعرض المنتجات
                <br></br>
                اللغات المستخدمة : Salla
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> موقع مؤسسة عقارية </h3>
              <p>
                موقع تعريفي + لوحة تحكم للتحكم بالعقارات والمدونة والإعلانات على الموقع
                <br></br>
                اللغات المستخدمة : html, css, javascript, php
                <br></br>
                قواعد البيانات : Mysql
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> متجر إلكتروني | عود وبخور </h3>
              <p>
                متجر لعرض المنتجات
                <br></br>
                اللغات المستخدمة : Salla
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className={styles['timeline-date']}>2024</div>
            <div className={styles['timeline-description']}>
              <h3> متجر لذعة | بهارات </h3>
              <p>
                متجر لعرض المنتجات
                <br></br>
                اللغات المستخدمة : Salla
                <br></br>
                رابط المشروع : www.radfanalkamel.com
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles['timeline']} data-aos="fade-up">
        <h2>المهارات</h2>
      </div>
      <SoftSkills />

      <div className={styles['timeline']} data-aos="fade-up">
        <h2>المراجع</h2>
      </div>
      <div className={styles['about-ref']} data-aos="fade-right">
        <div className={styles['about-ref__content']} data-aos="fade-up" >
          <div className={styles['about-ref__image']} data-aos="fade-right" >
            <img /*src={myphoto}*/ alt="اسمك" />
          </div>
          <div className={styles['about-ref__details']} data-aos="fade-up">
            <h1>عبدالرحمن مجيب الرحمن الوريفي</h1>
            <p>
              المدير التنفيذي لشركة سوفت اندكس
            </p>
            <div className={styles['contact-ref']} data-aos="fade-up">
              <p><span className={styles['icon']}><FaPhoneAlt /></span> <strong>جوال :</strong>0535204899</p>
              <p><span className={styles['icon']}><FaGoogle /></span> <strong>ايميل :</strong> alwrifisoft@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['about-ref']} data-aos="fade-right">
        <div className={styles['about-ref__content']} data-aos="fade-up" >
          <div className={styles['about-ref__image']} data-aos="fade-right" >
            <img /*src={myphoto} */ alt="اسمك" />
          </div>
          <div className={styles['about-ref__details']} data-aos="fade-up">
            <h1>عاصم عبدالسلام الكامل</h1>
            <p>
              الرئيس التنفيذي لسلسلة مواقع عرب داون
            </p>
            <div className={styles['contact-ref']} data-aos="fade-up">
              <p><span className={styles['icon']}><FaPhoneAlt /></span> <strong>جوال :</strong>0535204899</p>
              <p><span className={styles['icon']}><FaGoogle /></span> <strong>ايميل :</strong> assem2019@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['about-ref']} data-aos="fade-right">
        <div className={styles['about-ref__content']} data-aos="fade-up" >
          <div className={styles['about-ref__image']} data-aos="fade-right" >
            <img alt="اسمك" />
          </div>
          <div className={styles['about-ref__details']} data-aos="fade-up">
            <h1>أحمد عبدالحكيم النظاري</h1>
            <p>
              المدير التنفيذي لعيادات الصحة النفسية
            </p>
            <div className={styles['contact-ref']} data-aos="fade-up">
              <p><span className={styles['icon']}><FaPhoneAlt /></span> <strong>جوال :</strong>0535204899</p>
              <p><span className={styles['icon']}><FaGoogle /></span> <strong>ايميل :</strong> ahmedhakeem1001@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Mycv;
