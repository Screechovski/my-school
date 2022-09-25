import React from "react";
import {SubjectTable} from "../SubjectTable/SubjectTable";
import css from "./SubjectInner.module.sass";
import {EducatorCard} from "../EducatorCard/EducatorCard";

export const SubjectInner = ({
    educators = [],
    subjects,
    subjectId,
    description
}) => {
    return (
        <article className={css.subjectInner}>
            <header className={css.subjectInner__header}>
                <p className={css.subjectInner__desc}>{description}</p>
            </header>
            <footer className={css.subjectInner__footer}>
                <SubjectTable subjects={subjects} subjectId={subjectId} />
                <div className={css.subjectInner__educators}>
                    <h3 className={css.subjectInner__educatorsTitle}>
                        Преподаватели:{" "}
                    </h3>
                    <ul className={css.subjectInner__educatorsTable}>
                        {educators && educators.map(educator => (
                            <li key={educator.id}>
                                <EducatorCard
                                    image={educator.image}
                                    name={educator.name}
                                    email={educator.email}
                                    id={educator.id}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </article>
    );
};
