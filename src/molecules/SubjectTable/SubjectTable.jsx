//react
import React, {memo} from 'react';
//css
import css from './SubjectTable.module.sass';

export const SubjectTable = memo(({
    subjects,
    subjectId
}) => {
    const checkPath = "/svg/check-mark.svg";
    const crossPath = "/svg/cross.svg";

    return (
        <table className={css.subjectsTable}>
            <thead>
                <tr className={css.subjectsTable__gridedRow}>
                    <td className={css.subjectsTable__headerCol}><span>Название предмета</span></td>
                    <td className={css.subjectsTable__headerCol}>1</td>
                    <td className={css.subjectsTable__headerCol}>2</td>
                    <td className={css.subjectsTable__headerCol}>3</td>
                    <td className={css.subjectsTable__headerCol}>4</td>
                    <td className={css.subjectsTable__headerCol}>5</td>
                    <td className={css.subjectsTable__headerCol}>6</td>
                    <td className={css.subjectsTable__headerCol}>7</td>
                    <td className={css.subjectsTable__headerCol}>8</td>
                    <td className={css.subjectsTable__headerCol}>9</td>
                    <td className={css.subjectsTable__headerCol}>10</td>
                    <td className={css.subjectsTable__headerCol}>11</td>
                </tr>
            </thead>
            <tbody>
                {subjects.map((subject, sIndex) =>
                    <tr key={sIndex} className={css.subjectsTable__gridedRow + " " + css.subjectsTable__bodyRow}>
                        <td className={css.subjectsTable__bodyCol}>
                            <span>{(Number(subjectId) === Number(subject.id)) ? (<u>{subject.title}</u>) : subject.title}</span>
                        </td>

                        {subject.years.map((year, yIndex) =>
                            <td key={yIndex} className={css.subjectsTable__bodyCol}>
                                <img src={year ? checkPath : crossPath} alt="" />
                            </td>)}
                    </tr>)}
            </tbody>
        </table>
    )
})