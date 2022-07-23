//react
import React from 'react';
//css
import './messageForm.sass';

const messageForm = ({ email, title, message, handlerSetCurrentReviewEmail, handlerSetCurrentReviewTitle, handlerSetCurrentReviewMessage, handlerSendForm }) => {
    const handlerSetCurrentReviewEmailLocal = (e) => {
        const { target } = e;
        e.preventDefault();
        handlerSetCurrentReviewEmail(target.value);
    }
    const handlerSetCurrentReviewTitleLocal = (e) => {
        const { target } = e;
        e.preventDefault();
        handlerSetCurrentReviewTitle(target.value);
    }
    const handlerSetCurrentReviewMessageLocal = (e) => {
        const { target } = e;
        e.preventDefault();
        handlerSetCurrentReviewMessage(target.value);
    }
    const handlerSendFormLocal = () => {
        handlerSendForm();
    }

    return (
        <form className="message-form" action="src/old/messageForm/messageForm">
            <h2 className="message-form__title">Оставьте свой отзыв</h2>
            <label className="message-form__label" htmlFor="userEmail">
                <h3 className="message-form__headline">Ваш email</h3>
                <input
                    className="message-form__input"
                    onChange={handlerSetCurrentReviewEmailLocal}
                    type="text"
                    id="userEmail"
                    value={email}
                />
            </label>
            <label className="message-form__label" htmlFor="messageTitle">
                <h3 className="message-form__headline">Ваше имя</h3>
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
            <button className="message-form__button" type="button" onClick={handlerSendFormLocal}>Отправить</button>
        </form>
    )
}

export default messageForm;