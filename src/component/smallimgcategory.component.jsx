export default function SmallCategory({imgSrc, title, details, time, imgClassName}) {
  return (
    <>
        <img src={imgSrc} alt=""  className={imgClassName}/>
        <h4 className="fw-bolder mt-3">{title}</h4>
        <p style={{fontSize:"16px"}}>{details}</p>
        <p style={{fontSize:"12px"}}>{time}</p>
        
    </>
  )
}
