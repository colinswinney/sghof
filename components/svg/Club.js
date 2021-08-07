const Club = (props) => {

    let classProp = ''
    props.className ? classProp = props.className : '';

    return (
        <svg className={`club ${classProp}`} width={100} height="100%" viewBox="0 0 319 370" version={1.1} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" style={{fillRule: `evenodd`,clipRule: `evenodd`, strokeLinejoin: `round`, strokeMiterlimit: 2}}>
            <g transform="matrix(1,0,0,1,-59.2525,-90.9)">
                <path d="M187.18,250.39C128.366,222.295 41.85,255.807 62.32,331.402C82.267,405.07 168.41,388.904 198.2,344.06C185.773,429.085 163.948,442.322 150.866,460.78L289.746,460.78C275.674,441.041 250.122,429.085 235.138,342.89C265.154,387.658 355.388,403.177 375.048,330.573C394.387,259.152 307.214,218.483 249.248,250.81C304.833,213.484 324.795,90.9 219.517,90.9C113.197,90.9 130.938,215.88 187.175,250.39L187.18,250.39Z" style={{fillRule: `nonzero`}}/>
            </g>
        </svg>
    )
}

export default Club