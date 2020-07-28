import React from 'react'

function ButtonLink(props) {
    return (
        <a className={props.className} href={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink