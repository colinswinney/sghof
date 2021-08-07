import ChevronLogo from "./svg/ChevronLogo"

const Footer = () => {
    return (
        <footer className="footer inverse">
            <div className="container">
                <ChevronLogo />
                <p>Website by Colin Swinney.<br/>Questions or comments?<br/><a href="mailto:colinjswinney@gmail.com?subject=Steel Guitar HOF Submission">Shoot me an email</a>.</p>
            </div>
        </footer>
    )
}

export default Footer