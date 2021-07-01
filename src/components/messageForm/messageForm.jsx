//react
import React from 'react';
//css
import './messageForm.sass';
//state 
import state from '../../redux/state';



const messageForm = (props) => {
    const currentReview = state.getCurrentReview();

    const inputName = e => {
        const etv = e.target.value;
        e.preventDefault();
        state.setCurrentReviewName(etv);
    }
    const inputTitle = e => {
        const etv = e.target.value;
        e.preventDefault();
        state.setCurrentReviewTitle(etv);
    }
    const inputMessage = e => {
        const etv = e.target.value;
        e.preventDefault();
        state.setCurrentReviewMessage(etv);
    }

    const sendForm = () => {
        state.addReview();
    }

    return (
        <form className="message-form" action="" onSubmit={e=>e.preventDefault()}>
            <label className="message-form__label" htmlFor="messageTitle">
                <h3 className="message-form__headline">Ваше имя</h3>
                <input 
                    className="message-form__input" 
                    onChange={inputName} 
                    type="text"
                    id="messageTitle"
                    value={currentReview.userName}
                />
            </label>
            <label className="message-form__label" htmlFor="messageTitle">
                <h3 className="message-form__headline">Краткое описание</h3>
                <input 
                    className="message-form__input" 
                    type="text" 
                    onChange={inputTitle}
                    id="messageTitle"
                    value={currentReview.title}
                />
            </label>
            <label className="message-form__label" htmlFor="messageText">
                <h3 className="message-form__headline">Основное сообщение</h3>
                <textarea 
                    className="message-form__textarea" 
                    name="" 
                    onChange={inputMessage}
                    id="messageText"
                    value={currentReview.message}
                ></textarea>
            </label>
            <button className="message-form__btn" onClick={sendForm}>Отправить</button>
        </form>
    )
}

export default messageForm;