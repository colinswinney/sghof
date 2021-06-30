const MemberFacts = ({data}) => {
    return (
        <section>
        <h2>Fast Facts</h2>
        <ul>
            {data.map( (fact, i) => (
                <li key={i}>
                    {fact.singleFact}
                    <br />
                    - <a href={fact.sourceLink}>{fact.sourceTitle}</a>
                </li>
            ))}
        </ul>
        </section>
    )
}

export default MemberFacts