//react
import React, {memo} from 'react';
//css
import css from './SubjectTable.module.sass';

export const SubjectTable = memo(({
    subjects,
    subjectId
}) => {
    const checkPath = "/images/svg/check-mark.svg";
    const crossPath = "/images/svg/cross.svg";

    return (
        <table className={css.subjectsTable}>
            <thead className={css.subjectsTable__header}>
                <tr>
                    <td className={css.subjectsTable__row}>Название предмета</td>
                    <td className={css.subjectsTable__row}>1</td>
                    <td className={css.subjectsTable__row}>2</td>
                    <td className={css.subjectsTable__row}>3</td>
                    <td className={css.subjectsTable__row}>4</td>
                    <td className={css.subjectsTable__row}>5</td>
                    <td className={css.subjectsTable__row}>6</td>
                    <td className={css.subjectsTable__row}>7</td>
                    <td className={css.subjectsTable__row}>8</td>
                    <td className={css.subjectsTable__row}>9</td>
                    <td className={css.subjectsTable__row}>10</td>
                    <td className={css.subjectsTable__row}>11</td>
                </tr>
            </thead>
            <tbody className={css.subjectsTable__body}>
                {subjects.map((subject, sIndex) =>
                    <tr key={sIndex} className={css.subjectsTable__line}>
                        <td className={css.subjectsTable__row}>
                            {(Number(subjectId) === Number(subject.id)) ? (<u>{subject.title}</u>) : subject.title}
                        </td>

                        {subject.years.map((year, yIndex) =>
                            <td key={yIndex} className={css.subjectsTable__row}>
                                <img src={year ? checkPath : crossPath} alt="" />
                            </td>)}
                    </tr>)}
            </tbody>
        </table>
    )
})