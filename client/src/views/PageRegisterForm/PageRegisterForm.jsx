import React from "react";
import {MainForm} from "../../molecules/MainForm/MainForm";
import {RegisterForm} from "../../components/RegisterForm/RegisterForm";

export const PageRegisterForm = ({}) => {
    return (
        <MainForm cssClass="flex items-center justify-center">
            <RegisterForm />
        </MainForm>
    );
};
