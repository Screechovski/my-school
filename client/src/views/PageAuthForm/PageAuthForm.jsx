import React from "react";
import {MainForm} from "../../molecules/MainForm/MainForm";
import {AuthForm} from "../../components/AuthForm/AuthForm";

export const PageAuthForm = () => {
    return (
        <MainForm cssClass="flex items-center justify-center">
            <AuthForm />
        </MainForm>
    );
};
