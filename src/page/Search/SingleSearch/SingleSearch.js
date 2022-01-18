import { React, useState } from 'react'
import back from '../../../assets/img/back.jpg'
import middle from '../../../assets/img/middle.png'
import middle1 from '../../../assets/img/middle1.png'
import Banner from '../../../assets/img/Banner.png'
import kooh1 from '../../../assets/img/kooh1.png'
import kooh2 from '../../../assets/img/kooh2.png'
import kooh3 from '../../../assets/img/kooh3.png'
import kooh4 from '../../../assets/img/kooh4.png'
import basket from '../../../assets/img/basket.png'
import basket2 from '../../../assets/img/basket2.png'
import travel1 from '../../../assets/img/travel1.png'
import travel2 from '../../../assets/img/travel2.png'
import travel3 from '../../../assets/img/travel3.png'
import travel4 from '../../../assets/img/travel4.png'
import gilan1 from '../../../assets/img/gilan1.png'
import gilan2 from '../../../assets/img/gilan2.png'
import gilan3 from '../../../assets/img/gilan3.png'
import InfoSLider from './InfoSlider'
import MiddleSlider from './MiddleSlider'
import { FiMap } from 'react-icons/fi'
import { GiVillage, GiIndianPalace, GiSchoolBag } from 'react-icons/gi'
import { BiRestaurant } from 'react-icons/bi'
import { FaShoppingBasket } from 'react-icons/fa'
import { BsStopwatch, BsCircleFill } from 'react-icons/bs'

