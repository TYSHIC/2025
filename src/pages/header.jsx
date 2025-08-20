import { useEffect, useState } from "react";
import { FaBook, FaEllipsisH, FaHome, FaInfoCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
    const targetText = "TYIC 5th";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const [displayText, setDisplayText] = useState(
        targetText.split("").map(() => "")
    );

    useEffect(() => {
        let animationFrame;
        let startTime;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            setDisplayText((prev) =>
                prev.map((char, idx) => {
                    if (elapsed / 250 > idx) return targetText[idx];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
            );

            if (elapsed / 250 < targetText.length) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    startTime = null;
                    animationFrame = requestAnimationFrame(animate);
                }, 5000);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const location = useLocation();

    const navItems = [
        { to: "/", icon: <FaHome />, label: "Home" },
        { to: "/about", icon: <FaInfoCircle />, label: "About" },
        { to: "/courses", icon: <FaBook />, label: "Courses" },
        { to: "/other", icon: <FaEllipsisH />, label: "Other" },
    ];

    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">
                    {" "}
                    {/* LOGO 點擊導向 Home */}
                    {displayText.map((char, idx) => (
                        <span key={idx} className="logo-char">
                            {char}
                        </span>
                    ))}
                </Link>
            </div>
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li
                        key={item.to}
                        className={`nav-item ${
                            location.pathname === item.to ? "active" : ""
                        }`}
                        title={item.label}
                    >
                        <Link to={item.to}>
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}
