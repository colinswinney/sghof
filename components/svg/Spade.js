const Spade = (props) => {

    let classProp = ''
    props.className ? classProp = props.className : '';

    return (
        <svg className={`spade ${classProp}`} width={100} height={100} viewBox="0 0 309 371" version={1.1} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" style={{fillRule: `evenodd`,clipRule: `evenodd`, strokeLinejoin: `round`, strokeMiterlimit: 2}}>

            <g transform="matrix(1,0,0,1,-410.54,-536.554)">
                <path d="M462.295,664.328C340.214,789.05 459.887,879.519 556.409,819.974C538.184,884.942 528.161,890.054 517.097,907.164L621.311,907.164C607.934,889.887 593.885,884.942 579.651,820.344C678.198,876.954 782.061,778.23 672.712,664.328C601.197,601.773 573.432,544.663 567.503,536.554C561.814,543.311 528.295,602.934 462.295,664.328Z"/>
            </g>
        </svg>
    )
}

export default Spade