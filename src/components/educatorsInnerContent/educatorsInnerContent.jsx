import React from 'react';
import css from './educatorsInnerContent.module.sass';
import RSubjectCard from './../subjectCard/subjectCard';
import state from '../../state';

const educatorsInnerContent = (props) => {
    const educator = state.getEducator(Number(props.educatorId));

    return (
        <article className={css['educators-inner']}>
            <header className={css['educators-inner__header']}>
                <div className={css['educators-inner__image']}>
                    <img src={educator.image} alt=""/>
                </div>
                <div className={css['educators-inner__content']}>
                    <h2 className={css['educators-inner__title']}>{educator.name}</h2>
                    <ul className={css['educators-inner__list']}>
                        <li className={css['educators-inner__item']}>
                            <h3>Должность: {educator.position}</h3>
                        </li>
                        <li className={css['educators-inner__item']}>
                            <h3>Уровень образования: {educator.educationLevel}</h3>
                        </li>
                        <li className={css['educators-inner__item']}>
                            <h3>Телефон: <a href={`tel:+${educator.tel}`}>{educator.tel}</a></h3>
                        </li>
                        <li className={css['educators-inner__item']}>
                            <h3>E-mail: <a href={`mailto:${educator.email}`}>{educator.email}</a></h3>
                        </li>
                        <li className={css['educators-inner__item']}>
                            <p>Какой-то доп текст Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quod repudiandae fugiat, repellat iusto quia autem ad enim numquam culpa ea cum nisi. Odit, reprehenderit explicabo id aperiam necessitatibus repudiandae ab porro? Nemo officiis reprehenderit at maxime excepturi odit incidunt, similique numquam aliquid facere error rem, necessitatibus nisi debitis exercitationem!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora, ratione aliquid dolore temporibus fuga blanditiis at cumque optio officia sequi commodi corporis! Consequuntur quod odit sunt voluptate aut delectus.</p>
                        </li>
                    </ul>
                </div>
            </header>
            <footer className={css['educators-inner__footer']}>
                <h3 className={css['educators-inner__subtitile']}>Преподаваемые дисциплины:</h3>
                <div className={css['educators-inner__subjects']}>{
                    educator.coursesTaught.map(subjectId =>
                    {
                        const subject = state.getSubject(subjectId);
                        return <RSubjectCard id={subject.id} key={subject.id}/>
                    })
                }</div>
            </footer>
        </article>
    )
}

export default educatorsInnerContent;