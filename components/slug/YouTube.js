const YouTube = ({data}) => {

    var ytSearchStr = data.title.replace(/ /g, "+");

    return (
        <section className="youtube">
        <h2>YouTube</h2>
            <div className="all-videos-wrapper">
                {data.membersPostType.youtube.map((link, i) => (
                    <div key={i}>
                        <div className="video-wrapper relative bordered">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link.youtubeId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
                        </div>
                        <p>
                            <a href={`https://www.youtube.com/watch?v=${link.youtubeId}`}>{link.youtubeTitle}</a>
                        </p>
                    </div>
                ))}
            </div>
            <a className="btn" href={"https://www.youtube.com/results?search_query=" + ytSearchStr}>Search YouTube for {data.title}</a>
        </section>
    )
}

export default YouTube