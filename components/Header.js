import Link from "next/link"

// import Club from "./svg/Club"
// import Diamond from "./svg/Diamond"
// import Spade from "./svg/Spade"
// import Heart from "./svg/Heart"

const Header = () => {
    return (
        <header className="header">
            <div className="colored-bg">
                <div className="inlay top"></div>
                    <div className="container">
                        <div className="left-wrap">
                            <Link href="/">
                                <a>
                                    <h2 className="cursive">Steel Guitar</h2>
                                    <h3>Hall of Fame</h3>
                                </a>
                            </Link>
                            
                        </div>
                        <div className="right-wrap">
                            <h3 className="cursive">A Fan Site</h3>
                        </div>
                    </div>
                <div className="inlay bottom"></div>
            </div>
        </header>
    )
}

export default Header