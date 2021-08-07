import { useRouter } from "next/router";

import { getSearchQuery, getAllMembers } from '../lib/api'
import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'
import SearchResults from '../components/SearchResults'


const Search = ({ allMembers, searchResults }) => {
    console.log(searchResults)
    const { query: { q } } = useRouter();
    const searchString = q
    
    return (
        <Layout membersData={allMembers.edges}>
            <main className="search">
                <div className="container">
                    {searchString ?
                        <>
                            <p>Search results for <em>"{searchString}"</em></p>
                            <Searchbar />
                            {searchResults.members.edges.length != 0 ? 
                                <SearchResults searchResults={searchResults}/>
                                :
                                <p>There were no results</p>
                            }
                        </>
                    :
                    <>
                        <p>Search:</p>
                        <Searchbar />
                    </>
                    }
                </div>
            </main>
        </Layout>
    )
}

export default Search

export async function getServerSideProps(context) {
    const { query: { q } } = context
    const searchResults = await getSearchQuery(q);
    const allMembers = await getAllMembers();
    return {
        props: {
            searchResults: searchResults,
            allMembers: allMembers.members
        }
    };
}