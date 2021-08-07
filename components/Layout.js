import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ membersData, children}) => {

    // create array of just title and slug, then sort by alpha to use in nav menu
    let titleSlugArr = []

    for (let i = 0; i < membersData.length; i ++) {

        let titleSlugObj = {}
        let title = membersData[i].node.title
        let slug = membersData[i].node.slug

        titleSlugObj["title"] = title;
        titleSlugObj["slug"] = slug;

        titleSlugArr.push(titleSlugObj)

    }

    titleSlugArr.sort(((a, b) => a.title.replace(/[^a-zA-Z0-9]/g,'').localeCompare(b.title.replace(/[^a-zA-Z0-9]/g,''))))
    titleSlugArr.sort(((a, b) => a.slug.replace(/[^a-zA-Z0-9]/g,'').localeCompare(b.slug.replace(/[^a-zA-Z0-9]/g,''))))

    return (
        <div>
            <Nav titleSlugArr={titleSlugArr}/>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout