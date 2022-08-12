import React from "react";
import css from "./AlertContainer.module.sass";
import {Alert} from "../../molecules/Alert/Alert";
import {useSelector} from "react-redux";
import {alertsSelector} from "../../store/alerts/alertsSelectors";

export const AlertContainer = () => {
    const alerts = useSelector(alertsSelector);

    return (
        <div className={css.alertWrapper}>
            <ul className={css.alertWrapper__list}>
                {alerts.map(({type, message, id}) => (
                    <li key={id}>
                        <Alert id={id} type={type} message={message} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
