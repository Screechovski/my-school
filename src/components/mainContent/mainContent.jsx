import React from 'react';
import css from './mainContent.module.sass';

const mainContent = (props) => {
    return (
        <main className={`${props.parentClass} ${css['main-content']}`}> 
            {
                props.title !== undefined && 
                    <h2 className={css['main-content__title']} >{props.title}</h2>
            }
            {
                props.typeContent !== undefined && 
                    <div className={css['main-content--'+props.typeContent]} >{props.slot}</div>
            }            
        </main>
    )
}

export default mainContent;