import Spade from "../svg/Spade"

const Links = ({data}) => {

    data.sort(((a, b) => a.text.replace(/[^a-zA-Z0-9]/g,'').localeCompare(b.text.replace(/[^a-zA-Z0-9]/g,''))))

    console.log(data)
    return (
        <section className="links">
        <h2>Additional Links</h2>
        {data ? 
            <ul>
            {data.map((link, i) => {
                return (
                    <li key={i}>
                        {i === 0 ? '' : <><Spade /><br/></>}
                        <a href={link.url}>{link.text}</a>
                    </li>
                )
            })}
            </ul>
            :
            ``
        }
        </section>
    )
}

export default Links