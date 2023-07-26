import "../assets/css/style.css";
function TitleParaWithImage(props) {
  const {
    title,
    para,
    titleClassName,
    paraClassName,
    paraStyle,
    imgClassName,
    imgSrc,
    imgStyle,
  } = props;

  return (
    <>
      <div className="row first_sideber">
        <div className="col-8 col-sm-8 col-lg-9">
         
          <h4 className={titleClassName}>{title}</h4>
          <p className={paraClassName} style={paraStyle}>
            {para}
          </p>
        </div>

        <div className="col-4 col-sm-4 col-lg-3">
          <img src={imgSrc} style={imgStyle} alt="" className={imgClassName} />
        </div>
      </div>
    </>
  );
}

export default TitleParaWithImage;
