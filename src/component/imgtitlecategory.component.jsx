export default function ImageWithTitle({
  imgSrc,
  title,
  className,
  title_div,
  imgclassName,
  imgclassNametwo,
}) {
  return (
    <>
      <div className={imgclassName}>
        <img src={imgSrc} alt="" className={imgclassNametwo} />

        <div className={title_div}>
          <h3 className={className}>{title}</h3>
        </div>
      </div>
    </>
  );
}