const Search = () => {
  return (
    <div>
      <img
        alt='bgImage'
        src={back}
        className='single-backImg'
        style={{ width: '100%', height: '600px' }}
      />
      <InfoSLider />
      <div className='container mt-4'>
        <MiddleSlider className='mt-3' />
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <h4 style={{ fontWeight: 'bolder' }}>
            کامل‌ترین معرفی کوه دماوند، بلندقامت‌ترین کوه ایران | هر آنچه از قله
            دماوند باید بدانید
          </h4>
          <p
            className='mt-5'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            با یکی دیگر از مقالات حوزه گردشگری ایران در خدمت شما همراهان همیشگی
            ایران پدیا هستیم. در این مقاله که به درخواست کاربران محترم وب سایت
            توسط گروه تولید محتوا ایران پدیا تهیه گردیده است، نگاهی کامل و جامع
            به بلندترین کوه ایران، کوه دماوند خواهیم داشت. با شما به بررسی و
            معرفی بخش‌های مختلف قله دماوند نماد استوار و سربلندی ایران زمین
            خواهیم نشست و از تماشای این دلبر بلندقامت طبیعتِ ایران لذت می‌بریم.
          </p>
          <p style={{ direction: 'rtl', textAlign: 'justify' }}>
            پس با ما در مقاله معرفی کامل بلندترین کوه ایران و به همراه تصاویر
            کوه دماوند همراه باشید تا با یکی از زیباترین کوهستان ها در میان
            جاذبه‌های گردشگری ایران بیشتر آشنا شوید
          </p>
        </div>
        <div className='mt-5'>
          <img
            alt='middleImg'
            src={middle}
            style={{ width: '100%', borderRadius: '15px' }}
          />
        </div>
        <div className='mt-5'>
          <h4
            className='mt-2'
            style={{
              direction: 'rtl',
              textAlign: 'justify',
              fontWeight: 'bolder',
            }}
          >
            معرفی کوه دماوند
          </h4>
          <p
            className='mt-5'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            سرزمین پهناور ایران دارای کوه‌ها و قله‌های بسیاری متعددی است که در
            جای‌جای این سرزمین سر به فلک کشیده‌اند. در میان تمامی کوه‌های
            ایران‌زمین، قله دماوند که در فرهنگ کشورمان مظهر پایداری و استواری
            است جایگاه ویژه‌ای را دارد.
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            کوه دماوند که به عنوان بلندترین کوه ایران و خاورمیانه و همچنین
            بلندترین قلهٔ آتش‌فشانی آسیا شناخته‌شده است در شمال ایران قرار دارد.
            در مورد دلیل نام‌گذاری دماوند در فرهنگ معین این‌چنین آمده است:
          </p>
          <h4
            className='mt-5'
            style={{
              direction: 'rtl',
              textAlign: 'justify',
              fontWeight: 'bolder',
            }}
          >
            قله دماوند کجاست ؟
          </h4>
          <p
            className='mt-5'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            کوه دماوند در بخش مرکزی رشته‌کوه البرز و در جنوب دریای خزر و در بخش
            لاریجان شهرستان آمل قرار دارد. کوه دماوند سربلند هم‌اکنون از نظر
            تقسیمات فعلی استانی ایران در استان مازندران قرار دارد و از شهرهای
            تهران، ورامین، قم و کرانه‌های دریای خزر قابل‌دیدن است به شرطی که
            آسمان صاف و آفتابی باشد.
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            کوه دماوند باهمت علاقه‌مندان خود توانست در خردادماه ۱۳۸۱ هجری شمسی
            طی مصوبه شماره ۲۲۱ مورخ ۸۱/۳/۲۱ شورای عالی محیط‌زیست به عنوان اولین
            اثر طبیعی ایران در فهرست آثار ملّی کشور ثبت شود و در شمار مناطق
            چهارگانه ارزشمند از نظر حفاظت محیط‌زیست قرار گیرد.
          </p>
        </div>
        <div className='mt-5'>
          <img
            alt='middleImg'
            src={middle1}
            style={{ width: '100%', borderRadius: '15px' }}
          />
        </div>
        <div className='mt-5'>
          <h4
            className='mt-2'
            style={{
              direction: 'rtl',
              textAlign: 'justify',
              fontWeight: 'bolder',
            }}
          >
            کوه دماوند از نگاه تاریخ
          </h4>
          <p
            className='mt-5'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            ۷۴۴ سال قبل از میلاد مسیح و در دوران آشوریان از کوه دماوند با نام
            بیکنی در متون مختلف یادشده است و از آن زمان به بعد کوه اسطوره‌ای
            دماوند برای مردم ایران‌زمین همواره مقدس و موردتوجه بوده است. در کتاب
            مقدس اوستا، تورات و بسیاری دیگر از کتب تاریخی از کوه دماوند به
            نام‌های مختلف یادشده است
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            ویلیامز جکسن که یکی از مورخین آمریکایی در قرن نوزدهم میلادی است، در
            خاطرات سفر خود به تهران این‌چنین می‌نویسد
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            دماوند در اوستا «هوابرزئیتی» نامیده می‌شود و قریب ۶۰۰۰ متر از زمین
            سر برافراشته است. بسیاری از جهانگردان و افراد سرشناس مقیم ایران که
            از زمان قاجار به بعد وارد ایران شده‌اند ارتفاع‌های گوناگونی همچون
            ۱۴۰۰۰ تا ۲۲۰۰۰ پا برای کوه دماوند ذکر کرده‌اند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            کوه دماوند که در دوران چهارم زمین‌شناسی موسوم به دوران هولوسین
            تشکیل‌شده است، از همان دوران قدیم در میان ایرانیان شهرت داشته است.
            حتی از این کوه زیبا در داستان‌های اساطیری ایران هم نام آورده شده
            است. در کتاب بی‌نظیر شاهنامه، حکیم ابوالقاسم فردوسی از کوه دماوند به
            سبب آنکه ضحاک (پادشاهی ستمگر و اژدهایش) در آن به بند کشیده شده‌ بود،
            یاد می‌کند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            در دیگر آثار ادبی ایران نیز از کوه دماوند به صورت فراوان استفاده‌شده
            است. همچون قصیده‌ای زیبا از شاعر معاصر ملک‌الشعرای بهار که در ارتباط
            با کوه دماوند سروده شده که در آن این شاعر پرآوازه کوه دماوند را
            این‌گونه معرفی می‌کند
          </p>
          <p
            className='mt-5'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            ای دیو سپید پای دربند! ای گنبد گیتی! ای دماوند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            از سیم به سر یکی کله خود ز آهن به میان یکی کمربند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            تا چشم بشر نبیندت روی بنهفته به ابر، چهر دلبند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            تا وارهی از دم ستوران وین مردم نحس دیو مانند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            با شیر سپهر بسته پیمان با اختر سعد کرده پیوند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            چون گشت زمین ز جور گردون سرد و سیه و خموش و آوند
          </p>
          <p
            className='mt-2'
            style={{ direction: 'rtl', textAlign: 'justify' }}
          >
            بنواخت ز خشم بر فلک مشت آن مشت تویی، توای دماوند
          </p>
        </div>
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <img
            alt='middleImg'
            src={Banner}
            style={{ width: '80%', borderRadius: '15px' }}
          />
        </div>
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'right' }}>
            <h4 className='mx-3' style={{ fontWeight: 'bolder' }}>
              جاذبه های گردشگری مشابه
            </h4>
            <FiMap size={30} style={{ color: '#707070' }} />
          </div>
          <div className='row mt-3' style={{ justifyContent: 'center' }}>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh1'
                src={kooh1}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                رشته کوه دنا
              </p>
            </div>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh2'
                src={kooh2}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                کوه بینالود
              </p>
            </div>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh3'
                src={kooh3}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                اشترانکوه
              </p>
            </div>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh4'
                src={kooh4}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                شیرکوه
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <img
            alt='middleImg'
            src={Banner}
            style={{ width: '80%', borderRadius: '15px' }}
          />
        </div>
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'right' }}>
            <h4 className='mx-3' style={{ fontWeight: 'bolder' }}>
              اقامتگاه های نزدیک
            </h4>
            <GiVillage size={30} style={{ color: '#707070' }} />
          </div>
          <div className='row mt-3' style={{ justifyContent: 'center' }}>
            <div
              className='col-lg-4 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh1'
                src={kooh1}
                style={{ width: '100%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                اقامتگاه بوم گردی روژان _ دماوند
              </p>
            </div>
            <div
              className='col-lg-4 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh2'
                src={kooh2}
                style={{ width: '100%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                هتل نمکی خورشید _ دماوند
              </p>
            </div>
            <div
              className='col-lg-4 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh3'
                src={kooh3}
                style={{ width: '100%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                اقامتگاه بوم گردی کدخدا _ دماوند
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'right' }}>
            <h4 className='mx-3' style={{ fontWeight: 'bolder' }}>
              رستوران ها
            </h4>
            <BiRestaurant size={30} style={{ color: '#707070' }} />
          </div>
          <div className='row mt-3' style={{ justifyContent: 'center' }}>
            <div
              className='col-lg-4 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh1'
                src={kooh1}
                style={{ width: '100%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                کافه رستوران باغ بهشت _ دماوند
              </p>
            </div>
            <div
              className='col-lg-4 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh2'
                src={kooh2}
                style={{ width: '100%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                چلو جوجه گلوگاه _ دماوند
              </p>
            </div>
            <div
              className='col-lg-4 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='kooh3'
                src={kooh3}
                style={{ width: '100%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                رستوران صفری دماوند
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <img
            alt='middleImg'
            src={Banner}
            style={{ width: '80%', borderRadius: '15px' }}
          />
        </div>
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'right' }}>
            <h4 className='mx-3' style={{ fontWeight: 'bolder' }}>
              مراکز خرید
            </h4>
            <FaShoppingBasket size={30} style={{ color: '#707070' }} />
          </div>
          <div className='row mt-3' style={{ justifyContent: 'center' }}>
            <div
              className='col-lg-6 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='basket'
                src={basket}
                style={{ width: '80%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                مرکز خرید کوروش _ تهران
              </p>
            </div>
            <div
              className='col-lg-6 col-md-10 col-sm-10 col-12'
              style={{ textAlign: 'center' }}
            >
              <img
                alt='basket2'
                src={basket2}
                style={{ width: '80%', borderRadius: '15px', height: '300px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                مرکز خرید پالادیوم _ تهران
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'right' }}>
            <h4 className='mx-3' style={{ fontWeight: 'bolder' }}>
              جاذبه های گردشگری همان شهر
            </h4>
            <GiIndianPalace size={30} style={{ color: '#707070' }} />
          </div>
          <div className='row mt-3' style={{ justifyContent: 'center' }}>
            <div className=' col-lg-4 col-md-10 col-sm-10 col-12 mt-5'>
              <div style={{ height: '210px' }}>
                <img
                  src={travel2}
                  alt='travel2'
                  style={{ width: '100%', height: '200px' }}
                />
                <p
                  className='mt-1'
                  style={{
                    fontWeight: 'bold',
                    background: '#ffffff7a',
                    position: 'relative',
                    bottom: ' 60px',
                    padding: '10px',
                    width: 'fit-content',
                    right: '0px !important',
                    borderRadius: '0px 15px 15px 0px',
                  }}
                >
                  مرکز خرید کوروش _ تهران
                </p>
              </div>
              <div style={{ height: '180px' }}>
                <img
                  src={travel1}
                  alt='travel1'
                  style={{ width: '100%', height: '200px' }}
                />
                <p
                  className='mt-1'
                  style={{
                    fontWeight: 'bold',
                    background: '#ffffff7a',
                    position: 'relative',
                    bottom: ' 60px',
                    padding: '10px',
                    width: 'fit-content',
                    right: '0px !important',
                    borderRadius: '0px 15px 15px 0px',
                  }}
                >
                  مرکز خرید کوروش _ تهران
                </p>
              </div>
            </div>

            <div
              className='row col-lg-8 col-md-10 col-sm-10 col-12 mt-5'
              style={{ textAlign: 'center', justifyContent: 'end' }}
            >
              <div
                className='col-lg-6 col-md-10 col-sm-10 col-12'
                style={{ textAlign: '-webkit-right' }}
              >
                <img
                  alt='travel4'
                  src={travel4}
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                  }}
                />
                <p
                  className='mt-3'
                  style={{
                    fontWeight: 'bold',
                    background: '#ffffff7a',
                    position: 'relative',
                    bottom: ' 60px',
                    padding: '10px',
                    width: 'fit-content',
                    right: '0px !important',
                    borderRadius: '15px 0px 0px 15px',
                  }}
                >
                  مرکز خرید کوروش _ تهران
                </p>
              </div>
              <div
                className='col-lg-6 col-md-10 col-sm-10 col-12'
                style={{ textAlign: '-webkit-right' }}
              >
                <img
                  alt='travel3'
                  src={travel3}
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                  }}
                />
                <p
                  className='mt-3'
                  style={{
                    fontWeight: 'bold',
                    background: '#ffffff7a',
                    position: 'relative',
                    bottom: ' 60px',
                    padding: '10px',
                    width: 'fit-content',
                    right: '0px !important',
                    borderRadius: '15px 0px 0px 15px',
                  }}
                >
                  مرکز خرید کوروش _ تهران
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <img
            alt='middleImg'
            src={Banner}
            style={{ width: '80%', borderRadius: '15px' }}
          />
        </div>
        <div className='mt-5' style={{ textAlign: 'right' }}>
          <div className='d-flex' style={{ justifyContent: 'right' }}>
            <h4 className='mx-3' style={{ fontWeight: 'bolder' }}>
              پیشنهاد سفر
            </h4>
            <GiSchoolBag size={30} style={{ color: '#707070' }} />
          </div>
          <div className='row mt-3' style={{ justifyContent: 'center' }}>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='gilan1'
                src={gilan1}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                تالش
              </p>
            </div>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='gilan2'
                src={gilan2}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                آستارا
              </p>
            </div>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='gilan3'
                src={gilan3}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                استان گیلان
              </p>
            </div>
            <div
              className='col-lg-3 col-md-10 col-sm-10 col-12 '
              style={{ textAlign: 'center' }}
            >
              <img
                alt='gilan3'
                src={gilan3}
                style={{ width: '100%', borderRadius: '15px' }}
              />
              <p className='mt-3' style={{ fontWeight: 'bold' }}>
                استان گیلان
              </p>
            </div>
          </div>
        </div>

        {/* comments */}
        <div
          className='col-lg-10 col-md-10 col-sm-10 col-12 my-3 m-auto'
          style={{ justifyContent: 'center' }}
        >
          <div
            style={{
              borderRadius: '15px',
              padding: '30px',
              backgroundColor: '#dfdfdf',
              border: '1px solid #707070',
            }}
          >
            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <span style={{ color: 'red' }}>نازنین</span>
              <BsCircleFill
                className='mt-1 mx-2'
                size={15}
                style={{
                  border: '1px solid #707070',
                  padding: '2px',
                  borderRadius: '50%',
                  color: '#707070',
                }}
              />
            </div>
            <div className='d-flex ' style={{ justifyContent: 'end' }}>
              <button
                style={{
                  border: 'none',
                  background: 'red',
                  color: 'white',
                  borderRadius: '15px',
                  padding: '5px 20px 5px 20px',
                  marginTop: '5px',
                  marginRight: '30px',
                }}
              >
                پاسخ
              </button>
              <span
                className='cm-txt'
                style={{ marginRight: '15px', marginTop: '10px' }}
              >
                سلام من میخواستم بدونم مسیر ویلای آبسرد دماوند هموار هست؟
              </span>
            </div>
            <div
              className='mt-3'
              style={{
                border: '1px solid #707070',
                padding: '10px',
                backgroundColor: 'white',
              }}
            >
              <div className='d-flex' style={{ justifyContent: 'end' }}>
                <span style={{ color: 'red' }}>نازنین</span>
                <BsCircleFill
                  className='mt-1 mx-2'
                  size={15}
                  style={{
                    border: '1px solid #707070',
                    padding: '2px',
                    borderRadius: '50%',
                    color: '#707070',
                  }}
                />
              </div>
              <div className='d-flex ' style={{ justifyContent: 'end' }}>
                <span
                  className='cm-txt'
                  style={{ marginRight: '15px', marginTop: '10px' }}
                >
                  سلام من میخواستم بدونم مسیر ویلای آبسرد دماوند هموار هست؟
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* comments */}

        {/* puComments */}
        <div
          className='col-lg-10 col-md-10 col-sm-10 col-12 mt-5 m-auto'
          style={{ justifyContent: 'center', textAlign: 'end' }}
        >
          <span className='mt-5' style={{ justifyContent: 'end' }}>
            دیدگاهتان را بنویسید
          </span>
          <textarea
            className='form-input1 my-3'
            type='text'
            name='name'
            placeholder='متن پیغام'
            style={{ height: '200px', border: 'none' }}
          ></textarea>
        </div>
        <div
          className='row col-lg-10 col-md-10 col-sm-10 col-12 mt-2 mb-4 m-auto'
          style={{ justifyContent: 'right', textAlign: 'end' }}
        >
          <div className='col-lg-6'>
            <div style={{ textAlign: 'right' }}>
              <label>
                <h6 style={{ color: '#4B4B4B' }}>ایمیل</h6>
              </label>
            </div>
            <input type='text' className='form-input1' />
          </div>

          <div className='col-lg-6'>
            <div style={{ textAlign: 'right' }}>
              <label>
                <h6 style={{ color: '#4B4B4B' }}>نام</h6>
              </label>
            </div>
            <input type='text' className='form-input1' />
          </div>
        </div>
        <div className='mb-5' style={{ textAlign: 'center' }}>
          <button
            style={{
              textAlign: 'center',
              border: 'none',
              outline: 'none',
              padding: '10px 40px 10px 40px',
              backgroundColor: '#60B24C',
              color: 'white',
              borderRadius: ' 10px',
            }}
          >
            فرستادن دیدگاه
          </button>
        </div>
        {/* puComments */}
      </div>
    </div>
  )
}

export default Search
