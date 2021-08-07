const Spotify = ({data}) => {

    let embedType = ''
    let height = "390"

    if (data.membersPostType.spotifyArtist) {
        embedType = 'artist'
    }
    else if (data.membersPostType.spotifyTrack) {
        embedType = 'track'
    }
    else if (data.membersPostType.spotifyAlbum) {
        embedType = 'album'
    }
    else if (data.membersPostType.spotifyPlaylist) {
        embedType = 'playlist'
    }
    else if (data.membersPostType.spotifyEpisode) {
        embedType = 'episode'
        height = "232"
    }

    return (
        <section className="spotify">
            <h2>Spotify</h2>
            <div className="spotify-wrapper">
                <iframe src={`https://open.spotify.com/embed/${embedType}/${data.membersPostType.spotify}`} width="100%" height={height} frameBorder="0" allow="encrypted-media"></iframe>
            </div>
        </section>
    )
}

export default Spotify