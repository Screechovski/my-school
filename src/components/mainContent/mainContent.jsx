import React from 'react';
import css from './mainContent.module.sass';

const mainContent = ({parentClass, title, typeContent, slot}) => {
    return (
        <main className={`${parentClass} ${css['main-content']}`}> 
            {
                title !== undefined && 
                    <h2 className={css['main-content__title']} >{title}</h2>
            }
            {
                typeContent !== undefined && 
                    <div className={css['main-content--'+typeContent]} >{slot}</div>
            }            
        </main>
    )
}

export default mainContent;