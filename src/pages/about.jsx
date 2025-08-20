import { FaBook, FaBullseye, FaComments, FaDiscord } from "react-icons/fa";
import "./about.css";

export default function About() {
    const cards = [
        {
            icon: <FaBullseye />,
            title: "社團定位",
            text: "我們專注於 C++ 程式設計，歡迎所有對 程式設計 與 邏輯思維 有興趣的同學加入。",
        },
        {
            icon: <FaBook />,
            title: "課程內容",
            text: "在社團課堂會帶領同學學習 C++ 基礎語法和程式設計思維。",
        },
        {
            icon: <FaComments />,
            title: "課堂互動",
            text: "課後可以自由練習、討論，還有飲料陪伴你的 Coding 時光。",
        },
        {
            icon: <FaDiscord />,
            title: "線上交流",
            text: "我們有 Discord 和 Line 群組，讓大家線上討論、一起蕉流，一起進步。 \n ～(∠・ω< )⌒☆",
        },
    ];

    return (
        <div className="about-container">
            <h1 className="about-title">關於我們</h1>
            <h3 className="about-subtitle">探索我們的社團與課程特色</h3>

            <div className="cards-container">
                {cards.map((card, idx) => (
                    <div key={idx} className="about-card">
                        <div className="card-icon">{card.icon}</div>
                        <h4 className="card-title">{card.title}</h4>
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
