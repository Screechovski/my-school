//react
import React, {memo, useState} from "react";
//css
import css from "./SubjectTable.module.sass";
import {NavLink} from "react-router-dom";
import {getNumberArray} from "../../assets/helper";

export const SubjectTable = memo(({subjects, subjectId}) => {
    // const [hoveredColumnId, setHoveredColumnId] = useState(-1);
    const checkPath = "/svg/check-mark.svg";
    const crossPath = "/svg/cross.svg";

    // const getBodyColClassName = (id) => {
    //     let className = css.subjectsTable__bodyCol;
    //
    //     if (hoveredColumnId === id) {
    //         className += " " + css.subjectsTable__bodyCol_active;
    //     }
    //
    //     return className;
    // };

    // const getHeaderColClassName = (id) => {
    //     let className = css.subjectsTable__headerCol;
    //
    //     if (hoveredColumnId === id) {
    //         className += " " + css.subjectsTable__headerCol_active;
    //     }
    //
    //     return className;
    // };

    return (
        <table className={css.subjectsTable}>
            <thead className={css.subjectsTable__head}>
                <tr
                    className={
                        css.subjectsTable__gridedRow +
                        " " +
                        css.subjectsTable__headerRow
                    }
                >
                    {getNumberArray(12).map((num, idx) =>
                        idx === 0 ? (
                            <td
                                key={idx}
                                className={css.subjectsTable__headerCol}
                            >
                                <span>Название предмета</span>
                            </td>
                        ) : (
                            <td
                                key={idx}
                                className={css.subjectsTable__headerCol}
                            >
                                {idx}
                            </td>
                        )
                    )}
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject, sIndex) => (
                    <tr
                        key={sIndex}
                        className={
                            css.subjectsTable__gridedRow +
                            " " +
                            css.subjectsTable__bodyRow
                        }
                    >
                        <td className={css.subjectsTable__bodyCol}>
                            <NavLink
                                to={"/subjects-inner/" + subject.id}
                                className={css.subjectsTable__subjectLink}
                            >
                                {Number(subjectId) === Number(subject.id) ? (
                                    <u>{subject.title}</u>
                                ) : (
                                    subject.title
                                )}
                            </NavLink>
                        </td>

                        {subject.years.map((year, yIndex) => (
                            <td
                                key={yIndex}
                                className={css.subjectsTable__bodyCol}
                                onMouseEnter={() => setHoveredColumnId(yIndex)}
                            >
                                <img
                                    src={year ? checkPath : crossPath}
                                    alt=""
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
});
