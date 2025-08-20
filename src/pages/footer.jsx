// Footer.jsx
import "./footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <hr className="separator" />
            <div className="footer-text">
                Powered by{" "}
                <a
                    href="https://sa1-t.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Sa//t
                </a>
            </div>
        </footer>
    );
}

export default Footer;
