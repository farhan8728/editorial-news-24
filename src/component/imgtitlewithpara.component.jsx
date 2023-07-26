import "../assets/css/style.css";
function ImgTitleWithPara(props) {
  const {
    Latesttitle,
    Latestpara,
    LatesttitleClassName,
    LatestparaClassName,
    paraStyle,
    LatestimgClassName,
    LatestimgSrc,
    imgStyle,
  } = props;

  return (
    <>
      <div className="row first_sideber">
        <div className="col-4 col-sm-4 col-lg-3">
         
          <img src={LatestimgSrc} style={imgStyle} alt="" className={LatestimgClassName} />

        </div>

        <div className="col-8 col-sm-8 col-lg-9">
         
          <h4 className={LatesttitleClassName}>{Latesttitle}</h4>
          <p className={LatestparaClassName} style={paraStyle}>
            {Latestpara}
          </p>
        </div>
      </div>
    </>
  );
}

export default ImgTitleWithPara;
