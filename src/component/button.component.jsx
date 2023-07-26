import React from 'react'

export default function Button( props ) {
    const {text, onClick, className, style} = props

    return (
        <div>
            <button className={className} style={style} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
