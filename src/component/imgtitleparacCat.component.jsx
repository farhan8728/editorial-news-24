import React from 'react'

export default function CategoryList({imgSrc,imgClassName,title,titleClassName,para,paraClassName,time}) {
  return (
    <>
    <div className="row mb-4">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4">
            <img src={imgSrc} className={imgClassName} alt="" srcset="" />
        </div>

        <div className="col-8 col-sm-8 col-md-8 col-lg-8">
            <h4 className={titleClassName}>{title}</h4>
            <p className={paraClassName}>{para}</p>
            <p>{time}</p>
        </div>

    </div>
        
        
    </>
  )
}
