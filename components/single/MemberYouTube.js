const MemberYouTube = ({data}) => {
    return (
        <section>
        <h2>{data.title} on YouTube</h2>
            <div style={{maxWidth: 560 + 'px'}}>
                {data.membersPostType.youtube.map((link, i) => (
                    <div className="video-wrapper" key={i}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link.youtubeId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MemberYouTube