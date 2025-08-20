import { useEffect } from "react";
import {
    FaGithub,
    FaHackerrank,
    FaJava,
    FaPalette,
    FaTrash,
} from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import "./other.css";

function useInViewOnce() {
    useEffect(() => {
        const els = document.querySelectorAll("[data-animate]");
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in-view");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

function Other() {
    useInViewOnce();

    const historySites = [
        {
            icon: <FaTrash />,
            name: "2021 / 已失效",
            link: "https://sites.google.com/view/tyic2021/",
        },
        {
            icon: <FaHackerrank />,
            name: "2022",
            link: "https://hackmd.io/@lin09140914/S1LjNlq-s",
        },
        {
            icon: <TbBrandCpp />,
            name: "2023",
            link: "https://sites.google.com/view/tyic2023/",
        },
        {
            icon: <FaJava />,
            name: "2024",
            link: "https://tyshic.github.io/2024",
        },
    ];

    const specialThanks = [
        {
            name: "OsGa",
            link: "https://www.osga.dev/",
            desc: "提供網站設計靈感",
        },
        {
            name: "Myster",
            link: "https://myster7494.github.io/",
            desc: "提供網站設計建議和技術協助",
        },
        {
            name: "Small R",
            link: "https://smallr-portfolio.vercel.app/zh",
            desc: "給予技術協助",
        },
        {
            name: "南宮柳信",
            link: "https://nangong5421.github.io/",
            desc: "提供網站設計靈感",
        },
        {
            name: "Wolf 🐺",
            link: "https://wolf-yuan.dev/",
            desc: "給予技術協助",
        },
    ];

    return (
        <div className="other-container">
            <h2 className="other-title" data-animate>
                歷屆網站
            </h2>
            <hr className="separator" data-animate />
            <div className="history-buttons" data-animate>
                {historySites.map((site, idx) => (
                    <a
                        key={idx}
                        href={site.link}
                        className="icon-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={site.name}
                    >
                        {site.icon}
                        <span className="tooltip">{site.name}</span>
                    </a>
                ))}
            </div>

            <h2 className="other-title" data-animate>
                特別感謝
            </h2>
            <hr className="separator" data-animate />
            <div className="thanks-list">
                {specialThanks.map((person, idx) => (
                    <div key={idx} className="thanks-item" data-animate>
                        <a
                            href={person.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="thanks-link"
                        >
                            {person.name}
                        </a>
                        <span className="thanks-desc"> -- {person.desc}</span>
                    </div>
                ))}
            </div>

            <h2 className="other-title" data-animate>
                關於此網站
            </h2>
            <hr className="separator" data-animate />
            <div className="site-info">
                <div className="site-item" data-animate>
                    <SiReact className="site-icon" />
                    <span>框架：React + Vite</span>
                </div>
                <div className="site-item" data-animate>
                    <SiJavascript className="site-icon" />
                    <span>語言：JavaScript</span>
                </div>
                <div className="site-item" data-animate>
                    <FaGithub className="site-icon" />
                    <span>部署：GitHub Pages</span>
                </div>
                <div className="site-item" data-animate>
                    <FaPalette className="site-icon" />
                    <span>
                        配色參考：
                        <a
                            href="https://rosepinetheme.com/palette/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="site-link"
                        >
                            RosePine
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Other;
