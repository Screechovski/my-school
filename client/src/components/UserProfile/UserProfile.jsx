import React from "react";
import {Button} from "../../molecules/Button/Button";
import {smartFetch} from "../../assets/helper";

export const UserProfile = () => {
    const clickHandler = () => {
        smartFetch("/logout").then(console.log).catch(console.warn);
    };

    return <Button cssClass="w-10" text="Выйти" clickHandler={clickHandler} />;
};
