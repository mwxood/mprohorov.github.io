import './footer.css';

const Footer = () => {
    const date = () => {
        return(
            <span>
                {new Date().getFullYear()}
            </span>
        )
    }

    return(
        <footer className="footer">
            ©{date()} mprohorov.com All rights reserved
        </footer>
    );
}

export default Footer;