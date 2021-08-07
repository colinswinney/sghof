const Diamond = (props) => {

    let classProp = ''
    props.className ? classProp = props.className : '';
    
    return (
        <svg className={`diamond ${classProp}`} width={100} height={100} viewBox="0 0 254 372" version={1.1} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" style={{fillRule: `evenodd`,clipRule: `evenodd`, strokeLinejoin: `round`, strokeMiterlimit: 2}}>

            <g transform="matrix(1,0,0,1,-440.477,-90.0037)">
                <path d="M566.999,90.004C528.301,154.401 484.737,216.348 440.477,275.844C486.822,335.339 531.082,397.286 566.999,461.683C604.307,396.061 645.091,333.501 693.521,275.844C646.481,216.348 603.612,153.176 566.999,90.004Z"/>
            </g>
        </svg>
    )
}

export default Diamond