//react
import React from 'react';
//css
import './messageForm.sass';

const messageForm = ({userName, title, message, setCurrentReviewName, setCurrentReviewTitle, setCurrentReviewMessage, addReview}) => {
    const handlerSetCurrentReviewName = ({target}) => {
        setCurrentReviewName(target.value);
    }
    const handlerSetCurrentReviewTitle = ({target}) => {
        setCurrentReviewTitle(target.value);
    }
    const handlerSetCurrentReviewMessage = ({target}) => {
        setCurrentReviewMessage(target.value);
    }
    const handlerSendForm = () => {
        addReview();
    }

    return (
        <form className="message-form" action="" onSubmit={e=>e.preventDefault()}>
            <h2 className="message-form__title">Оставьте свой отзыв</h2>
            <label className="message-form__label" htmlFor="messageTitle">
                <h3 className="message-form__headline">Ваше имя</h3>
                <input 
                    className="message-form__input" 
                    onChange={handlerSetCurrentReviewName}
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
                    onChange={handlerSetCurrentReviewTitle}
                    id="messageTitle"
                    value={title}
                />
            </label>
            <label className="message-form__label" htmlFor="messageText">
                <h3 className="message-form__headline">Основное сообщение</h3>
                <textarea 
                    className="message-form__textarea" 
                    name="" 
                    onChange={handlerSetCurrentReviewMessage}
                    id="messageText"
                    value={message}
                ></textarea>
            </label>
            <button className="message-form__button" onClick={handlerSendForm}>Отправить</button>
        </form>
    )
}

export default messageForm;