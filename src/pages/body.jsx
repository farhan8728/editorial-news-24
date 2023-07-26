import "../assets/css/style.css";

import Sidebar from "../component/titleparawithimage.component";
import MainCarousel from "../component/carousel.component";
import Thumbnail from "../layout/common/thumbnail";
import LatestNews from "../component/imgtitlewithpara.component";
import ButtonFile from "../component/button.component";

import Adone from "../assets/images/add_one.png";
import Marquee_tag_img from "../assets/images/marquee_tag_rectangel.jpg";
import ThumbnailImg from "../assets/images/thumbnail_img.jpg";
import SideImg from "../assets/images/sideber_img.jpg";
import carouselOne from "../assets/images/carousel_one.jpeg";
import carouselTwo from "../assets/images/carouselTwo.jpg";
import AdTwo from "../assets/images/addTwo.jpg";
import Ber from "../assets/images/Line 1.png";
import Adthree from "../assets/images/adthree.jpg";
import SmallBer from "../assets/images/small_line.png";
import Area_footer from "../assets/images/Rectangle 63.png"
import twobers from "../assets/images/Group 28.jpg";

import Header from "../layout/common/test_header"

function Body() {
  return (
    <>
    <Header />
      <section>
        <div className="container">
          <div className="row sironam">
            <div className="col-lg-12 d-flex">
              <p className="marqueetag">শিরোনাম</p>
              <a href="#" className="marquee_tag">
                <marquee direction="left">
                  {" "}
                  <img src={Marquee_tag_img} alt="" /> লক্ষ্মীপুরে নিহত সজীব
                  বিএনপির কর্মী নন : পুলিশ
                </marquee>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <a
                href="#"
                className="d-flex justify-content-center align-items-center my-3"
              >
                <img src={Adone} className="img-fluid" alt="" />
              </a>
            </div>
          </div>

          <section>
            <div className="row">
              <div className="col-lg-6">
                <a href="#">
                  <MainCarousel
                    imgSrcOne={carouselOne}
                    imgClassNameOne="carousel_img mb-4"
                    titleTextOne="৬৬.৭ ডিগ্রি সেলসিয়াস তাপমাত্রা অনুভূত ইরানের বিমানবন্দরে"
                    titleClassOne="classOneTitle"
                    imgSrcTwo={carouselOne}
                  />
                </a>
              </div>

              <div className="col-lg-6 first_sideber">
                <a href="#">
                  <Sidebar
                    title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    titleClassName="fw-bolder"
                    para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                    বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                    তবে এখনো তেমন সাড়া মিলছে না।
                            "
                    paraStyle={{
                      fontSize: "1.1rem",
                      marginTop: "10px",
                      marginBottom: "16px",
                    }}
                    paraClassName=""
                    imgSrc={SideImg}
                    imgClassName="img-fluid sideber_img"
                  />
                </a>

                <a href="#">
                  <Sidebar
                    title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    titleClassName="fw-bolder"
                    para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                    বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                    তবে এখনো তেমন সাড়া মিলছে না।
                            "
                    paraStyle={{
                      fontSize: "1.1rem",
                      marginTop: "10px",
                      marginBottom: "16px",
                    }}
                    paraClassName=""
                    imgSrc={SideImg}
                    imgClassName="img-fluid sideber_img"
                  />
                </a>

                <a href="">
                  <Sidebar
                    title="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    titleClassName="fw-bolder"
                    para="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                    বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                    তবে এখনো তেমন সাড়া মিলছে না।
                            "
                    paraStyle={{
                      fontSize: "1.1rem",
                      marginTop: "10px",
                      marginBottom: "16px",
                    }}
                    imgSrc={SideImg}
                    imgClassName="img-fluid sideber_img"
                  />
                </a>
              </div>
            </div>
          </section>

          <section className="thumbnail mb-5">
            <div className="row">
              <div className="col-lg-4">
                <a href="#">
                  <Thumbnail
                    imgSrc={ThumbnailImg}
                    imgClassName="img-fluid sideber_img"
                    title="স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                    titleClassName="title_class fw-bolder mb-4"
                  />
                </a>
              </div>

              <div className="col-lg-4">
                <a href="#">
                  <Thumbnail
                    imgSrc={ThumbnailImg}
                    imgClassName="img-fluid sideber_img"
                    title="স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                    titleClassName="title_class fw-bolder mb-4"
                  />
                </a>
              </div>

              <div className="col-lg-4 mb-3">
                <a href="#">
                  <img src={AdTwo} className="img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <a href="#">
                      <Thumbnail
                        imgSrc={ThumbnailImg}
                        imgClassName="img-fluid sideber_img"
                        title="স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                        titleClassName="title_class fw-bolder mb-4"
                      />
                    </a>
                  </div>

                  <div className="col-lg-6">
                    <a href="#">
                      <Thumbnail
                        imgSrc={ThumbnailImg}
                        imgClassName="img-fluid sideber_img"
                        title="স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                        titleClassName="title_class fw-bolder mb-4"
                      />
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 col-sm-4 col-lg-4">
                    <img src={Ber} className="phone_ber" alt="" srcset="" />
                    <img src={Ber} className="phone_ber" alt="" srcset="" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h3 className="fw-bolder mt-2 title_rajniti">রাজনীতি</h3>
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4" style={{ marginLeft: "-60px" }}>
                    <img src={Ber} alt="" className="phone_ber_right" srcset="" />
                    <img src={Ber} alt="" className="phone_ber_right" srcset="" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-6">
                    <a href="#">
                      <Thumbnail
                        imgSrc={carouselOne}
                        imgClassName="img-fluid sideber_img"
                        title="স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                        titleClassName="title_class fw-bolder mb-4"
                      />
                    </a>
                  </div>

                  <div className="col-lg-6">
                    <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="rajniti_title"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="rajniti_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="rajniti_title"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="rajniti_para"
                      />
                    </a>
                    <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="rajniti_title"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="rajniti_para"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4  sticky-top">
                <ul
                  className="nav nav-pills mb-3 test"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link  active latest_news_first"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      সর্বশেষ
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link latest_news_first_p"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      জনপ্রিয়
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content latestpopularside"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <a href="#">
                      <LatestNews
                        LatestimgSrc={SideImg}
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর
                            বিষয়ে ব্যবসায়ীদের আগ্রহী করে তোলার চেষ্টা চলছে
                            তবে এখনো তেমন সাড়া মিলছে না।"
                        LatestimgClassName="img-fluid"
                        LatesttitleClassName="lastestnews_title"
                        LatestparaClassName="latestnews_para"
                      />
                    </a>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="adthree mb-4">
            <a
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <img src={Adthree} alt="" className="img-fluid" srcset="" />
            </a>
          </section>

          <section>
            <div className="row mb-5">
              <div className="col-lg-4">
                <div className="row mb-2">
                  <div className="col-3 col-sm-3 col-lg-3">
                    <img src={SmallBer} alt="" className="phone_ber" srcset="" />
                    <img src={SmallBer} alt=""  className="phone_ber" srcset="" />
                  </div>

                  <div className="col-4 col-sm-4 col-lg-4">
                    <h3 className="fw-bolder mt-2 title_economics title_rajniti">
                      অর্থনীতি
                    </h3>
                  </div>

                  <div className="col-3 col-sm-3 col-lg-2">
                    <img src={SmallBer} alt="" className="phone_ber_right" srcset="" />
                    <img src={SmallBer} alt="" className="phone_ber_right" srcset="" />
                  </div>
                </div>

                <a href="#">
                  <LatestNews
                    Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    LatesttitleClassName="economics_title fw-bolder"
                    Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                    LatestimgSrc={SideImg}
                    LatestimgClassName="img-fluid sideber_img"
                    LatestparaClassName="economics_para"
                  />
                </a>

                <a href="#">
                  <LatestNews
                    Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    LatesttitleClassName="economics_title fw-bolder"
                    Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                    LatestimgSrc={SideImg}
                    LatestimgClassName="img-fluid sideber_img"
                    LatestparaClassName="economics_para"
                  />
                </a>

                <a href="#">
                  <LatestNews
                    Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    LatesttitleClassName="economics_title fw-bolder"
                    Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                    LatestimgSrc={SideImg}
                    LatestimgClassName="img-fluid sideber_img"
                    LatestparaClassName="economics_para"
                  />
                </a>

                <a href="#">
                  <LatestNews
                    Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    LatesttitleClassName="economics_title fw-bolder"
                    Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                    LatestimgSrc={SideImg}
                    LatestimgClassName="img-fluid sideber_img"
                    LatestparaClassName="economics_para"
                  />
                </a>

                <a href="#">
                  <LatestNews
                    Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    LatesttitleClassName="economics_title fw-bolder"
                    Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                    LatestimgSrc={SideImg}
                    LatestimgClassName="img-fluid sideber_img"
                    LatestparaClassName="economics_para"
                  />
                </a>

                <a href="#">
                  <LatestNews
                    Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                    LatesttitleClassName="economics_title fw-bolder"
                    Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                    LatestimgSrc={SideImg}
                    LatestimgClassName="img-fluid sideber_img"
                    LatestparaClassName="economics_para"
                  />
                </a>

                {/* <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="rajniti_title"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="rajniti_para"
                      />
                </a>

                <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="rajniti_title"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="rajniti_para"
                      />
                </a> */}
                <ButtonFile text="আরও" className="more_btn" />
              </div>

              <div className="col-lg-8">
                <div className="row">
                  <div className="col-4 col-lg-4 col-lg-3">
                    <img src={Ber} alt="" className="phone_ber" srcset="" />
                    <img src={Ber} alt="" className="phone_ber" srcset="" />
                  </div>

                  <div className="col-4 col-lg-4 col-lg-4">
                    <h3 className="fw-bolder mt-2 title_national title_rajniti">
                      জাতীয়
                    </h3>
                  </div>

                  <div className="col-4 col-lg-4 col-lg-3">
                    <img src={Ber} alt="" className="phone_ber_right_2" srcset="" />
                    <img src={Ber} alt="" className="phone_ber_right_2" srcset="" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <Thumbnail
                      imgSrc={carouselOne}
                      imgClassName="img-fluid sideber_img"
                      title="স্বপ্নের দল’ বার্সেলোনায় খেলতে চান ফেলিক্স"
                      titleClassName="title_class fw-bolder mb-4"
                    />

                    <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="economics_title fw-bolder"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="economics_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="economics_title fw-bolder"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="economics_para"
                      />
                    </a>

                    <a href="#">
                      <LatestNews
                        Latesttitle="রুপিতে লেনদেনে গ্রাহক খুঁজছে ব্যাংক"
                        LatesttitleClassName="economics_title fw-bolder"
                        Latestpara="রুপিতে রপ্তানি আয় গ্রহণ ও আমদানি ব্যয় মেটানোর বিষয়ে ব্যবসায়ীদের.."
                        LatestimgSrc={SideImg}
                        LatestimgClassName="img-fluid sideber_img"
                        LatestparaClassName="economics_para"
                      />
                    </a>
                  </div>

                  <div className="col-lg-6">
                    <a href="#" className="">
                      <img src={AdTwo} className="img-fluid" alt="" srcset="" />

                      
                    </a>
                    <h3 className="mt-4 news_area">আমার এলাকার খবর</h3>
                    <img src={Area_footer} alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Body;
