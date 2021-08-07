import Link from 'next/link'
import Image from 'next/image'

const SingleMember = ( {data} ) => {
    return (
        <>
            {/* {console.log(data)} */}
            <div className={`home-member-single ${data.node.slug}`}>
                
                <div className="home-member-image">
                    
                    <Link href={`/${data.node.slug}`}>
                        <a>
                        {data.node.featuredImage ?
                            <Image
                                src={data.node.featuredImage.node.sourceUrl}
                                height={150}
                                width={150}
                                alt={data.node.title}
                            />
                            :
                            <div className="image-placeholder"></div>
                            }
                            <h3 className="home-member-title">{data.node.title}
                            </h3>
                        </a>
                    </Link>
                    
                </div>
                <div>
                    
                    {/* <h4>{data.node.membersPostType.inductionNumber}</h4> */}
    
                    {/* {data.node.membersPostType.inducted ? <h4>{data.node.membersPostType.inducted}</h4> : ``} */}
                    
                    {/* <Link href={`/${data.node.slug}`}>
                    <a>More info</a>
                    </Link> */}
                </div>
            </div>
        </>
    )
}

export default SingleMember