import React, {memo} from "react";
import {SubjectTable} from "../SubjectTable/SubjectTable";
import css from "./SubjectInner.module.sass";
import {EducatorCard} from "../EducatorCard/EducatorCard";

export const SubjectInner = memo(
    ({title, educators = [], subjects, subjectId, description}) => {
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
                        <div className={css.subjectInner__educatorsTable}>
                            {educators.map(
                                ({id, name, tel, email, imageName}) => (
                                    <EducatorCard
                                        key={id}
                                        image={imageName}
                                        name={name}
                                        email={email}
                                        id={id}
                                        phone={tel}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </footer>
            </article>
        );
    }
);
