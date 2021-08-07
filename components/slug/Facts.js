const Facts = ({data}) => {
    return (
        <section className="facts">
        <h2>Fast Facts</h2>
        <ul>
            {data.map( (fact, i) => (
                <li key={i}>
                    {fact.singleFact}
                    <div>
                        - <a href={fact.sourceLink}>{fact.sourceTitle}</a>
                    </div>
                </li>
            ))}
        </ul>
        </section>
    )
}

export default Facts