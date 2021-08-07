import Club from "./svg/Club"
import Diamond from "./svg/Diamond"
import Spade from "./svg/Spade"
import Heart from "./svg/Heart" 

const Fretboard = () => {
    return (
        <div className="fretboard">
            <Heart className="fret-3"/>
            <Spade className="fret-5"/>
            <Diamond className="fret-7"/>
            <Club className="fret-9"/>

            <div className="fret-12">
                <Heart />
                <Spade />
                <Diamond />
                <Club />
            </div>

            <Heart className="fret-15"/>
            <Spade className="fret-17"/>
            <Diamond className="fret-19"/>
            <Club className="fret-21"/>

            <div className="fret-24">
                <Heart />
                <Spade />
                <Diamond />
                <Club />
            </div>

            <div className="fret one"></div>
            <div className="fret two"></div>
            <div className="fret three"></div>
            <div className="fret four"></div>
            <div className="fret five"></div>
            <div className="fret six"></div>
            <div className="fret seven"></div>
            <div className="fret eight"></div>
            <div className="fret nine"></div>
            <div className="fret ten"></div>
            <div className="fret eleven"></div>
            <div className="fret twelve"></div>
            <div className="fret thirteen"></div>
            <div className="fret fourteen"></div>
            <div className="fret fifteen"></div>
            <div className="fret sixteen"></div>
            <div className="fret seventeen"></div>
            <div className="fret eighteen"></div>
            <div className="fret nineteen"></div>
            <div className="fret twenty"></div>
            <div className="fret twentyone"></div>
            <div className="fret twentytwo"></div>
            <div className="fret twentythree"></div>
            <div className="fret twentyfour"></div>

            <div className="string s1"></div>
            <div className="string s2"></div>
            <div className="string s3"></div>
            <div className="string s4"></div>
            <div className="string s5"></div>
            <div className="string s6"></div>
            <div className="string s7"></div>
            <div className="string s8"></div>
            <div className="string s9"></div>
            <div className="string s10"></div>

        </div>
    )
}

export default Fretboard