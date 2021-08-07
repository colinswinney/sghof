import Image from "next/image"
import Club from "../svg/Club"
import Diamond from "../svg/Diamond"
import Spade from "../svg/Spade"
import Heart from "../svg/Heart"
import Fretboard from "../Fretboard"

const IndexHeader = () => {
    return (
        <div className="index-header">

            <div className="top-wrap">
                <div className="container">

                    <Club />
                    <Diamond />
                    <Spade />
                    <Heart />
                    
                    <div className="heading-wrap">
                        <h1>
                            <span className="rotate left s">S</span>
                            <span className="rotate right t">t</span>
                            <span className="rotate left e1">e</span>
                            <span className="rotate right e2">e</span>
                            <span className="rotate left l">l</span>
                            <span className="text-large guitar">Guitar</span>
                            <span className="text-small cursive hof">Hall of Fame</span>
                            <span className="cursive fan">A Fan Site</span>
                        </h1>
                    </div>
                    
                </div>
            </div>

            <Fretboard />
            
            <div className="bottom-wrap">
                <div className="container">
                
                    <div className="col one">
                        <div className="col-content-wrap">
                            <p className="cursive text-left">Featuring...</p>
                            <ul className="featuring-list text-left">
                                <li><Spade />Lloyd Green</li>
                                <li><Spade />Buddy Emmons</li>
                                <li><Spade />Jerry Byrd</li>
                                <li><Spade />Don Helms</li>
                                <li><Spade />Pete Drake</li>
                                <li><Spade />Sol Hoʻopiʻi</li>
                                <li><Spade />Santo & Johnny</li>
                                <li><Spade />Winnie Winston</li>
                                <li><Spade />Paul Franklin</li>
                                <li><Spade />DeWitt Scott</li>
                            </ul>
                            <p className="cursive text-left">...and many more!</p>
                        </div>
                    </div>
                    <div className="col two">
                        <div className="album-img-wrap">
                            <Image
                                src="/images/lloyd-green-crop.jpg"
                                height={600}
                                width={600}
                                alt="Lloyd Green sitting at a Sho-Bud D-10 pedal steel in the studio"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IndexHeader