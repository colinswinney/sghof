import { useState, useEffect } from "react"
import Link from "next/link"

import Searchbar from "./Searchbar"
import MagnifyingGlass from "./svg/MagnifyingGlass"

const Nav = ({titleSlugArr}) => {
    const [isOpen, setIsOpen] = useState(false)

    let menuClass = "nav-menu"

    if (isOpen) {
        menuClass += ' active';
        useEffect( () => { document.querySelector("body").classList.add("nav-menu-active") } );
    }
    else {
        useEffect( () => { document.querySelector("body").classList.remove("nav-menu-active") } );
    }

    return (
        <nav className="nav">
            <div className="container nav-container">
                <Link href="/">
                    <a className="nav-left">Home</a>
                </Link>
                <Searchbar />
                <div className="search-link-wrap">
                    <Link href="/search">
                        <a><MagnifyingGlass /></a>
                    </Link> 
                </div>
                
                <button className="btn nav-open" onClick={() => { setIsOpen(!isOpen) }}>
                    Members
                </button>
            </div>

            <div className={menuClass}>
                
                <div className="container">
                    <button href="#" className="btn nav-close" onClick={() => { setIsOpen(!isOpen) }}></button>
                    
                    <ul className="nav-menu-list">
                        <li className="nav-menu-item">
                            <Link href="/">
                                <a onClick={() => { setIsOpen(!isOpen) }}>Home</a>
                            </Link>
                        </li>
                        {titleSlugArr.map( (edge, i ) => (
                            <li key={i} className="nav-menu-item">
                                <Link href={`/${edge.slug}`}>
                                    <a onClick={() => { setIsOpen(!isOpen) }}>{edge.title}</a>
                                </Link>        
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav