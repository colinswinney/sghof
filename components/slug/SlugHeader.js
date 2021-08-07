import Image from "next/image"
import Club from "../svg/Club"
import Diamond from "../svg/Diamond"
import Spade from "../svg/Spade"
import Heart from "../svg/Heart"

const SlugHeader = ({data}) => {
    return (
        <div className="slug-header">
            <div className="name-wrap">
                <h1>{data.title}</h1>
                <h5>
                    <Heart/>
                    <Club/>
                    {data.membersPostType.inducted}
                    <Spade/>
                    <Diamond/>
                </h5>
            </div>
            
            <div className="slug-img-wrap bordered">
                {data.featuredImage ?
                <Image
                    src={data.featuredImage.node.mediaItemUrl}
                    height={data.featuredImage.node.mediaDetails.height}
                    width={data.featuredImage.node.mediaDetails.width}
                    alt={data.title}
                />
                :
                ``
                }
            </div>
            
            <div className="plaque-text" dangerouslySetInnerHTML={{ __html: data.membersPostType.plaqueText }}></div>                                

            <div className="born-died-wrap">
                <div className="born">
                    {data.membersPostType.born ? <h4>{data.membersPostType.born}</h4> : ``}
                    {data.membersPostType.birthplace ? <h4>{data.membersPostType.birthplace}</h4> : ``}
                </div>

                {data.membersPostType.died ?
                    <>
                        <div className="hyphen"></div>

                        <div className="died">
                            <h4>{data.membersPostType.died}</h4>
                            <h4>{data.membersPostType.deathplace}</h4>
                        </div>
                    </>
                    :
                    ``
                }
                
            </div>
        </div>
    )
}

export default SlugHeader