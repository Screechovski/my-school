import React, {memo} from 'react';
import {SubjectTable} from '../SubjectTable/SubjectTable';
import css from './SubjectInner.module.sass';
import {EducatorCard} from "../EducatorCard/EducatorCard";

export const SubjectInner = memo(({
    title,
    educators,
    subjects,
    subjectId
}) => {
    return (
        <article>
            <header>
                <h2 className={css.subjectInner__title}>{title}</h2>
                <p className={css.subjectInner__desc}>Описание предмета и т.д Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat dolore sequi necessitatibus ad numquam veritatis corporis ex porro. Hic, praesentium eligendi at officia voluptatum dolore laudantium autem perferendis aut ipsa magnam debitis. Quibusdam ipsa ipsam harum nisi delectus, quam doloremque aliquid totam voluptas laboriosam itaque, ipsum, earum molestiae aspernatur.</p>
                <p className={css.subjectInner__desc}>Описание предмета и т.д Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat dolore sequi necessitatibus ad numquam veritatis corporis ex porro. Hic, praesentium eligendi at officia voluptatum dolore laudantium autem perferendis aut ipsa magnam debitis. Quibusdam ipsa ipsam harum nisi delectus, quam doloremque aliquid totam voluptas laboriosam itaque, ipsum, earum molestiae aspernatur.</p>
            </header>
            <footer>
                <SubjectTable
                    subjects={subjects}
                    subjectId={subjectId}
                />
                <div className={css.subjectInner__educators}>
                    <h3 className={css.subjectInner__educatorsTitle}>Преподаватели: </h3>
                    <div className={css.subjectInner__educatorsTable}>
                        {educators.map(({
                            id,
                            name,
                            tel,
                            email,
                            imageName,
                        }) =>
                            <EducatorCard
                                image={imageName}
                                name={name}
                                email={email}
                                id={id}
                                phone={tel}
                            />)}
                    </div>
                </div>
            </footer>
        </article>
    )
})