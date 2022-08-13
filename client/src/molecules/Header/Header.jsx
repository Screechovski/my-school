import React, {memo} from "react";
import {Logo} from "@/molecules/Logo/Logo";
import {Navigation} from "@/molecules/Navigation/Navigation";
import css from "./Header.module.sass";
import {UserPanel} from "../../components/UserPanel/UserPanel";

export const Header = () => {
    return (
        <header className={css.header + " r-container"}>
            <div className={css.header__container}>
                <Logo type="medium" />
                <Navigation />
                <UserPanel />
            </div>
        </header>
    );
};
