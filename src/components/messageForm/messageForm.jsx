//react
import React from 'react';
//css
import './messageForm.sass';

const messageForm = ({userName, title, message, handlerSetCurrentReviewName, handlerSetCurrentReviewTitle, handlerSetCurrentReviewMessage, handlerSendForm}) => {
    const handlerSetCurrentReviewNameLocal = ({target}) => {
        handlerSetCurrentReviewName(target.value);
    }
    const handlerSetCurrentReviewTitleLocal = ({target}) => {
        handlerSetCurrentReviewTitle(target.value);
    }
    const handlerSetCurrentReviewMessageLocal = ({target}) => {
        handlerSetCurrentReviewMessage(target.value);
    }
    const handlerSendFormLocal = () => {
        handlerSendForm();
    }

    return (
        <form className="message-form" action="" onSubmit={e=>e.preventDefault()}>
            <h2 className="message-form__title">Оставьте свой отзыв</h2>
            <label className="message-form__label" htmlFor="messageTitle">
                <h3 className="message-form__headline">Ваше имя</h3>
                <input 
                    className="message-form__input" 
                    onChange={handlerSetCurrentReviewNameLocal}
                    type="text"
                    id="messageTitle"
                    value={userName}
                />
            </label>
            <label className="message-form__label" htmlFor="messageTitle">
                <h3 className="message-form__headline">Краткое описание</h3>
                <input 
                    className="message-form__input" 
                    type="text" 
                    onChange={handlerSetCurrentReviewTitleLocal}
                    id="messageTitle"
                    value={title}
                />
            </label>
            <label className="message-form__label" htmlFor="messageText">
                <h3 className="message-form__headline">Основное сообщение</h3>
                <textarea 
                    className="message-form__textarea" 
                    name="" 
                    onChange={handlerSetCurrentReviewMessageLocal}
                    id="messageText"
                    value={message}
                ></textarea>
            </label>
            <button className="message-form__button" onClick={handlerSendFormLocal}>Отправить</button>
        </form>
    )
}

export default messageForm;