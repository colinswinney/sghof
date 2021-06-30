const MemberLinks = ({data}) => {
    return (
        <section>
        <h2>On the Web</h2>
        {data ? 
            <ul>
            {data.map((link, i) => {
                return <li key={i}><a href={link.url}>{link.text}</a></li>
            })}
            </ul>
            :
            ``
        }
        </section>
    )
}

export default MemberLinks