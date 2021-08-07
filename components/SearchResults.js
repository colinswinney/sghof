import Link from "next/link"

import Spade from "./svg/Spade"


const SearchResults = ({searchResults}) => {
    return (
        <ul>
            {searchResults.members.edges.map( ({node}, i) => {
                return (
                    <li>
                        <Spade /><br/>
                        <Link key={i} href={node.slug}>
                            <a>{node.title}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResults