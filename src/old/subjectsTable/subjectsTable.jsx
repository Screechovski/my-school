//react
import React from 'react';
//css
import css from './subjectsTable.module.sass'
//images
import check from './../../images/svg/check-mark.svg';
import cross from './../../images/svg/cross.svg';

const subjectsTable = ({subjects, subjectId}) => {
    return (
        <table className={css["subjects-table"]}>
            <thead className={css["subjects-table__header"]}>
                <tr>
                    <td className={css["subjects-table__row"]}>Название предмета</td> 
                    <td className={css["subjects-table__row"]}>1</td> 
                    <td className={css["subjects-table__row"]}>2</td> 
                    <td className={css["subjects-table__row"]}>3</td> 
                    <td className={css["subjects-table__row"]}>4</td> 
                    <td className={css["subjects-table__row"]}>5</td> 
                    <td className={css["subjects-table__row"]}>6</td> 
                    <td className={css["subjects-table__row"]}>7</td> 
                    <td className={css["subjects-table__row"]}>8</td> 
                    <td className={css["subjects-table__row"]}>9</td> 
                    <td className={css["subjects-table__row"]}>10</td> 
                    <td className={css["subjects-table__row"]}>11</td>
                </tr>
            </thead>
            <tbody className={css["subjects-table__body"]}>
                {subjects.map((subject, sIndex)=>{
                    return (
                        <tr key={sIndex} className={css["subjects-table__line"]}>
                            <td className={css["subjects-table__row"]}>
                                {Number(subjectId) === Number(subject.id) ? (<u>{subject.title}</u>) : subject.title}
                            </td> 

                            {subject.years.map((year, yIndex)=>{
                                return <td key={yIndex} className={css["subjects-table__row"]}>
                                    <img src={year ? check : cross} alt="" />
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default subjectsTable;