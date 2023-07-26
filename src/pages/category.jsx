import "../assets/css/category.css";
import "../assets/css/nav.css"

import AdOne from "../assets/images/category/Rectangle 4 (1).jpg";
import BigImg from "../assets/images/category/1243550b3902a2c1fe647b9e21769240.png";
import SmallImg from "../assets/images/category/Rectangle 92.png"
import AdsOne from "../assets/images/category/Rectangle 93.jpg"
import GoogleAds from "../assets/images/category/google_ads_one.jpg"
import ListNewsPic from  "../assets/images/category/list_news_pic.png"
import SideAds from  "../assets/images/category/side_ads.png"
// import Line from "../assets/images/category/Line 1.png"

import ImageWithTitle from "../component/imgtitlecategory.component";
import SmallCategory from "../component/smallimgcategory.component";

import ListNews from "../component/imgtitleparacCat.component"

import Menu from "../layout/common/test_header";

import Header from "../layout/common/header"

export default function Category() {
  return (
    <>
    <Header />
    <Menu />
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-lg-12">
            <a
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <img src={AdOne} alt="" className="img-fluid" />
            </a>
          </div>
        </div>

        <div className="row mt-5">
          <h1 className="rajniti_title">রাজনীতি</h1>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6  mb-4">
            <a href="#">
            <ImageWithTitle 
                imgSrc = {BigImg}
                imgclassName=" big_img img_scale"
                title="ডিজিটাল নিরাপত্তা উন্নত নয় বলেই হ্যাক হচ্ছে, তথ্য চলে যাচ্ছে: ফখরুল"
                title_div="title_div_class"
                className="title_class"
                imgclassNametwo="img-fluid"
            />
            </a>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <a href="#">
                <SmallCategory 
                    imgSrc={SmallImg}
                    imgClassName='img-fluid img_scale'
                    title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                    details="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                    time="২ ঘণ্টা আগে"
                />
                </a>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
            <a href="#" className="phone_ads d-flex justify-content-center align-items-center">
                <img src={AdsOne} className="img-fluid img_scale" alt="" />
            </a>
          </div>
        </div>

        <div className="row my-5">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
            <a href="#">
                <SmallCategory 
                    imgSrc={SmallImg}
                    imgClassName='img-fluid img_scale'
                    title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                    details="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                    time="২ ঘণ্টা আগে"
                />
                </a>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
            <a href="#">
                <SmallCategory 
                    imgSrc={SmallImg}
                    imgClassName='img-fluid img_scale'
                    title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                    details="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                    time="২ ঘণ্টা আগে"
                />
                </a>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
            <a href="#">
                <SmallCategory 
                    imgSrc={SmallImg}
                    imgClassName='img-fluid img_scale'
                    title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                    details="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                    time="২ ঘণ্টা আগে"
                />
                </a>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
            <a href="#">
                <SmallCategory 
                    imgSrc={SmallImg}
                    imgClassName='img-fluid img_scale'
                    title="২৭ জুলাই মহাসমাবেশ চূড়ান্ত আন্দোলনের দিকে বিএনপি"
                    details="এই সমাবেশ উপলক্ষে সোহরাওয়ার্দী উদ্যান, শাহবাগ মৎস্য ভবন এলাকায় আইনশৃঙ্খলা রক্ষাকারী বাহিনীর বিপুলসংখ্যক সদস্য"
                    time="২ ঘণ্টা আগে"
                />
                </a>
            </div>

            

            
        </div>

        <div className="row mb-5">
            <div className="container">
                <div className="col-lg-12">
                    <a href="#" className="d-flex justify-content-center align-items-center">
                        <img src={GoogleAds} className="img-fluid" alt="" srcset="" />
                    </a>
                </div>
            </div>
        </div>

        <div className="row mb-5">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>

                        <a href="#">
                        <ListNews 
                            imgSrc={ListNewsPic}
                            imgClassName="img-fluid img_scale"
                            title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                            titleClassName="fw-bolder list_cat_title"
                            para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                            paraClassName="list_cat_para"
                        />
                        </a>
                    </div>
                </div>
            
            <div>
                <button className="more_btn mb-4">
                    আরও
                </button>
            </div>
                
            </div>

            <div className="col-lg-4 ">
                
                <div className="d-flex justify-content-center align-items-center">
                    <a href="#">
                        <img src={SideAds} className="img-fluid mb-5 " alt="" srcset="" />
                    </a>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <a href="#">
                        <img src={SideAds} className="img-fluid mb-5 " alt="" srcset="" />
                    </a>
                </div>
            </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-12">
            <a
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <img src={AdOne} alt="" className="img-fluid" />
            </a>
          </div>
        </div>

        {/* <div className="row">
            <div className="col-lg-12">
                <img src={Line} alt=''/>
            </div>
        </div> */}
        
       
      </div>
    </>
  );
}
