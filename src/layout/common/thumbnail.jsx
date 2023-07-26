function Thumbnail(props) {
    const { imgSrc, title, imgClassName,titleClassName } = props;
    return (
      <>
        <div>
          <img src={imgSrc} className={imgClassName} alt="" />
          <h4 className={titleClassName}>{title}</h4>
        </div>
      </>
    );
  }
  
  export default Thumbnail;
  