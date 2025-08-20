import { useEffect, useState } from "react";
import { FaDiscord, FaFish, FaGithub, FaInstagram } from "react-icons/fa";
import "./home.css";
import ClubIcon from "./images/club_icon.webp";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const texts = ["桃高資訊社", "TYIC 5th"];
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (!deleting && charIndex < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 150);
        } else if (!deleting && charIndex === currentText.length) {
            timeout = setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 100);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, textIndex, texts]);

    return (
        <div className={`home-container ${mounted ? "animate" : ""}`}>
            <div className={`home-content ${mounted ? "animate" : ""}`}>
                <div className={`home-text ${mounted ? "animate" : ""}`}>
                    <div className="typewriter-container">
                        <p>Hello there! Welcome to</p>
                        <h1 id="typewriter">
                            {displayText}
                            <span className="cursor" />
                        </h1>
                    </div>
                    <div
                        className={`social-buttons-fixed ${
                            mounted ? "animate" : ""
                        }`}
                    >
                        <a
                            href="https://youtu.be/xvFZjo5PgG0?si=KHq4RyBPD1XmHEwK"
                            className="social-button"
                            target="_blank"
                        >
                            <FaFish />
                        </a>
                        <a
                            href="https://www.instagram.com/tyic_5th/"
                            className="social-button"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/TYSHIC"
                            className="social-button"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://discord.gg/HuHxVuDVYj"
                            className="social-button"
                            target="_blank"
                        >
                            <FaDiscord />
                        </a>
                    </div>
                </div>
                <div className={`home-image ${mounted ? "animate" : ""}`}>
                    <img src={ClubIcon} alt="學校圖片" />
                </div>
            </div>
        </div>
    );
}
