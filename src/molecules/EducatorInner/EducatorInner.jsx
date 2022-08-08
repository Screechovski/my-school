import React, {memo} from "react";
import css from "./EducatorsInner.module.sass";
import {SubjectCard, SubjectCardLoading} from "../SubjectCard/SubjectCard";
import {getNumberArray} from "../../assets/helper";

export const EducatorInner = ({
    image,
    id,
    name,
    position,
    educationLevel,
    tel,
    email,
    coursesTaught
}) => {
    return (
        <article data-educator-id={id} className={css.educatorInner}>
            <header className={css.educatorInner__header}>
                <div className={css.educatorInner__image}>
                    <img src={image} alt="" />
                </div>
                <div className={css.educatorInner__content}>
                    <h2 className={css.educatorInner__title}>{name}</h2>
                    <ul className={css.educatorInner__list}>
                        <li className={css.educatorInner__item}>
                            <h3>Должность: {position}</h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <h3>Уровень образования: {educationLevel}</h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <h3>
                                Телефон: <a href={`tel:+${tel}`}>{tel}</a>
                            </h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <h3>
                                E-mail: <a href={`mailto:${email}`}>{email}</a>
                            </h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <p>
                                Какой-то доп текст Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quisquam quod
                                repudiandae fugiat, repellat iusto quia autem ad
                                enim numquam culpa ea cum nisi. Odit,
                                reprehenderit explicabo id aperiam
                                necessitatibus repudiandae ab porro? Nemo
                                officiis reprehenderit at maxime excepturi odit
                                incidunt, similique numquam aliquid facere error
                                rem, necessitatibus nisi debitis exercitationem!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum tempora, ratione
                                aliquid dolore temporibus fuga blanditiis at
                                cumque optio officia sequi commodi corporis!
                                Consequuntur quod odit sunt voluptate aut
                                delectus.
                            </p>
                        </li>
                    </ul>
                </div>
            </header>
            <footer className={css.educatorInner__footer}>
                <h3 className={css.educatorInner__subtitile}>
                    Преподаваемые дисциплины:
                </h3>
                <div className={css.educatorInner__subjects}>
                    {coursesTaught.map((subject) => (
                        <SubjectCard
                            image={subject.imageName}
                            title={subject.title}
                            id={subject.id}
                            key={subject.id}
                        />
                    ))}
                </div>
            </footer>
        </article>
    );
};

export const EducatorInnerLoading = () => {
    return (
        <article className={css.educatorInner}>
            <header className={css.educatorInner__header}>
                <div className={css.educatorInnerLoading__image + " loading"} />
                <div className={css.educatorInner__content}>
                    <div
                        className={css.educatorInnerLoading__title + " loading"}
                    />
                    <ul className={css.educatorInner__list}>
                        <li className={css.educatorInner__item}>
                            <h3>
                                Должность:{" "}
                                <span
                                    className={
                                        css.educatorInnerLoading__item +
                                        " loading"
                                    }
                                />
                            </h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <h3>
                                Уровень образования:{" "}
                                <span
                                    className={
                                        css.educatorInnerLoading__item +
                                        " loading"
                                    }
                                />
                            </h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <h3>
                                Телефон:{" "}
                                <span
                                    className={
                                        css.educatorInnerLoading__item +
                                        " loading"
                                    }
                                />
                            </h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <h3>
                                E-mail:{" "}
                                <span
                                    className={
                                        css.educatorInnerLoading__item +
                                        " loading"
                                    }
                                />
                            </h3>
                        </li>
                        <li className={css.educatorInner__item}>
                            <div
                                className={
                                    css.educatorInnerLoading__text + " loading"
                                }
                            />
                        </li>
                    </ul>
                </div>
            </header>
            <footer className={css.educatorInner__footer}>
                <h3 className={css.educatorInner__subtitile}>
                    Преподаваемые дисциплины:
                </h3>
                <div className={css.educatorInner__subjects}>
                    {getNumberArray(3).map((id) => (
                        <SubjectCardLoading key={id} />
                    ))}
                </div>
            </footer>
        </article>
    );
};
