//react
import React from 'react';
//components
import REducatorCard from './../educatorCard/educatorCard';
import RSubjectsTable from './../subjectsTable/subjectsTable';
//css
import css from './subjectsInnerContent.module.sass';

const subjectsInnerContent = ({title, educators, subjects, subjectId}) => {    
    return (
        <article>
            <header>
                <h2 className={css["subject-inner__title"]}>{title}</h2>
                <p className={css["subject-inner__desc"]}>Описание предмета и т.д Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat dolore sequi necessitatibus ad numquam veritatis corporis ex porro. Hic, praesentium eligendi at officia voluptatum dolore laudantium autem perferendis aut ipsa magnam debitis. Quibusdam ipsa ipsam harum nisi delectus, quam doloremque aliquid totam voluptas laboriosam itaque, ipsum, earum molestiae aspernatur.</p>
                <p className={css["subject-inner__desc"]}>Описание предмета и т.д Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat dolore sequi necessitatibus ad numquam veritatis corporis ex porro. Hic, praesentium eligendi at officia voluptatum dolore laudantium autem perferendis aut ipsa magnam debitis. Quibusdam ipsa ipsam harum nisi delectus, quam doloremque aliquid totam voluptas laboriosam itaque, ipsum, earum molestiae aspernatur.</p>
            </header>
            <footer>
                <RSubjectsTable subjects={subjects} subjectId={subjectId}/>
                <div className={css["subject-inner__educators"]}>
                    <h3 className={css["subject-inner__educators-title"]}>Преподаватели: </h3>
                    <div className={css["subject-inner__educators-table"]}>
                        {educators.map(educator => 
                            <REducatorCard
                                image={educator.image}
                                name={educator.name}
                                email={educator.email}
                                key={educator.id}
                                educatorId={educator.id}
                            />
                        )}
                    </div>
                </div>
            </footer>
        </article>
    )
}

export default subjectsInnerContent;