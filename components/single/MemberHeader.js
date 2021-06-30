import Image from "next/image"

const MemberHeader = ({data}) => {
    return (
        <header className="member-header">
            <h1>{data.title}</h1>
            {data.membersPostType.inducted ? <h4>{data.membersPostType.inducted}</h4> : ``}
            <hr />
            <div dangerouslySetInnerHTML={{ __html: data.membersPostType.plaqueText }}></div>
            <hr />
            

            <div>
                {data.membersPostType.born ? <h4>{data.membersPostType.born}</h4> : ``}
                {data.membersPostType.birthplace ? <h4>{data.membersPostType.birthplace}</h4> : ``}
            </div>

            <div>
                {data.membersPostType.died ? <h4>{data.membersPostType.died}</h4> : ``}
                {data.membersPostType.deathplace ? <h4>{data.membersPostType.deathplace}</h4> : ``}
            </div>

            <div className="member-img-wrap">
                <Image
                    src={data.featuredImage.node.mediaDetails.sizes[3].sourceUrl}
                    height={data.featuredImage.node.mediaDetails.sizes[3].height}
                    width={data.featuredImage.node.mediaDetails.sizes[3].width}
                    alt={data.title}
                />
            </div>
                    
        </header>
    )
}

export default MemberHeader