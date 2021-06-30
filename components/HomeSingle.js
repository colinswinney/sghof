
import Link from 'next/link'
import Image from 'next/image'

const HomeSingle = ( {data} ) => {
    return (
        <>
        {console.log(data)}
                <div className="home-member-single">
                    <Link href={`/${data.node.slug}`}>
                        <a>
                            <h2>{data.node.title}</h2>
                        </a>
                    </Link>
                    <div>
                        {data.node.featuredImage ?
                        <Link href={`/${data.node.slug}`}>
                            <a>
                            <Image
                                src={data.node.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                                height={data.node.featuredImage.node.mediaDetails.sizes[0].height}
                                width={data.node.featuredImage.node.mediaDetails.sizes[0].width}
                                alt={data.node.title}
                            />
                            </a>
                        </Link> : ``}
                    </div>
                    <div>
                        
                        {/* <h4>{data.node.membersPostType.inductionNumber}</h4> */}
        
                        {/* {data.node.membersPostType.inducted ? <h4>{data.node.membersPostType.inducted}</h4> : ``} */}
        
                        
                        <Link href={`/${data.node.slug}`}>
                        <a>More info</a>
                        </Link>
                    </div>
                </div>
        </>
    )
}

export default HomeSingle