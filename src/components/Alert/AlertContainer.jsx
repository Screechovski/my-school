import React from "react";
import {Alert} from "./Alert";
import css from "./Alert.module.sass";

export const AlertContainer = () => {
    const alerts = [
        {
            type: "error",
            key: 1,
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy  Lorem Ipsum has been the industry's standard dummy text ever since t"
        },
        {
            type: "warning",
            key: 2,
            message: "Lorem Ipsum is simply dummy"
        },
        {
            type: "success",
            key: 3,
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        },
        {
            type: "info",
            key: 4,
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th"
        }
    ];
    return (
        <div className={css.alertWrapper}>
            <ul className={css.alertWrapper__list}>
                {alerts.map(({type, message, key}) => (
                    <li key={key}>
                        <Alert id={key} type={type} message={message} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
