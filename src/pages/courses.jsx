import { useState } from "react";
import "./courses.css";

function Courses() {
    const [term, setTerm] = useState("first");

    const firstSemester = [
        "基本程式介紹 / Intro Basics\n整合開發環境 / IDE\n前置處理器 / Preproc",
        "輸入輸出 / IO\n變數 / Var\n運算子 / Op",
        "條件判斷式 / If\n迴圈 / Loop",
        "一維陣列 / 1D Array",
    ];

    const secondSemester = [
        "字串 / String",
        "函式 / Functions",
        "結構 / Struct",
        "Vector 容器 / Vec",
        "關聯式容器 / Map",
        "演算法介紹 / Algo",
    ];

    const courses = term === "first" ? firstSemester : secondSemester;

    return (
        <div className="courses-container">
            <h1 key={`title-${term}`} className="courses-title">
                課程規劃
            </h1>

            <div key={`switch-${term}`} className="term-switch">
                <button
                    className={term === "first" ? "active" : ""}
                    onClick={() => setTerm("first")}
                >
                    上學期
                </button>
                <button
                    className={term === "second" ? "active" : ""}
                    onClick={() => setTerm("second")}
                >
                    下學期
                </button>
            </div>

            <div className={`courses-grid ${term}`}>
                {courses.map((course, index) => (
                    <div
                        key={`${term}-${index}`}
                        className="course-card"
                        style={{ animationDelay: `${index * 0.15 + 0.5}s` }}
                    >
                        {course}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
